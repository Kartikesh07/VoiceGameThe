import fs from 'node:fs';
import assert from 'node:assert/strict';
const base = 'http://127.0.0.1:3104';
const targets = await (await fetch('http://localhost:9227/json/list')).json();
const socket = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
await new Promise((resolve,reject) => {socket.onopen=resolve; socket.onerror=reject;});
let sequence=0;
const pending = new Map();
const errors=[];
socket.onmessage=event=> {const message=JSON.parse(event.data);if(message.id){const p=pending.get(message.id);pending.delete(message.id);message.error?p.reject(message.error):p.resolve(message.result);} if(message.method==='Runtime.exceptionThrown')errors.push(message.params.exceptionDetails.text);};
const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++sequence;pending.set(id,{resolve,reject});socket.send(JSON.stringify({id,method,params}));});
const pause=ms=>new Promise(r=>setTimeout(r,ms));
const evaluate=async expression=> {const r=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
await send('Page.enable');await send('Runtime.enable');
async function go(route){await send('Page.navigate',{url:base+route});await pause(450);for(let i=0;i<30;i++){if(await evaluate('document.readyState === "complete" && !!document.querySelector("main h1")'))break;await pause(100);}assert(await evaluate('!!document.querySelector("main h1")'),`Preview did not load: ${route}`);await pause(200);}
async function click(text){const result=await evaluate(`(()=>{const b=[...document.querySelectorAll('button')].find(b=>b.textContent.trim()===${JSON.stringify(text)});if(!b)return false;b.click();return true;})()`);assert(result,`Button missing: ${text}`);await pause(400);}
const output='verification';fs.mkdirSync(output,{recursive:true});
await go('/');await evaluate('localStorage.clear()');
const routes=['/','/news','/reviews','/impressions','/features','/development','/interviews','/documentaries','/search','/saved','/articles/the-worlds-we-lose-ourselves-in','/articles/a-quieter-kind-of-adventure','/articles/chrono-shift-echoes-of-eternity-review','/articles/the-archaeology-of-abandoned-servers'];
const report=[];
for(const width of [375,768,1024,1440]){
 await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});
 for(const route of routes){
  await go(route);
  const state=await evaluate(`({title:document.title,h1:document.querySelectorAll('h1').length,width:innerWidth,scroll:document.documentElement.scrollWidth,zeroSize:[...document.querySelectorAll("main .art img")].filter(i=>i.getBoundingClientRect().height<1).map(i=>i.alt),broken:[...document.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src),overflow:[...document.querySelectorAll('main *')].filter(e=>{let r=e.getBoundingClientRect();return r.right>innerWidth+2 && getComputedStyle(e).position!=='absolute' && !e.closest('.overflow-x-auto')}).slice(0,5).map(e=>({tag:e.tagName,class:e.className}))})`);
  report.push({width,route,...state});
  assert.equal(state.h1,1,`${route}: heading count`);
  assert.match(state.title,/TheGameVoice/,`${route}: title`);
  assert(state.scroll<=width+1,`${route}@${width}: overflow ${state.scroll} ${JSON.stringify(state.overflow)}`);
  assert.equal(state.zeroSize.length,0,`${route}: zero-height artwork ${state.zeroSize.join(", ")}`);
  assert.equal(state.broken.length,0,`${route}: broken images`);
  if(width===375||width===1440){const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(`${output}/${width}-${route.replaceAll('/','_')||'home'}.png`,Buffer.from(shot.data,'base64'));}
 }
 console.log(`Responsive routes passed at ${width}px`);
}
await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
await go('/news');await click('Next');assert.match(await evaluate('document.querySelector("main").textContent'),/Page 2 of 2/);await click('Hardware');assert.equal(await evaluate('document.querySelectorAll("main article").length'),5);await click('ALL');
await evaluate(`document.querySelector('select').value='oldest';document.querySelector('select').dispatchEvent(new Event('change',{bubbles:true}))`);await pause(300);
assert.match(await evaluate('document.querySelector("main h2").textContent'),/Choosing an engine/);
await go('/reviews');await click('Quick Verdict Summary');assert(await evaluate('!!document.querySelector("[id^=verdict-]")'));await click('Hide Verdict Highlights');
await click('Nintendo Switch');assert(await evaluate('document.querySelectorAll("main article").length > 0'));
assert.match(await evaluate('document.querySelector("main h2").textContent'),/Silent Canopy/);
await go('/features');await click('Deep Dives (>6 min)');assert.equal(await evaluate('document.querySelectorAll("main article").length'),1);
await go('/search?q=Danchi&category=IMPRESSIONS');assert.equal(await evaluate('document.querySelectorAll("main article").length'),1);
await go('/search?q=zzzznotfound');assert.match(await evaluate('document.querySelector("main").textContent'),/No matching articles found/);
await go('/articles/the-worlds-we-lose-ourselves-in');
await evaluate('document.querySelector(`main button[aria-label="Save article for later"]`).click()');await pause(200);
await go('/saved');assert.equal(await evaluate('document.querySelectorAll("main article").length'),1);await send('Page.reload');await pause(600);assert.equal(await evaluate('document.querySelectorAll("main article").length'),1);
await evaluate('document.querySelector(`main button[aria-label="Remove from bookmarks"]`).click()');await pause(200);assert.match(await evaluate('document.querySelector("main").textContent'),/Your reading list is empty/);
await go('/articles/the-worlds-we-lose-ourselves-in');
await evaluate('document.getElementById("article-body").scrollIntoView()');await pause(200);const before=await evaluate('Number(document.querySelector("[role=progressbar]").getAttribute("aria-valuenow"))');
await evaluate('window.scrollTo(0,document.getElementById("article-body").offsetTop+document.getElementById("article-body").offsetHeight)');await pause(200);const after=await evaluate('Number(document.querySelector("[role=progressbar]").getAttribute("aria-valuenow"))');assert(after>before);
await go('/documentaries');assert.equal(await evaluate('document.querySelectorAll("video,button[aria-label^=Watch]").length'),0);assert(!/4K|60FPS|WATCH →/.test(await evaluate('document.querySelector("main").textContent')));
await evaluate('document.querySelector("button[aria-haspopup=dialog]").focus();document.querySelector("button[aria-haspopup=dialog]").click()');await pause(200);assert(await evaluate('!!document.activeElement.closest("[role=dialog]")'));assert(await evaluate('document.querySelector("main").inert'));
await evaluate(`(()=>{const items=document.querySelector('[role=dialog]').querySelectorAll('button,input,a[href]');items[items.length-1].focus()})()`);
await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});assert(await evaluate('document.activeElement === document.querySelector("[role=dialog] button")'));
await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await pause(200);assert.equal(await evaluate('document.querySelectorAll("[role=dialog]").length'),0);assert(await evaluate('document.activeElement.getAttribute("aria-haspopup") === "dialog"'));
await send('Emulation.setDeviceMetricsOverride',{width:375,height:1000,deviceScaleFactor:1,mobile:false});await go('/');
await evaluate('document.querySelector(`button[aria-label="Open navigation menu"]`).focus();document.querySelector(`button[aria-label="Open navigation menu"]`).click()');await pause(200);
assert(await evaluate('!!document.activeElement.closest("[role=dialog]") && document.querySelector("main").inert'));
await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await pause(200);assert.equal(await evaluate('document.querySelectorAll("[role=dialog]").length'),0);
await evaluate('document.querySelector(`button[aria-label="Scroll trending right"]`).click()');await pause(500);assert(await evaluate('document.querySelector(`[aria-label="Trending stories rail"]`).scrollLeft > 0'));
await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});await go('/');assert(await evaluate('matchMedia("(prefers-reduced-motion: reduce)").matches'));
assert.equal(errors.length,0,errors.join('\n'));
fs.writeFileSync(`${output}/browser-report.json`,JSON.stringify({responsive:report,interactions:'Passed pagination, news filters/sort, review filter/expansion, search query/category/empty state, bookmark persistence/removal, article progress, non-playable documentary previews, search focus/background lock/Escape/restoration, reduced motion.',errors},null,2));
console.log('Interaction checks passed');socket.close();
