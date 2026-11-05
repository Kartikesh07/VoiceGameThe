import type { Story, Category } from "@/types";

// Published reading notes link to their sources. All other entries are explicit samples.
export const stories: Story[] = [
  {
    "id": "story-1",
    "slug": "the-worlds-we-lose-ourselves-in",
    "category": "FEATURES",
    "title": "The worlds we lose ourselves in",
    "subtitle": "Why a remembered path can matter more than a map full of objectives.",
    "excerpt": "Why a remembered path can matter more than a map full of objectives.",
    "coverImage": "/worlds.png",
    "alt": "Editorial illustration for The worlds we lose ourselves in; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-28",
    "readTime": "7 MIN READ",
    "featured": true,
    "trending": true,
    "tags": [
      "Worldbuilding",
      "Philosophy",
      "Architecture",
      "Immersion"
    ],
    "content": {
      "lead": "Long after the credits roll, the boss patterns fade, and the muscle memory atrophies, something stranger remains: the phantom geography of spaces that exist only in code.",
      "paragraphs": [
        "We can recall the exact angle of late afternoon light cutting through the collapsed nave of a crumbling cathedral in Lothric. We remember the distinct, muffled echo of boots sinking into wet peat on the outskirts of Novigrad, or the quiet hum of a fusion reactor nestled inside an orbital airlock thousands of kilometers above a cobalt alien sea.",
        "Why can a digital place feel as familiar as a street we once walked? Criticism often concentrates on mechanics, frame rates and narrative pacing. Yet the shape of a place, and the freedom to find our own way through it, can stay with us just as strongly.",
        "Unlike cinema, which frames perspective through an unyielding lens, games demand our co-presence. When we navigate a ruined corridor or stand atop an alpine precipice, the world does not merely perform for us; it waits on our volition. Every shadow cast across the damp stone is an invitation to inhabit."
      ],
      "pullQuote": {
        "quote": "The highest achievement of interactive media isn't photorealism—it is spatial memory. The quiet art of building places that welcome our curiosity.",
        "attribution": "From this demonstration essay"
      },
      "subsections": [
        {
          "heading": "The Architecture of Subtraction",
          "paragraphs": [
            "Modern game design often suffers from horror vacui—the fear of empty space. Open-world maps groan under the weight of hundreds of icons, waypoints, and relentless procedural chores. But the landscapes that truly carve themselves into our consciousness are almost invariably defined by what the designers chose to withhold.",
            "Consider the quiet windswept stretches of Fumito Ueda's Shadow of the Colossus, or the desolate salt flats of Journey. In these worlds, silence is not an absence of content; it is a structural pillar. Without the constant chatter of navigational UI, the player is forced to listen to the topography itself."
          ],
          "image": "/images/ancient-ruins.svg",
          "imageCaption": "Monolithic remnants: when scale and silence combine to evoke forgotten histories."
        },
        {
          "heading": "Sound as Atmospheric Weight",
          "paragraphs": [
            "We experience space with our ears long before our eyes synthesize the geometry. A low subterranean rumble that vibrates just below conscious perception; the metallic clink of a carabiner against cold rock; the subtle Doppler shift of rain against glass.",
            "When audio directors treat reverberation not as an effect but as an environmental texture, digital worlds gain physical weight. They cease to feel like textured polygons and begin to breathe like genuine habitats."
          ]
        },
        {
          "heading": "The journey back",
          "paragraphs": [
            "A return journey is an unusually revealing design test. On the first visit, a corridor is a sequence of unknowns. On the second, it becomes a route. We anticipate the turn, recognise the light under a doorway and decide whether to take a familiar shortcut. A space has become part of our own vocabulary.",
            "That familiarity can change without the geometry changing at all. An empty room feels different after we understand who used it. A courtyard crossed in safety becomes a different place when we are carrying something fragile. The meaning of the route comes from the situation and from what we remember bringing through it.",
            "This is one reason a carefully arranged small world can feel more expansive than a much larger map. Connections accumulate significance. A distant balcony, first seen from below, offers a new understanding of the street when we finally reach it. The pleasure is not simply unlocking another area; it is discovering how the pieces belong together.",
            "Fast travel is useful, especially when a route has stopped asking anything interesting of us. But it also changes the relationship between places. A destination selected from a menu is a point in an interface. A destination reached by following a river, taking shelter and choosing a pass has a position in a remembered landscape. Neither approach is always right; each gives the journey a different role."
          ]
        },
        {
          "heading": "A world at the edge of the frame",
          "paragraphs": [
            "Environmental storytelling is often discussed as a collection of clues. Place an object beside another object and a player may infer an event. But an environment can also communicate through ordinary arrangements that do not hide a mystery. A bench facing a view suggests that someone once valued the view. A repaired wall suggests that a place was worth maintaining.",
            "These details work because they do not all point toward a reward. If every unusual object hides a collectible, curiosity can become a search technique. Some objects should simply belong where they are. A room can contain evidence of daily life without requiring the player to solve it.",
            "The same restraint applies to scale. An enormous structure can create a moment of spectacle, but a smaller inhabited space provides something to measure that spectacle against. A low ceiling, a handrail or a chair gives the body a point of reference. The monumental becomes legible through the ordinary.",
            "There is also room for an unresolved edge. A path that disappears into a landscape can suggest a wider world without promising a future quest. The distinction needs care: a repeatedly highlighted locked gate feels like an instruction. A distant road, seen only as part of a view, can remain a possibility. The art is in communicating which kind of invitation the player is receiving."
          ]
        },
        {
          "heading": "What we choose to remember",
          "paragraphs": [
            "A memorable world does not require a single correct response. One player may remember a difficult climb; another may remember the resting place before it. Both have formed a relationship with the same environment through different moments of attention. Design can make those moments possible without dictating which one must matter most.",
            "This changes how we might talk about discovery. Finding a landmark is one kind of discovery, but learning to recognise it in changing weather is another. Knowing where a path leads is useful; knowing when we would prefer to take it is more personal. A world starts to feel inhabited when it supports choices that exceed the immediate objective.",
            "There are practical questions behind that feeling. Can a player orient themselves after returning from a break? Does the lighting direct attention without washing away the character of a room? Are the sounds of adjoining spaces distinct enough to help with navigation? These are not separate from atmosphere. They are ways of making atmosphere available to the person moving through it.",
            "Perhaps the worlds that stay with us are the ones that allow us to build a small life inside their rules. We learn a route, develop a habit, choose a place to stop. Long after the task is complete, that remembered choice remains. The screen goes dark, but we can still imagine the way home."
          ]
        },
        {
          "heading": "Making room for different readers",
          "paragraphs": [
            "The invitation to inhabit a place should also be an invitation to understand it. A world that relies on colour alone to distinguish routes may lose some of its clarity for players who see those colours differently. A world that hides essential information in a quiet sound may need another way to communicate the same event. Options for subtitles, contrast and navigation assistance can support the atmosphere by letting more people take part in it.",
            "Restraint should not become a reason to withhold help. The player who chooses a clearer route marker is still exploring, making decisions and finding moments that matter to them. The most generous environments can accommodate both the person who wants to become lost for an afternoon and the person who has only a short time to find their way. What matters is the quality of the relationship that develops, not how little assistance a player can manage without."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-2",
    "slug": "a-quieter-kind-of-adventure",
    "category": "IMPRESSIONS",
    "title": "Danchi Days and the small rituals of summer",
    "subtitle": "A reading note from the published TheGameVoice archive.",
    "excerpt": "Tarishi Singh reflects on childhood nostalgia, neighbourhood connections and sensory minigames in the Danchi Days demo.",
    "coverImage": "/images/summer-courtyard.svg",
    "alt": "Editorial illustration for Danchi Days and the small rituals of summer; not a screenshot",
    "author": {
      "name": "Tarishi Singh",
      "role": "Original article author · TheGameVoice",
      "avatar": "TA"
    },
    "publishedAt": "2026-10-28",
    "readTime": "1 MIN READ",
    "featured": true,
    "trending": true,
    "tags": [
      "Hands-On",
      "Sci-Fi",
      "Indie",
      "Atmosphere"
    ],
    "content": {
      "lead": "Tarishi Singh reflects on childhood nostalgia, neighbourhood connections and sensory minigames in the Danchi Days demo.",
      "paragraphs": [
        "The published impressions piece considers how pixel art and everyday conversations support a story about community and family. The original review also discusses the limits of a demo whose larger story remains unfinished.",
        "This page is a short, attributed reading note, not a reproduction of the original article. Follow the source link for the complete piece and its original context."
      ]
    },
    "editorialStatus": "source-summary",
    "artworkCredit": "Original prototype illustration · not game footage",
    "source": {
      "url": "https://www.thegamevoice.com/article/a-pixelated-postcard-from-a-summer-that-never-really-ends-danchi-days",
      "publication": "TheGameVoice",
      "originalTitle": "A Pixelated Postcard from a Summer That Never Really Ends - Danchi Days"
    }
  },
  {
    "id": "story-3",
    "slug": "inside-the-art-of-building-worlds-that-feel-alive",
    "category": "DEVELOPMENT",
    "title": "Building worlds that feel alive",
    "subtitle": "A design notebook on the small systems that make a place convincing.",
    "excerpt": "A design notebook on the small systems that make a place convincing.",
    "coverImage": "/images/world-systems.svg",
    "alt": "Editorial illustration for Building worlds that feel alive; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-27",
    "readTime": "1 MIN READ",
    "featured": true,
    "trending": false,
    "tags": [
      "Tech",
      "Game Engine",
      "Level Design",
      "Art Direction"
    ],
    "content": {
      "lead": "Believability often begins at the edges of attention: a path worn into grass, a lamp someone has left burning, a room arranged around daily work. These details suggest use rather than decoration.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "From scenery to systems",
          "paragraphs": [
            "Imagine a weather system that changes the route through a valley. The landscape now asks something of the player. Environmental design becomes a conversation between a space and the person moving through it."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-4",
    "slug": "the-next-chapter-of-play-taking-shape",
    "category": "NEWS",
    "title": "What a different controller could change",
    "subtitle": "A sample dispatch exploring physical input and the language of play.",
    "excerpt": "A sample dispatch exploring physical input and the language of play.",
    "coverImage": "/images/retro-console.svg",
    "alt": "Editorial illustration for What a different controller could change; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-31",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": true,
    "tags": [
      "Industry",
      "Hardware",
      "Innovation",
      "Open Source"
    ],
    "content": {
      "lead": "A button is a useful abstraction, but it is only one way to make a decision. Turning a crank, balancing an object or holding a lever can make the same virtual action feel very different.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "Designing around a gesture",
          "paragraphs": [
            "This concept asks what happens when an interaction starts with a physical movement. It is a design exercise, not a report about an announced device or industry event."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-5",
    "slug": "chrono-shift-echoes-of-eternity-review",
    "category": "REVIEWS",
    "title": "Chrono Shift: reading the ruins",
    "subtitle": "An example review of a fictional exploration game. All scores and game details are sample data.",
    "excerpt": "An example review of a fictional exploration game. All scores and game details are sample data.",
    "coverImage": "/images/ancient-ruins.svg",
    "alt": "Editorial illustration for Chrono Shift: reading the ruins; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-26",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": true,
    "tags": [
      "Review",
      "Adventure",
      "Sci-Fi",
      "Puzzle"
    ],
    "review": {
      "score": 9.4,
      "verdict": "Sample · Essential",
      "gameTitle": "Chrono Shift: Echoes of Eternity",
      "developer": "Fictional studio",
      "publisher": "Demonstration only",
      "platform": [
        "PC",
        "PlayStation 5",
        "Steam Deck"
      ],
      "releaseDate": "Not announced — fictional concept",
      "pros": [
        "Illustrative strength: a clear central design idea",
        "Illustrative strength: atmosphere supports exploration"
      ],
      "cons": [
        "Illustrative consideration: pacing needs careful balancing"
      ],
      "summary": "This sample verdict rewards the idea of spatial deduction while questioning how repeat journeys might affect the pace. It demonstrates a review layout; it does not describe a tested commercial game."
    },
    "content": {
      "lead": "Imagine an observatory where the puzzle is not finding a key, but understanding what a machine once did. Chrono Shift is a fictional game concept built around that premise.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "An example critical lens",
          "paragraphs": [
            "This sample verdict rewards the idea of spatial deduction while questioning how repeat journeys might affect the pace. It demonstrates a review layout; it does not describe a tested commercial game."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-6",
    "slug": "why-the-best-game-stories-leave-room-for-us",
    "category": "FEATURES",
    "title": "Valor Mortis: what the camera changes",
    "subtitle": "A reading note from the published TheGameVoice archive.",
    "excerpt": "A published opinion piece examines the design problems that emerge when Soulslike combat moves into first person.",
    "coverImage": "/images/duel.svg",
    "alt": "Editorial illustration for Valor Mortis: what the camera changes; not a screenshot",
    "author": {
      "name": "Vaibhav \"ChIcKnLiTL\" Poojary",
      "role": "Original article author · TheGameVoice",
      "avatar": "VA"
    },
    "publishedAt": "2026-10-25",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": false,
    "tags": [
      "Narrative",
      "Game Design",
      "Essay"
    ],
    "content": {
      "lead": "A published opinion piece examines the design problems that emerge when Soulslike combat moves into first person.",
      "paragraphs": [
        "Vaibhav Poojary focuses on enemy readability, limited peripheral vision and the relationship between encounter design and perspective. Read the original for the author’s complete first-hand assessment of Valor Mortis.",
        "This page is a short, attributed reading note, not a reproduction of the original article. Follow the source link for the complete piece and its original context."
      ]
    },
    "editorialStatus": "source-summary",
    "artworkCredit": "Original prototype illustration · not game footage",
    "source": {
      "url": "https://www.thegamevoice.com/article/can-a-soulslike-survive-in-first-person-the-design-challenge-behind-valor-mortis",
      "publication": "TheGameVoice",
      "originalTitle": "Can a Soulslike Survive in First Person? - The Design Challenge Behind Valor Mortis"
    }
  },
  {
    "id": "story-7",
    "slug": "indian-studios-finding-their-voice",
    "category": "DEVELOPMENT",
    "title": "Zatun: a studio with many worlds",
    "subtitle": "A reading note from the published TheGameVoice archive.",
    "excerpt": "TheGameVoice explores how Ahmedabad studio Zatun combines development services with games of its own.",
    "coverImage": "/images/studio-dev.svg",
    "alt": "Editorial illustration for Zatun: a studio with many worlds; not a screenshot",
    "author": {
      "name": "Vaibhav \"ChIcKnLiTL\" Poojary",
      "role": "Original article author · TheGameVoice",
      "avatar": "VA"
    },
    "publishedAt": "2026-10-16",
    "readTime": "1 MIN READ",
    "featured": true,
    "trending": true,
    "tags": [
      "Indian Gaming",
      "Indie Dev",
      "Studio Spotlight",
      "Culture"
    ],
    "content": {
      "lead": "TheGameVoice explores how Ahmedabad studio Zatun combines development services with games of its own.",
      "paragraphs": [
        "Vaibhav Poojary’s studio profile traces a varied portfolio spanning art services, virtual reality and original projects. It offers a specific Indian studio perspective on the relationship between client work and creative ownership.",
        "This page is a short, attributed reading note, not a reproduction of the original article. Follow the source link for the complete piece and its original context."
      ]
    },
    "editorialStatus": "source-summary",
    "artworkCredit": "Original prototype illustration · not game footage",
    "source": {
      "url": "https://www.thegamevoice.com/article/the-many-worlds-of-zatun-from-working-with-2k-and-disney-to-building-its-own-ip",
      "publication": "TheGameVoice",
      "originalTitle": "The Many Worlds of Zatun: From Working With 2K and Disney to Building Its Own IP"
    }
  },
  {
    "id": "story-8",
    "slug": "the-people-behind-the-places-we-remember",
    "category": "INTERVIEWS",
    "title": "The people behind the places we remember",
    "subtitle": "An interview concept about the everyday decisions behind environmental storytelling.",
    "excerpt": "An interview concept about the everyday decisions behind environmental storytelling.",
    "coverImage": "/images/observatory.svg",
    "alt": "Editorial illustration for The people behind the places we remember; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-23",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": true,
    "tags": [
      "Interview",
      "Creative Direction",
      "World Design"
    ],
    "interview": {
      "interviewee": "Elena Rostova",
      "role": "Creative Director",
      "studio": "Ghostlight Works",
      "location": "Stockholm, Sweden"
    },
    "content": {
      "lead": "This is an interview brief, not a transcript. Elena Rostova is a fictional subject used to demonstrate how a creator profile could sit alongside a longer conversation.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "Questions worth asking",
          "paragraphs": [
            "How do you decide which parts of a location should remain unexplained? What can a room communicate before the player reads a line of dialogue? These are proposed questions, with no invented answers attributed to a real person."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-9",
    "slug": "neon-foundry-tactical-noir-review",
    "category": "REVIEWS",
    "title": "Neon Foundry: the city as a puzzle",
    "subtitle": "A sample verdict for a fictional tactical game, with illustrative scoring.",
    "excerpt": "A sample verdict for a fictional tactical game, with illustrative scoring.",
    "coverImage": "/images/cyberpunk-city.svg",
    "alt": "Editorial illustration for Neon Foundry: the city as a puzzle; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-22",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": false,
    "tags": [
      "Review",
      "Cyberpunk",
      "Strategy",
      "Turn-Based"
    ],
    "review": {
      "score": 8.8,
      "verdict": "Sample · Great",
      "gameTitle": "Neon Foundry",
      "developer": "Fictional studio",
      "publisher": "Demonstration only",
      "platform": [
        "PC",
        "Xbox Series X",
        "PlayStation 5"
      ],
      "releaseDate": "Not announced — fictional concept",
      "pros": [
        "Illustrative strength: a clear central design idea",
        "Illustrative strength: atmosphere supports exploration"
      ],
      "cons": [
        "Illustrative consideration: pacing needs careful balancing"
      ],
      "summary": "For this example, the verdict explores a tension between compact tactical spaces and repetition. The score and platform details exist solely to demonstrate the interface."
    },
    "content": {
      "lead": "Neon Foundry imagines a city viewed as a network of opportunities: a service tunnel, a rooftop crossing, a light that can be switched off. Its fictional premise puts observation ahead of reflex.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "The trade-off",
          "paragraphs": [
            "For this example, the verdict explores a tension between compact tactical spaces and repetition. The score and platform details exist solely to demonstrate the interface."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-10",
    "slug": "silent-canopy-review",
    "category": "REVIEWS",
    "title": "Silent Canopy: a slower way through",
    "subtitle": "A sample review of an imagined woodland adventure. No commercial game was tested.",
    "excerpt": "A sample review of an imagined woodland adventure. No commercial game was tested.",
    "coverImage": "/images/indie-landscape.svg",
    "alt": "Editorial illustration for Silent Canopy: a slower way through; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-21",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": false,
    "tags": [
      "Review",
      "Survival",
      "Atmosphere",
      "Indie"
    ],
    "review": {
      "score": 9.1,
      "verdict": "Sample · Exceptional",
      "gameTitle": "Silent Canopy",
      "developer": "Fictional studio",
      "publisher": "Demonstration only",
      "platform": [
        "PC",
        "Nintendo Switch",
        "PlayStation 5"
      ],
      "releaseDate": "Not announced — fictional concept",
      "pros": [
        "Illustrative strength: a clear central design idea",
        "Illustrative strength: atmosphere supports exploration"
      ],
      "cons": [
        "Illustrative consideration: pacing needs careful balancing"
      ],
      "summary": "A slower pace works when there is something worth noticing. This demonstration verdict considers the balance between attentive exploration and the risk of leaving a player without direction."
    },
    "content": {
      "lead": "Silent Canopy is a fictional concept in which following a stream or watching the movement of branches matters more than a quest marker. The example asks what a game might gain by lowering its voice.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "Making quiet meaningful",
          "paragraphs": [
            "A slower pace works when there is something worth noticing. This demonstration verdict considers the balance between attentive exploration and the risk of leaving a player without direction."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-11",
    "slug": "the-archaeology-of-abandoned-servers",
    "category": "DOCUMENTARIES",
    "title": "The archaeology of abandoned servers",
    "subtitle": "A documentary treatment about the social spaces games leave behind.",
    "excerpt": "A documentary treatment about the social spaces games leave behind.",
    "coverImage": "/images/server-vault.svg",
    "alt": "Editorial illustration for The archaeology of abandoned servers; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-20",
    "readTime": "1 MIN READ",
    "featured": true,
    "trending": true,
    "tags": [
      "Documentary",
      "Video",
      "Preservation",
      "MMO",
      "Internet History"
    ],
    "documentary": {
      "duration": "42:18",
      "productionYear": "2026",
      "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "chapters": [
        {
          "time": "00:00",
          "title": "Prologue: The Final Countdown"
        },
        {
          "time": "08:14",
          "title": "Chapter 1: The Ghosts of Star Wars Galaxies"
        },
        {
          "time": "18:40",
          "title": "Chapter 2: Packet Sniffing & Server Emulation"
        },
        {
          "time": "29:10",
          "title": "Chapter 3: The Ethics of Digital Memorials"
        },
        {
          "time": "38:22",
          "title": "Epilogue: When Code Becomes Heritage"
        }
      ]
    },
    "content": {
      "lead": "What remains of a multiplayer world after its last gathering? This proposed film would approach the question through places, player memories and the practical challenges of preservation.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "A film still on paper",
          "paragraphs": [
            "This is a written documentary concept. No film, interviews or archival permissions are attached, and no playback is available. The chapter outline suggests a possible structure rather than an existing production."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-12",
    "slug": "making-space-for-new-perspectives",
    "category": "DOCUMENTARIES",
    "title": "Making space for new perspectives",
    "subtitle": "A film concept about the craft of animation in games.",
    "excerpt": "A film concept about the craft of animation in games.",
    "coverImage": "/images/animation-desk.svg",
    "alt": "Editorial illustration for Making space for new perspectives; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-18",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": false,
    "tags": [
      "Documentary",
      "Animation",
      "Art",
      "Craft"
    ],
    "documentary": {
      "duration": "28:45",
      "productionYear": "2026",
      "chapters": [
        {
          "time": "00:00",
          "title": "The Return of the Pencil"
        },
        {
          "time": "07:30",
          "title": "Smear Frames in High Definition"
        },
        {
          "time": "16:20",
          "title": "Matching Input Latency to Frame Rates"
        },
        {
          "time": "24:10",
          "title": "The Hand-Crafted Future"
        }
      ]
    },
    "content": {
      "lead": "A character can reveal uncertainty through a pause before a step. Animation turns a collection of poses into a performance, often using small gestures that are easy to overlook.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "Proposed approach",
          "paragraphs": [
            "The treatment would follow a single movement from sketch to playable scene. It is a concept preview, not a completed documentary or a claim of access to a studio."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-13",
    "slug": "independent-game-preservation-act-passed",
    "category": "NEWS",
    "title": "When a game goes offline, what should remain?",
    "subtitle": "A sample news-analysis brief on access, preservation and the end of online services.",
    "excerpt": "A sample news-analysis brief on access, preservation and the end of online services.",
    "coverImage": "/images/archive.svg",
    "alt": "Editorial illustration for When a game goes offline, what should remain?; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-30",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": true,
    "tags": [
      "Preservation",
      "Legal",
      "Industry",
      "Copyright"
    ],
    "content": {
      "lead": "A shutdown raises more than a technical question. Players may lose access to places where they spent time together, while preservation efforts face legal and practical limits.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "Questions before conclusions",
          "paragraphs": [
            "This sample proposes questions for future reporting: what depends on a server, what can be documented, and who can grant permission? It does not announce legislation or offer legal guidance."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-14",
    "slug": "the-weight-of-the-sword",
    "category": "IMPRESSIONS",
    "title": "The weight of the sword",
    "subtitle": "A fictional impressions notebook about momentum and commitment in melee combat.",
    "excerpt": "A fictional impressions notebook about momentum and commitment in melee combat.",
    "coverImage": "/images/mecha-forge.svg",
    "alt": "Editorial illustration for The weight of the sword; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-25",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": false,
    "tags": [
      "Impressions",
      "Action",
      "Melee",
      "Physics"
    ],
    "content": {
      "lead": "Project Aegis is an imagined combat prototype. Its central design question is how a heavy weapon could feel convincing without making the controls feel reluctant.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "A useful distinction",
          "paragraphs": [
            "Weight can come from anticipation, sound and recovery, rather than simply delaying an input. This is an illustrative design discussion, not a hands-on report or performance test."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-15",
    "slug": "composing-silence-interview-hildur-lind",
    "category": "INTERVIEWS",
    "title": "Composing silence",
    "subtitle": "An interview concept about restraint, listening and interactive music.",
    "excerpt": "An interview concept about restraint, listening and interactive music.",
    "coverImage": "/images/score.svg",
    "alt": "Editorial illustration for Composing silence; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-19",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": false,
    "tags": [
      "Music",
      "Soundtrack",
      "Composer",
      "Audio"
    ],
    "interview": {
      "interviewee": "Hildur Lind",
      "role": "Composer & Sound Designer",
      "studio": "Independent",
      "location": "Reykjavík, Iceland"
    },
    "content": {
      "lead": "Hildur Lind is a fictional composer profile created for this demonstration. No interview took place, and no awards or professional credits are asserted here.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "The conversation we would explore",
          "paragraphs": [
            "When should a soundtrack withdraw? How might a composer leave space for environmental sound? This outline offers questions rather than fabricated quotations."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-16",
    "slug": "open-source-game-engines-momentum",
    "category": "NEWS",
    "title": "Choosing an engine beyond the feature list",
    "subtitle": "A sample industry brief about tools, ownership and production needs.",
    "excerpt": "A sample industry brief about tools, ownership and production needs.",
    "coverImage": "/images/engine.svg",
    "alt": "Editorial illustration for Choosing an engine beyond the feature list; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-28",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": false,
    "tags": [
      "Open Source",
      "Engine",
      "Godot",
      "Indie Dev"
    ],
    "content": {
      "lead": "An engine decision involves the people who will use it every day. Documentation, export requirements, existing skills and the cost of switching can matter as much as a rendering feature.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "Evidence before a trend",
          "paragraphs": [
            "This is a reporting outline, not a developer survey. It makes no adoption or market-share claims. A published version would need named sources and a clear account of how any figures were collected."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-17",
    "slug": "the-sonic-architecture-of-survival-horror",
    "category": "FEATURES",
    "title": "The sound of something out of sight",
    "subtitle": "An essay on the uneasy relationship between listening and looking in horror.",
    "excerpt": "An essay on the uneasy relationship between listening and looking in horror.",
    "coverImage": "/images/stealth-shadows.svg",
    "alt": "Editorial illustration for The sound of something out of sight; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-15",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": false,
    "tags": [
      "Horror",
      "Audio",
      "Sound Design",
      "Psychology"
    ],
    "content": {
      "lead": "A sound from beyond the frame creates a question that an image can answer too quickly. A scrape in an adjacent room asks us to imagine a source before we can inspect it.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "The value of restraint",
          "paragraphs": [
            "A quiet passage gives a sudden sound somewhere to land. Repeating the same cue can turn uncertainty into a routine, so timing matters as much as volume. This essay makes no physiological or medical claims."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-18",
    "slug": "velocity-zero-anti-grav-racer",
    "category": "IMPRESSIONS",
    "title": "Velocity Zero: finding the racing line",
    "subtitle": "A fictional impressions concept about speed, readability and rhythm.",
    "excerpt": "A fictional impressions concept about speed, readability and rhythm.",
    "coverImage": "/images/speed-racing.svg",
    "alt": "Editorial illustration for Velocity Zero: finding the racing line; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-21",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": false,
    "tags": [
      "Racing",
      "Sci-Fi",
      "Arcade",
      "Impressions"
    ],
    "content": {
      "lead": "Velocity Zero is an imagined anti-gravity racer. Its design premise is simple: a fast game should communicate its next turn before the player runs out of time to react.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "Speed needs structure",
          "paragraphs": [
            "Track silhouettes, repeated landmarks and a consistent visual language could make a difficult circuit learnable. This is a concept discussion with no frame-rate, latency or hands-on testing claims."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-19",
    "slug": "behind-the-pixels-indie-survival",
    "category": "DOCUMENTARIES",
    "title": "Behind the pixels: the work between milestones",
    "subtitle": "A documentary concept about the less visible rhythms of making a game.",
    "excerpt": "A documentary concept about the less visible rhythms of making a game.",
    "coverImage": "/images/production.svg",
    "alt": "Editorial illustration for Behind the pixels: the work between milestones; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-12",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": false,
    "tags": [
      "Documentary",
      "Indie Dev",
      "Behind The Scenes",
      "Personal Story"
    ],
    "documentary": {
      "duration": "35:12",
      "productionYear": "2026",
      "chapters": [
        {
          "time": "00:00",
          "title": "The Prototype Dream"
        },
        {
          "time": "11:20",
          "title": "When the Savings Ran Out"
        },
        {
          "time": "21:05",
          "title": "The Midnight Demo Viral Spike"
        },
        {
          "time": "30:40",
          "title": "Launch Day Tears"
        }
      ]
    },
    "content": {
      "lead": "A prototype is a beginning, not a promise. This proposed documentary would focus on iteration: ideas that change, features that disappear and the everyday work between public milestones.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "An honest treatment",
          "paragraphs": [
            "No filmmakers or developers have been interviewed for this sample. The outline is an invitation to consider the production process, not a record of financial hardship or a claim about a real team."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-20",
    "slug": "the-death-and-rebirth-of-immersive-sims",
    "category": "DEVELOPMENT",
    "title": "A door with more than one answer",
    "subtitle": "A design notebook on the appeal of systems that meet in unexpected ways.",
    "excerpt": "A design notebook on the appeal of systems that meet in unexpected ways.",
    "coverImage": "/images/doorway.svg",
    "alt": "Editorial illustration for A door with more than one answer; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-14",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": false,
    "tags": [
      "Immersive Sim",
      "History",
      "Game Design",
      "Emergence"
    ],
    "content": {
      "lead": "A locked door can be an instruction to find a key, or it can be a question. Could another route, a movable object or a different tool change the problem?",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "Designing for possibility",
          "paragraphs": [
            "When systems share clear rules, players can make plans that were not explicitly scripted. The challenge is making those rules legible enough that experimentation feels purposeful rather than arbitrary."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  },
  {
    "id": "story-21",
    "slug": "from-bengaluru-to-neo-tokyo-vikram-sethi",
    "category": "INTERVIEWS",
    "title": "Imagining a different future city",
    "subtitle": "An interview concept about place, architecture and speculative worlds.",
    "excerpt": "An interview concept about place, architecture and speculative worlds.",
    "coverImage": "/images/cyberpunk-city.svg",
    "alt": "Editorial illustration for Imagining a different future city; not a screenshot",
    "author": {
      "name": "Prototype desk",
      "role": "Demonstration content",
      "avatar": "PD"
    },
    "publishedAt": "2026-10-10",
    "readTime": "1 MIN READ",
    "featured": false,
    "trending": false,
    "tags": [
      "Interview",
      "Cyberpunk",
      "India",
      "Art Direction"
    ],
    "interview": {
      "interviewee": "Vikram Sethi",
      "role": "Founder & Studio Head",
      "studio": "Mandala Interactive",
      "location": "Bengaluru, India"
    },
    "content": {
      "lead": "Vikram Sethi and Mandala Interactive are fictional profiles in this prototype. No studio announcement, interview or commercial project is represented by this article.",
      "paragraphs": [
        "This editorial sample explores a design idea. It is presented to demonstrate the reading experience and is not published reporting."
      ],
      "subsections": [
        {
          "heading": "Starting with a place",
          "paragraphs": [
            "The proposed conversation would ask how everyday infrastructure might shape a speculative city. Transit, shade, markets and public gathering places could offer richer starting points than a familiar skyline."
          ]
        }
      ]
    },
    "editorialStatus": "demonstration",
    "artworkCredit": "Original prototype illustration · not game footage"
  }
];

// Helper Query Functions
export function getStoriesByCategory(category: Category | "ALL"): Story[] {
  if (category === "ALL") return stories;
  return stories.filter((s) => s.category.toUpperCase() === category.toUpperCase());
}

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getFeaturedStories(): Story[] {
  return stories.filter((s) => s.featured);
}

export function getTrendingStories(): Story[] {
  return stories.filter((s) => s.trending);
}

export function getRelatedStories(currentSlug: string, count: number = 3): Story[] {
  const current = getStoryBySlug(currentSlug);
  if (!current) return stories.slice(0, count);

  return stories
    .filter((s) => s.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category, then shared tags
      const aSameCat = a.category === current.category ? 2 : 0;
      const bSameCat = b.category === current.category ? 2 : 0;
      const aSharedTags = a.tags.filter((t) => current.tags.includes(t)).length;
      const bSharedTags = b.tags.filter((t) => current.tags.includes(t)).length;
      return bSameCat + bSharedTags - (aSameCat + aSharedTags);
    })
    .slice(0, count);
}

export function searchStories(query: string, categoryFilter?: Category | "ALL"): Story[] {
  const q = query.trim().toLowerCase();
  let list = stories;

  if (categoryFilter && categoryFilter !== "ALL") {
    list = list.filter((s) => s.category.toUpperCase() === categoryFilter.toUpperCase());
  }

  if (!q) return list;

  return list.filter((s) => {
    const titleMatch = s.title.toLowerCase().includes(q);
    const subtitleMatch = s.subtitle?.toLowerCase().includes(q) ?? false;
    const excerptMatch = s.excerpt.toLowerCase().includes(q);
    const authorMatch = s.author.name.toLowerCase().includes(q);
    const tagMatch = s.tags.some((t) => t.toLowerCase().includes(q));
    const gameMatch = s.review?.gameTitle.toLowerCase().includes(q) ?? false;
    const devMatch = s.review?.developer.toLowerCase().includes(q) ?? false;
    const intervieweeMatch = s.interview?.interviewee.toLowerCase().includes(q) ?? false;

    return titleMatch || subtitleMatch || excerptMatch || authorMatch || tagMatch || gameMatch || devMatch || intervieweeMatch;
  });
}
