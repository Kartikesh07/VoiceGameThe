import type { Story, Category } from "@/types";

export const stories: Story[] = [
  // 1. FEATURES - HERO
  {
    id: "story-1",
    slug: "the-worlds-we-lose-ourselves-in",
    category: "FEATURES",
    title: "The worlds we lose ourselves in",
    subtitle: "What makes a game world stay with us long after we put down the controller?",
    excerpt: "Exploring the fragile alchemy of environmental storytelling, sound architecture, and memory in modern interactive worlds.",
    coverImage: "/worlds.png",
    alt: "Illustration of an explorer overlooking a vast monolithic ruined valley at twilight",
    author: {
      name: "The Editorial Team",
      role: "Features Desk",
      avatar: "ET",
    },
    publishedAt: "2026-10-28",
    readTime: "8 MIN READ",
    featured: true,
    trending: true,
    tags: ["Worldbuilding", "Philosophy", "Architecture", "Immersion"],
    content: {
      lead: "Long after the credits roll, the boss patterns fade, and the muscle memory atrophies, something stranger remains: the phantom geography of spaces that exist only in code.",
      paragraphs: [
        "We can recall the exact angle of late afternoon light cutting through the collapsed nave of a crumbling cathedral in Lothric. We remember the distinct, muffled echo of boots sinking into wet peat on the outskirts of Novigrad, or the quiet hum of a fusion reactor nestled inside an orbital airlock thousands of kilometers above a cobalt alien sea.",
        "Why do digital spaces occupy the same neurological real estate as childhood bedrooms, ancestral landscapes, and real cities we once walked through? In gaming criticism, we often discuss mechanics, frame rates, and narrative pacing. Yet the highest achievement of interactive media may simply be spatial memory—the art of building architectures of resonance.",
        "Unlike cinema, which frames perspective through an unyielding lens, games demand our co-presence. When we navigate a ruined corridor or stand atop an alpine precipice, the world does not merely perform for us; it waits on our volition. Every shadow cast across the damp stone is an invitation to inhabit.",
      ],
      pullQuote: {
        quote: "The highest achievement of interactive media isn't photorealism—it is spatial memory. The quiet art of building places that welcome our curiosity.",
        attribution: "Editorial Journal, Issue 04",
      },
      subsections: [
        {
          heading: "The Architecture of Subtraction",
          paragraphs: [
            "Modern game design often suffers from horror vacui—the fear of empty space. Open-world maps groan under the weight of hundreds of icons, waypoints, and relentless procedural chores. But the landscapes that truly carve themselves into our consciousness are almost invariably defined by what the designers chose to withhold.",
            "Consider the quiet windswept stretches of Fumito Ueda's Shadow of the Colossus, or the desolate salt flats of Journey. In these worlds, silence is not an absence of content; it is a structural pillar. Without the constant chatter of navigational UI, the player is forced to listen to the topography itself.",
          ],
          image: "/images/ancient-ruins.svg",
          imageCaption: "Monolithic remnants: when scale and silence combine to evoke forgotten histories.",
        },
        {
          heading: "Sound as Atmospheric Weight",
          paragraphs: [
            "We experience space with our ears long before our eyes synthesize the geometry. A low subterranean rumble that vibrates just below conscious perception; the metallic clink of a carabiner against cold rock; the subtle Doppler shift of rain against glass.",
            "When audio directors treat reverberation not as an effect but as an environmental texture, digital worlds gain physical weight. They cease to feel like textured polygons and begin to breathe like genuine habitats.",
          ],
        },
      ],
    },
  },

  // 2. IMPRESSIONS
  {
    id: "story-2",
    slug: "a-quieter-kind-of-adventure",
    category: "IMPRESSIONS",
    title: "A quieter kind of adventure is finding its voice",
    subtitle: "On the small moments that make imaginary worlds feel genuinely real.",
    excerpt: "After ten hours with upcoming orbital explorer Celestial Drift, we examine why silence, routine, and solitude hit harder than any scripted set piece.",
    coverImage: "/orbit.png",
    alt: "Illustration of an astronaut gazing through a station viewport at an azure planet",
    author: {
      name: "Devin Mercer",
      role: "Contributing Editor",
      avatar: "DM",
    },
    publishedAt: "2026-10-29",
    readTime: "6 MIN READ",
    featured: true,
    trending: true,
    tags: ["Hands-On", "Sci-Fi", "Indie", "Atmosphere"],
    content: {
      lead: "There are no lasers fired in Celestial Drift. There are no pirate fleets emerging from warp space to rattle your shield generators.",
      paragraphs: [
        "Instead, the game begins with a mundane ritual: checking the oxygen seals on your EVA suit, monitoring the heat sinks on the solar array, and aligning an antenna array toward a transmission beacon that may have fallen silent thirty years ago.",
        "Developed by a three-person Scandinavian team over five years, this orbital exploration title embraces slow-burn tactile realism. Every switch inside your retrofitted command pod requires a physical click; every thruster burn consumes precious monopropellant that must be accounted for in handwritten flight logs.",
        "The result is hypnotic. By stripping away artificial urgency, the game restores a sense of cosmic grandeur that big-budget space operas so frequently overlook.",
      ],
      pullQuote: {
        quote: "True adventure isn't always explosions and apocalyptic stakes. Sometimes it is the click of a relay switch in absolute darkness.",
        attribution: "Devin Mercer, Early Hands-On",
      },
      subsections: [
        {
          heading: "Tactile Systems & Physicality",
          paragraphs: [
            "What immediately distinguishes the experience is its physical simulation. You do not push an analog stick to glide effortlessly through space. In zero gravity, momentum is both your ally and your greatest hazard. Docking with a tumbling relay station becomes an exercise in breath control and mathematical precision.",
          ],
          image: "/images/space-station.svg",
          imageCaption: "Manual orbital rendezvous: precision navigation around abandoned communications relays.",
        },
      ],
    },
  },

  // 3. DEVELOPMENT
  {
    id: "story-3",
    slug: "inside-the-art-of-building-worlds-that-feel-alive",
    category: "DEVELOPMENT",
    title: "Inside the art of building worlds that feel alive",
    subtitle: "The ideas, craft, and technical pipelines behind the places we play.",
    excerpt: "Technical directors and environment artists break down how subtle systemic behaviors transform static game geometry into breathing ecosystems.",
    coverImage: "/images/studio-dev.svg",
    alt: "Game developer workstation with dual monitors running engine viewport and code",
    author: {
      name: "Marcus Thorne",
      role: "Technical Editor",
      avatar: "MT",
    },
    publishedAt: "2026-10-27",
    readTime: "9 MIN READ",
    featured: true,
    trending: false,
    tags: ["Tech", "Game Engine", "Level Design", "Art Direction"],
    content: {
      lead: "Ask any veteran environment artist about the most difficult problem in contemporary game design, and they won't talk about polygon budgets or ray-traced reflections.",
      paragraphs: [
        "They will talk about believable inconsistency. Nature is never uniform; it is messy, eroded, layered with competing microclimates, and scarred by uncounted centuries of wind and water. When an algorithm generates terrain, our eyes subconsciously detect the mathematical periodicity.",
        "To combat this uncanny sterile perfection, modern studios are developing hybrid pipelines that combine deterministic procedural generation with artisan-level manual sculpting.",
        "In this deep dive, we speak with technical directors across three independent studios who are pushing systemic worldbuilding beyond static set dressing into responsive ecological systems.",
      ],
      subsections: [
        {
          heading: "The Micro-Climates of Unreal Engine 5",
          paragraphs: [
            "By tying weather shaders directly to soil saturation and wind velocity maps, foliage no longer simply oscillates in a uniform loop. Leaves curl in humidity, mud churns under weight, and moisture recedes along natural gravitational lines.",
          ],
        },
      ],
    },
  },

  // 4. NEWS
  {
    id: "story-4",
    slug: "the-next-chapter-of-play-taking-shape",
    category: "NEWS",
    title: "The next chapter of play is already taking shape",
    subtitle: "A closer look at the experimental hardware and design philosophies moving games forward.",
    excerpt: "From open-source physical controllers to haptic tactile feedback experiments, a wave of creator-led initiatives is challenging industry stagnation.",
    coverImage: "/images/retro-console.svg",
    alt: "Retro-futuristic CRT screen displaying vector graphics and hardware telemetry",
    author: {
      name: "Sarah Chen",
      role: "Senior News Reporter",
      avatar: "SC",
    },
    publishedAt: "2026-10-31",
    readTime: "4 MIN READ",
    featured: false,
    trending: true,
    tags: ["Industry", "Hardware", "Innovation", "Open Source"],
    content: {
      lead: "At this year's Alternative Controller Showcase, the most exciting gaming hardware wasn't an eight-hundred-dollar GPU or an all-in-one VR headset.",
      paragraphs: [
        "It was a rotary crank telephone wired into a text parser, a mechanical telegraph key used to navigate a subterranean horror sim, and a custom pneumatic flight yoke that resists movement based on simulated atmospheric density.",
        "While mainstream console manufacturers continue an iterative race toward incremental resolution bumps, grassroots hardware developers are proving that physical tactile connection remains the most potent frontier of immersion.",
        "Several major indie collectives announced joint open-source specifications this week, standardizing haptic telemetry APIs across Linux, PC, and custom microcontroller peripherals.",
      ],
    },
  },

  // 5. REVIEWS - SPOTLIGHT 1
  {
    id: "story-5",
    slug: "chrono-shift-echoes-of-eternity-review",
    category: "REVIEWS",
    title: "Chrono Shift: When exploration becomes the whole story",
    subtitle: "Finding wonder in the spaces between traditional narrative objectives.",
    excerpt: "A masterclass in non-linear environmental investigation that trusts the player's intelligence from the very first frame.",
    coverImage: "/images/ancient-ruins.svg",
    alt: "Ethereal ancient monoliths glowing in twilight fog with a solitary explorer",
    author: {
      name: "Julian Vance",
      role: "Reviews Lead",
      avatar: "JV",
    },
    publishedAt: "2026-10-26",
    readTime: "7 MIN READ",
    featured: false,
    trending: true,
    tags: ["Review", "Adventure", "Sci-Fi", "Puzzle"],
    review: {
      score: 9.4,
      verdict: "Essential",
      gameTitle: "Chrono Shift: Echoes of Eternity",
      developer: "Aetheric Labs",
      publisher: "Self-Published",
      platform: ["PC", "PlayStation 5", "Steam Deck"],
      releaseDate: "October 2026",
      playtime: "22 Hours",
      pros: [
        "Extraordinary non-handholding environmental puzzle design",
        "Sublime acoustic score recorded with period instruments",
        "Intricate temporal mechanics that never feel gimmicky",
        "Flawless performance on both high-end rigs and Steam Deck",
      ],
      cons: [
        "Late-game travel can occasionally feel mildly tedious",
        "In-game notebook lacks custom pin coordinates",
      ],
      summary: "Chrono Shift is that rarest of gems: an expansive exploration adventure that refuses to patronize its audience with quest markers or incessant companion banter. It is an unforgettable spatial puzzle box.",
    },
    content: {
      lead: "Most adventure games treat the player like a tourist following an audio guide through a museum. Chrono Shift treats you like an archaeologist handed a rusted trowel and an unmarked map.",
      paragraphs: [
        "Set inside a decaying planetary observatory trapped in a fractured temporal loop, the game presents you with no quest log, no blinking compass pip, and no companion chirping solutions to puzzles before you've even had twenty seconds to observe the room.",
        "Instead, it constructs a dense tapestry of architectural clues, planetary astronomical charts, and acoustic motifs. To progress, you must actually understand how the ancient mechanism operated.",
        "The sensation when the pieces finally click into place—not because an icon turned green, but because your mental model of the world matched the designer's intent—is pure, unadulterated euphoria.",
      ],
      subsections: [
        {
          heading: "The Mechanics of Time as Geometry",
          paragraphs: [
            "Time travel in games is usually reduced to a rewind button or binary day/night state. Chrono Shift conceptualizes time as physical strata. Stepping through an archway doesn't reload the level; it shifts the structural degradation of the stone around you in real time.",
          ],
        },
      ],
    },
  },

  // 6. FEATURES
  {
    id: "story-6",
    slug: "why-the-best-game-stories-leave-room-for-us",
    category: "FEATURES",
    title: "Why the best game stories leave room for us",
    subtitle: "A meditation on discovery, imagination, and making meaning through play.",
    excerpt: "Why overly scripted cinematic games often evaporate from memory, while games with narrative ambiguity remain alive forever.",
    coverImage: "/images/virtual-reality.svg",
    alt: "Abstract neural lattice and luminous data nodes against a deep obsidian background",
    author: {
      name: "The Editorial Team",
      role: "Features Desk",
      avatar: "ET",
    },
    publishedAt: "2026-10-25",
    readTime: "5 MIN READ",
    featured: false,
    trending: false,
    tags: ["Narrative", "Game Design", "Essay"],
    content: {
      lead: "There is an old theatrical adage: tell the audience what to feel, and they will resist; create an empty space, and they will rush in to fill it.",
      paragraphs: [
        "In video games, this dynamic is amplified tenfold. The medium's greatest strength is not its capacity to mimic Hollywood cinematography, but its unique ability to foster emergent psychological ownership.",
        "When a narrative leaves gaps—unexplained ruins, fragmented diary entries, ambiguous character motivations—our human mind becomes an active co-author. We furnish the silence with our own hopes, fears, and interpretations.",
        "From Dark Souls to Kentucky Route Zero, the works that have endured the longest are precisely those that declined to explain every hinge and bolt in their narrative machinery.",
      ],
    },
  },

  // 7. DEVELOPMENT - INDIA SPOTLIGHT
  {
    id: "story-7",
    slug: "indian-studios-finding-their-voice",
    category: "DEVELOPMENT",
    title: "A new generation of Indian studios is finding its voice",
    subtitle: "Exploring the creative energy, cultural storytelling, and technical ambition shaping a thriving ecosystem.",
    excerpt: "From Bengaluru and Pune to New Delhi, independent game creators are moving past mobile outsourcing to author globally recognized original IP.",
    coverImage: "/worlds.png",
    alt: "Cinematic mountain landscape with ancient architectural temples and glowing evening light",
    author: {
      name: "Arjun Nambiar",
      role: "Contributing Editor, South Asia",
      avatar: "AN",
    },
    publishedAt: "2026-10-24",
    readTime: "10 MIN READ",
    featured: true,
    trending: true,
    tags: ["Indian Gaming", "Indie Dev", "Studio Spotlight", "Culture"],
    content: {
      lead: "For two decades, the global gaming conversation around India was confined to one narrative: outsourcing. Thousands of talented artists and QA engineers contributed to Western blockbusters without their names ever fronting original titles.",
      paragraphs: [
        "That era has decisively closed. Today, a new generation of Indian studios is leveraging cutting-edge Unreal Engine 5 workflows, indigenous folklore, contemporary urban aesthetics, and bold systemic design to create games that command the world's attention.",
        "Studios like Mandala Interactive and Nodding Heads are demonstrating that Indian cultural heritage is not a superficial coat of paint, but a rich repository of non-Western narrative structures, musical traditions, and philosophical questions.",
        "'We spent years animating other people's myths,' says lead designer Vikram Sethi. 'Now we have the confidence and the technical maturity to articulate our own world on our own terms.'",
      ],
      subsections: [
        {
          heading: "Beyond Mythological Tropes",
          paragraphs: [
            "What makes this wave distinct is its stylistic diversity. Alongside epics rooted in ancient Sanskrit mythology are neon-drenched cyberpunk detective stories set in a rain-soaked Mumbai, pastoral slice-of-life narratives set in Kerala backwaters, and intense multiplayer tactical shooters built from the ground up for low-latency subcontinent networks.",
          ],
        },
      ],
    },
  },

  // 8. INTERVIEWS - SPOTLIGHT 1
  {
    id: "story-8",
    slug: "the-people-behind-the-places-we-remember",
    category: "INTERVIEWS",
    title: "The people behind the places we remember",
    subtitle: "A conversation about the imagination, craft, and emotional toll of world creation.",
    excerpt: "Veteran creative director Elena Rostova on designing environments that evoke nostalgia for places the player has never actually visited.",
    coverImage: "/images/interview-lounge.svg",
    alt: "Warmly lit minimalist studio interview lounge with modernist architectural seating",
    author: {
      name: "Julian Vance",
      role: "Interviews Editor",
      avatar: "JV",
    },
    publishedAt: "2026-10-23",
    readTime: "8 MIN READ",
    featured: false,
    trending: true,
    tags: ["Interview", "Creative Direction", "World Design"],
    interview: {
      interviewee: "Elena Rostova",
      role: "Creative Director",
      studio: "Ghostlight Works",
      location: "Stockholm, Sweden",
      pullQuote: "If a player walks into a room in our game and wants to sit down and do nothing for five minutes, I know we have succeeded.",
    },
    content: {
      lead: "Elena Rostova has spent the past fifteen years orchestrating virtual environments that feel less like software and more like tangible, lived-in memories.",
      paragraphs: [
        "In this extended interview, we sit down with Rostova at Ghostlight Works to discuss architectural psychology, the transition to real-time global illumination, and how to preserve an auteur vision inside modern multi-disciplinary studio structures.",
        "'When you design a space,' Rostova explains, 'you aren't just placing geometry and collision meshes. You are staging emotional encounters with time and decay. Every peeling layer of wallpaper tells a story about who lived there before the calamity.'",
      ],
      subsections: [
        {
          heading: "On Resisting Fast Pacing",
          paragraphs: [
            "Q: The industry often pushes for immediate gratification—action within ten seconds of booting up. Why have you continued to champion slow, meditative openings?",
            "Rostova: Because speed kills attachment. You cannot love a place you are sprinting through. When we slow the player down, we give them permission to be observant. That observation is where intimacy is born.",
          ],
        },
      ],
    },
  },

  // 9. REVIEWS - SPOTLIGHT 2
  {
    id: "story-9",
    slug: "neon-foundry-tactical-noir-review",
    category: "REVIEWS",
    title: "Neon Foundry: A razor-sharp tactical noir thriller",
    subtitle: "Style, substance, and unforgiving precision in a rain-slicked dystopia.",
    excerpt: "Combining turn-based spatial puzzle mechanics with a brooding detective narrative, Neon Foundry delivers this year's smartest strategy surprise.",
    coverImage: "/images/cyberpunk-city.svg",
    alt: "Neon-drenched cyberpunk metropolis with towering corporate monoliths and rain reflections",
    author: {
      name: "Sarah Chen",
      role: "Reviews Staff",
      avatar: "SC",
    },
    publishedAt: "2026-10-22",
    readTime: "6 MIN READ",
    featured: false,
    trending: false,
    tags: ["Review", "Cyberpunk", "Strategy", "Turn-Based"],
    review: {
      score: 8.8,
      verdict: "Great",
      gameTitle: "Neon Foundry",
      developer: "Cipher Zero Games",
      publisher: "Raw Fury",
      platform: ["PC", "Xbox Series X", "PlayStation 5"],
      releaseDate: "October 2026",
      playtime: "18 Hours",
      pros: [
        "Brilliant breach-and-clear room puzzles with rewound timeline replay",
        "Striking visual design combining high-contrast pixel art with volumetric lighting",
        "Sharp, cynical dialogue that avoids typical genre parody",
      ],
      cons: [
        "Difficulty spikes in chapter 4 may frustrate less experienced tacticians",
        "Controller inputs require manual remap for optimal comfort",
      ],
      summary: "Neon Foundry is a taut, electrifying strategy title that turns every two-story corporate warehouse into an intense battle of wits. A must-play for fans of Into the Breach and Gunpoint.",
    },
    content: {
      lead: "In the crowded genre of cyberpunk aesthetics, where purple neon and synthesized basslines are often used to mask shallow gameplay, Neon Foundry stands out through sheer mechanical discipline.",
      paragraphs: [
        "You play as Silas Vance, a disgraced private investigator in a city run by synthetic energy cartels. Every mission is staged across compact, multi-level tactical blueprints where a single miscalculated step means sudden death.",
        "What elevates the game above its peers is the 'Retrospect' mechanic: after executing a grueling turn, you can watch the entire sequence played out in fluid real-time cinematic cameras, turning your painstaking planning into an effortless John Wick sequence.",
      ],
    },
  },

  // 10. REVIEWS - SPOTLIGHT 3
  {
    id: "story-10",
    slug: "silent-canopy-review",
    category: "REVIEWS",
    title: "Silent Canopy: Finding peace in the ancient woods",
    subtitle: "A gentle, breathtaking survival journey that chooses harmony over violence.",
    excerpt: "By replacing guns and combat with ecological stewardship and acoustic cartography, Silent Canopy crafts a deeply moving testament to the natural world.",
    coverImage: "/images/indie-landscape.svg",
    alt: "Stylized low-poly alpine pine forest under an immense glowing full moon and aurora borealis",
    author: {
      name: "Marcus Thorne",
      role: "Reviews Staff",
      avatar: "MT",
    },
    publishedAt: "2026-10-21",
    readTime: "7 MIN READ",
    featured: false,
    trending: false,
    tags: ["Review", "Survival", "Atmosphere", "Indie"],
    review: {
      score: 9.1,
      verdict: "Exceptional",
      gameTitle: "Silent Canopy",
      developer: "Moss & Timber Interactive",
      publisher: "Finji",
      platform: ["PC", "Nintendo Switch", "PlayStation 5"],
      releaseDate: "September 2026",
      playtime: "14 Hours",
      pros: [
        "Spellbinding audio soundscape that changes dynamically with wind and canopy density",
        "Unique botanical crafting system that rewards real ecological observation",
        "Zero combat mechanics, yet continuously tense and emotionally gripping",
      ],
      cons: [
        "Inventory management can feel slightly restrictive during long treks",
      ],
      summary: "Silent Canopy is a restorative, spiritually generous game that proves survival experiences don't need firearms or monsters to hold us spellbound.",
    },
    content: {
      lead: "Most survival games begin by handing you an axe and asking you to deforest the wilderness. Silent Canopy asks you to sit still until the deer stop fearing your heartbeat.",
      paragraphs: [
        "Set across an expansive boreal reserve in subarctic North America, your task is not to conquer the wilderness, but to map its acoustic frequencies and help restore a fragmented seed bank.",
        "The game's dynamic sound engine is easily its crowning achievement. Every tree species responds differently to precipitation; every bird call can be cataloged using a directional microphone to reveal migratory corridors.",
      ],
    },
  },

  // 11. DOCUMENTARIES - SPOTLIGHT 1
  {
    id: "story-11",
    slug: "the-archaeology-of-abandoned-servers",
    category: "DOCUMENTARIES",
    title: "The Archaeology of Abandoned Servers",
    subtitle: "Inside the digital ruins of lost online worlds and the archivists preserving them.",
    excerpt: "A 42-minute cinematic investigative documentary exploring what happens when the plug is pulled on virtual communities millions once called home.",
    coverImage: "/images/documentary-cinema.svg",
    alt: "Cinematic camera rig with anamorphic lens flare and film reel marks in dark studio",
    author: {
      name: "The Video Team",
      role: "Documentary Unit",
      avatar: "VT",
    },
    publishedAt: "2026-10-20",
    readTime: "42 MIN WATCH",
    featured: true,
    trending: true,
    tags: ["Documentary", "Video", "Preservation", "MMO", "Internet History"],
    documentary: {
      duration: "42:18",
      director: "Camille Laurent",
      productionYear: "2026",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // demo placeholder with safe fallback
      chapters: [
        { time: "00:00", title: "Prologue: The Final Countdown" },
        { time: "08:14", title: "Chapter 1: The Ghosts of Star Wars Galaxies" },
        { time: "18:40", title: "Chapter 2: Packet Sniffing & Server Emulation" },
        { time: "29:10", title: "Chapter 3: The Ethics of Digital Memorials" },
        { time: "38:22", title: "Epilogue: When Code Becomes Heritage" },
      ],
    },
    content: {
      lead: "When an architectural monument crumbles, stone and mortar leave tangible traces in the dirt. But when a private server farm goes dark, hundreds of thousands of communal hours vanish into the void.",
      paragraphs: [
        "In our latest feature-length documentary, TheGameVoice follows a team of volunteer software preservationists and former MMO players as they reverse-engineer lost network packets to resurrect abandoned virtual spaces.",
        "From early 2000s virtual social spaces to ambitious indie MMOs whose creators ran out of funding, this film asks fundamental questions about digital property, shared memory, and how human culture will be remembered three centuries from now.",
      ],
    },
  },

  // 12. DOCUMENTARIES - SPOTLIGHT 2
  {
    id: "story-12",
    slug: "making-space-for-new-perspectives",
    category: "DOCUMENTARIES",
    title: "Making Space: Independent Animation in Games",
    subtitle: "How hand-drawn frame-by-frame animators are redefining virtual movement.",
    excerpt: "A 28-minute look into three independent studios discarding standard 3D skeletal rigging in favor of bespoke traditional 2D animation.",
    coverImage: "/images/sound-design.svg",
    alt: "Sound design waveform visualizer with vibrant spectrum bars and microphone silhouette",
    author: {
      name: "The Video Team",
      role: "Documentary Unit",
      avatar: "VT",
    },
    publishedAt: "2026-10-18",
    readTime: "28 MIN WATCH",
    featured: false,
    trending: false,
    tags: ["Documentary", "Animation", "Art", "Craft"],
    documentary: {
      duration: "28:45",
      director: "Takeshi Morita",
      productionYear: "2026",
      chapters: [
        { time: "00:00", title: "The Return of the Pencil" },
        { time: "07:30", title: "Smear Frames in High Definition" },
        { time: "16:20", title: "Matching Input Latency to Frame Rates" },
        { time: "24:10", title: "The Hand-Crafted Future" },
      ],
    },
    content: {
      lead: "In a gaming landscape dominated by physics-driven ragdoll simulations and procedural motion matching, hand-drawn animation carries an immediate, human warmth.",
      paragraphs: [
        "We spend two weeks inside the workshops of three international teams creating games where every attack, jump, and stumble was drawn with ink and paper before ever touching a computer.",
        "This documentary examines the technical friction between fixed 12-frame-per-second animation loops and contemporary 144Hz variable refresh rate gaming monitors.",
      ],
    },
  },

  // 13. NEWS - STORY 2
  {
    id: "story-13",
    slug: "independent-game-preservation-act-passed",
    category: "NEWS",
    title: "Historic Digital Preservation Framework Wins Cross-Industry Support",
    subtitle: "New international pact grants certified archives legal immunity to preserve server-side game binaries.",
    excerpt: "After five years of legal gridlock, major copyright bodies and cultural institutions agree on fair-use exemptions for dead online games.",
    coverImage: "/images/stealth-shadows.svg",
    alt: "Dramatic searchlight cutting across a dark rainy rooftop with water tower silhouette",
    author: {
      name: "Sarah Chen",
      role: "Senior News Reporter",
      avatar: "SC",
    },
    publishedAt: "2026-10-30",
    readTime: "5 MIN READ",
    featured: false,
    trending: true,
    tags: ["Preservation", "Legal", "Industry", "Copyright"],
    content: {
      lead: "In what digital historians are hailing as the most significant cultural preservation milestone in twenty years, an international consortium has ratified the Digital Play Heritage Act.",
      paragraphs: [
        "Under the terms of the agreement, verified public libraries, academic institutions, and designated non-profits will be granted legal protections to circumvent DRM and reconstruct matchmaking servers once a commercial title has been officially decommissioned for more than 18 months.",
        "The measure was backed by an unprecedented coalition of indie developers, consumer advocates, and three major platform holders.",
      ],
    },
  },

  // 14. IMPRESSIONS - STORY 2
  {
    id: "story-14",
    slug: "the-weight-of-the-sword",
    category: "IMPRESSIONS",
    title: "The weight of the sword: Hands-on with Project Aegis",
    subtitle: "Why this brutal dark fantasy melee sim feels unlike anything before it.",
    excerpt: "Physical parries, edge degradation, and posture mechanics that make every single duel feel like a life-or-death chess match.",
    coverImage: "/images/mecha-forge.svg",
    alt: "Colossal industrial mecha silhouette in a foundry with welding sparks flying",
    author: {
      name: "Marcus Thorne",
      role: "Technical Editor",
      avatar: "MT",
    },
    publishedAt: "2026-10-25",
    readTime: "6 MIN READ",
    featured: false,
    trending: false,
    tags: ["Impressions", "Action", "Melee", "Physics"],
    content: {
      lead: "There are no invincibility frames during dodge rolls in Project Aegis. If steel touches cloth or bone, the damage is calculated based on weapon momentum and blade velocity.",
      paragraphs: [
        "During our four-hour demo in London, every encounter felt genuinely terrifying. A peasant with a rusted scythe is just as lethal as an armored knight if you misjudge the trajectory of their swing.",
        "By grounding its combat in physical mass rather than abstracted hitboxes, Project Aegis creates a level of visceral tension that makes most modern action titles feel paper-thin.",
      ],
    },
  },

  // 15. INTERVIEWS - STORY 2
  {
    id: "story-15",
    slug: "composing-silence-interview-hildur-lind",
    category: "INTERVIEWS",
    title: "Composing Silence: A Conversation with Hildur Lind",
    subtitle: "The acclaimed composer on why the best gaming soundtracks know when to stop playing.",
    excerpt: "From cello feedback to contact microphones on glacier ice, Lind reveals the unusual sonic palette powering this generation's most haunting scores.",
    coverImage: "/images/sound-design.svg",
    alt: "Sound waveform studio frequencies and vocal microphone silhouette in moody purple lighting",
    author: {
      name: "Devin Mercer",
      role: "Contributing Editor",
      avatar: "DM",
    },
    publishedAt: "2026-10-19",
    readTime: "9 MIN READ",
    featured: false,
    trending: false,
    tags: ["Music", "Soundtrack", "Composer", "Audio"],
    interview: {
      interviewee: "Hildur Lind",
      role: "Composer & Sound Designer",
      studio: "Independent",
      location: "Reykjavík, Iceland",
      pullQuote: "Music in a game should not be wallpaper. If it doesn't have something critical to say about the character's internal reality, it shouldn't exist.",
    },
    content: {
      lead: "When Hildur Lind won the BAFTA for Original Score in 2024, she didn't thank an orchestra. She thanked an old broken upright piano she found in an abandoned fishing cannery.",
      paragraphs: [
        "In this wide-ranging discussion, Lind talks about microtonal tunings, the emotional geometry of interactive audio, and why dynamic music systems must learn to respect quiet moments.",
      ],
    },
  },

  // 16. NEWS - STORY 3
  {
    id: "story-16",
    slug: "open-source-game-engines-momentum",
    category: "NEWS",
    title: "Open-Source Game Engines Surge Past 40% Adoption Among Indie Creators",
    subtitle: "Community-driven tools are no longer alternative curiosities—they are powering major commercial hits.",
    excerpt: "Annual developer survey reveals Godot and Rust-based engines gaining significant market share following commercial license restructuring.",
    coverImage: "/images/studio-dev.svg",
    alt: "Developer workspace showing code editor and 3D wireframe mesh on dual displays",
    author: {
      name: "Sarah Chen",
      role: "Senior News Reporter",
      avatar: "SC",
    },
    publishedAt: "2026-10-28",
    readTime: "4 MIN READ",
    featured: false,
    trending: false,
    tags: ["Open Source", "Engine", "Godot", "Indie Dev"],
    content: {
      lead: "The annual Global Game Creator Index was published this morning, and the numbers reveal a dramatic structural shift across independent game production.",
      paragraphs: [
        "Over 42% of studios with fewer than thirty employees now maintain their primary production pipelines on open-source game engines, compared to just 14% three years ago.",
        "The shift is fueled by concerns over proprietary licensing unpredictability and the rapid maturation of community-maintained Vulkan rendering backends.",
      ],
    },
  },

  // 17. FEATURES - STORY 3
  {
    id: "story-17",
    slug: "the-sonic-architecture-of-survival-horror",
    category: "FEATURES",
    title: "The Sonic Architecture of Survival Horror",
    subtitle: "How sound designers use infrasound, spatial acoustics, and dissonance to terrify us.",
    excerpt: "A deep acoustic examination of why the scariest thing in interactive media is never what you see, but what you hear around the corner.",
    coverImage: "/images/stealth-shadows.svg",
    alt: "Dark noir alleyway with high-contrast searchlight and volumetric haze",
    author: {
      name: "The Editorial Team",
      role: "Features Desk",
      avatar: "ET",
    },
    publishedAt: "2026-10-15",
    readTime: "11 MIN READ",
    featured: false,
    trending: false,
    tags: ["Horror", "Audio", "Sound Design", "Psychology"],
    content: {
      lead: "Close your eyes in a horror film, and you are shielded from the terror. Close your eyes in a survival horror game, and the horror intensifies tenfold.",
      paragraphs: [
        "Sound in gaming is directional, immediate, and omnipresent. When an audio cue pans behind your left shoulder, your autonomic nervous system reacts before your rational brain can intervene.",
        "We dissect the acoustic tricks—from Shepard tones that create the illusion of endlessly rising pitch, to sub-20Hz infrasound frequencies known to induce nausea and dread.",
      ],
    },
  },

  // 18. IMPRESSIONS - STORY 3
  {
    id: "story-18",
    slug: "velocity-zero-anti-grav-racer",
    category: "IMPRESSIONS",
    title: "Velocity Zero: Pure speed without compromise",
    subtitle: "Taking the wheel of the fastest, most uncompromising anti-gravity racer in a decade.",
    excerpt: "At 1,200 km/h, track recognition becomes pure instinct. Hands-on with the spiritual successor to WipEout and F-Zero.",
    coverImage: "/images/speed-racing.svg",
    alt: "High-speed anti-gravity hovercraft drifting along neon-lit mountain curves at night",
    author: {
      name: "Devin Mercer",
      role: "Contributing Editor",
      avatar: "DM",
    },
    publishedAt: "2026-10-21",
    readTime: "5 MIN READ",
    featured: false,
    trending: false,
    tags: ["Racing", "Sci-Fi", "Arcade", "Impressions"],
    content: {
      lead: "At 1,200 kilometers per hour, you don't have time to look at the scenery. You don't have time to glance at your shield gauge. You are reacting to color and vibration.",
      paragraphs: [
        "Velocity Zero delivers an exhilarating adrenaline rush. Built by veteran arcade engineers, the title runs at a locked 120 frames per second with razor-sharp zero-latency handling.",
      ],
    },
  },

  // 19. DOCUMENTARIES - STORY 3
  {
    id: "story-19",
    slug: "behind-the-pixels-indie-survival",
    category: "DOCUMENTARIES",
    title: "Behind the Pixels: Five Years in the Dark",
    subtitle: "The harrowing personal journey behind the making of an indie masterpiece.",
    excerpt: "A raw, intimate 35-minute chronicle following two brothers through burnout, bankruptcies, and triumphant critical acclaim.",
    coverImage: "/images/documentary-cinema.svg",
    alt: "Cinema camera clapperboard and studio lighting setup for documentary production",
    author: {
      name: "The Video Team",
      role: "Documentary Unit",
      avatar: "VT",
    },
    publishedAt: "2026-10-12",
    readTime: "35 MIN WATCH",
    featured: false,
    trending: false,
    tags: ["Documentary", "Indie Dev", "Behind The Scenes", "Personal Story"],
    documentary: {
      duration: "35:12",
      director: "Elena Rostova",
      productionYear: "2026",
      chapters: [
        { time: "00:00", title: "The Prototype Dream" },
        { time: "11:20", title: "When the Savings Ran Out" },
        { time: "21:05", title: "The Midnight Demo Viral Spike" },
        { time: "30:40", title: "Launch Day Tears" },
      ],
    },
    content: {
      lead: "Making an independent video game is widely recognized as one of the most punishing creative endeavors in modern media.",
      paragraphs: [
        "Filmed over five uninterrupted years, Behind the Pixels captures the unvarnished reality of two brothers building a game in a drafty garage, facing financial ruin, and ultimately creating one of the generation's most beloved puzzle platforms.",
      ],
    },
  },

  // 20. DEVELOPMENT - STORY 3
  {
    id: "story-20",
    slug: "the-death-and-rebirth-of-immersive-sims",
    category: "DEVELOPMENT",
    title: "The Death and Rebirth of Immersive Sims",
    subtitle: "How systemic emergent design survived commercial apathy to become the backbone of modern RPGs.",
    excerpt: "From Looking Glass Studios to contemporary indie architects, tracing the lineage of games that refuse to tell you how to solve a problem.",
    coverImage: "/images/retro-console.svg",
    alt: "CRT screen with green phosphor wireframe graphic simulation and vintage hardware casing",
    author: {
      name: "Marcus Thorne",
      role: "Technical Editor",
      avatar: "MT",
    },
    publishedAt: "2026-10-14",
    readTime: "8 MIN READ",
    featured: false,
    trending: false,
    tags: ["Immersive Sim", "History", "Game Design", "Emergence"],
    content: {
      lead: "In an immersive sim, there is never a single correct solution to a locked door. You can pick the lock, hack the keypad, stack wooden crates to reach an overhead air vent, or light a fire to trigger the emergency sprinkler system.",
      paragraphs: [
        "While big-budget publishers frequently deemed this genre too difficult to market, indie developers have embraced its emergent principles with astonishing vigor.",
      ],
    },
  },

  // 21. INTERVIEWS - STORY 3
  {
    id: "story-21",
    slug: "from-bengaluru-to-neo-tokyo-vikram-sethi",
    category: "INTERVIEWS",
    title: "From Bengaluru to Neo-Tokyo: Vikram Sethi",
    subtitle: "The Mandala Interactive founder on architectural futurism and South Asian cyberpunk.",
    excerpt: "A conversation on subverting Western cyberpunk tropes, designing vertical urban sprawl, and the future of Indian indie development.",
    coverImage: "/images/cyberpunk-city.svg",
    alt: "Cyberpunk neon city skyline with flying transports and reflective wet asphalt",
    author: {
      name: "Arjun Nambiar",
      role: "Contributing Editor, South India",
      avatar: "AN",
    },
    publishedAt: "2026-10-10",
    readTime: "7 MIN READ",
    featured: false,
    trending: false,
    tags: ["Interview", "Cyberpunk", "India", "Art Direction"],
    interview: {
      interviewee: "Vikram Sethi",
      role: "Founder & Studio Head",
      studio: "Mandala Interactive",
      location: "Bengaluru, India",
      pullQuote: "Western cyberpunk is always rain and neon kanji. We wanted heat, monsoon humidity, autorickshaws retrofitted with ion thrusters, and tea stalls under solar pylons.",
    },
    content: {
      lead: "When Mandala Interactive unveiled their debut title at the Tokyo Game Show, the trailer went viral within hours.",
      paragraphs: [
        "In this interview, founder Vikram Sethi talks about reclaiming futurism from Western sci-fi cliches and how his background in civil engineering influences their virtual cityscapes.",
      ],
    },
  },
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
