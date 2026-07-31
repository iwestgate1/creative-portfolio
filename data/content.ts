/**
 * ────────────────────────────────────────────────────────────────
 * PORTFOLIO CONTENT
 * ────────────────────────────────────────────────────────────────
 * This is the single source of truth for every piece of copy and
 * every image reference on the site. Sections marked `// EDIT ME`
 * are meant to be replaced with your real information.
 *
 * IMAGES: every image field is `{ src?, alt, caption? }`. Leave
 * `src` undefined to keep the art-directed placeholder (a labelled
 * paper swatch). To use a real photo, drop the file in
 * `/public/images/...` and set `src` to that path, e.g.
 * `src: "/images/work/stitch-brim/cover.jpg"`.
 * ────────────────────────────────────────────────────────────────
 */

export interface ImageRef {
  src?: string;
  alt: string;
  caption?: string;
}

export type ProjectFormat =
  | "folder" // brand identity folder
  | "contact-sheet" // photography contact sheet
  | "magazine-spread" // creative direction spread
  | "mobile-stack" // social media, stacked phone screens
  | "clipped-document" // entrepreneurship, clipped dossier
  | "moodboard" // branding sample book
  | "film-strip" // photography, sequential frames
  | "pinned-collage"; // photography, layered pinned prints

export type PhotographyCategory = "Commercial" | "Fashion" | "Hospitality" | "Editorial";

export interface CaseStudyContent {
  overview: string;
  challenge: string;
  concept: string;
  strategy: string;
  creativeDirection: string;
  execution: string;
  gallery: ImageRef[];
  results: string[];
  reflection: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  year: string;
  category: string;
  role: string;
  description: string;
  format: ProjectFormat;
  tags: string[];
  cover: ImageRef;
  images: ImageRef[];
  caseStudy: CaseStudyContent;
  /** Photography section only — used for the Commercial/Fashion/Hospitality/Editorial filter. */
  categories?: PhotographyCategory[];
}

/** A single node in a workflow/automation diagram (see components/decor/diagrams). */
export interface WorkflowStep {
  label: string;
  detail?: string;
}

export interface ScorecardRow {
  channel: string;
  status: "on-track" | "watch" | "at-risk";
  note: string;
}

export interface ExperienceDossier {
  overview: string;
  focusAreas: string[];
  process: { title: string; description: string }[];
  workflow?: { heading: string; description: string; steps: WorkflowStep[] };
  scorecard?: { heading: string; description: string; rows: ScorecardRow[] };
  documentation: string[];
  collaboration: string;
  results: string[];
  reflection: string;
}

export interface ExperienceItem {
  slug: string;
  role: string;
  company: string;
  year: string;
  location: string;
  description: string;
  image: ImageRef;
  dossier: ExperienceDossier;
}

/* ── EDIT ME: site-level identity ─────────────────────────────── */
export const siteConfig = {
  name: "Isabella Westgate",
  shortName: "I. Westgate",
  initials: "IW",
  tagline: "Creative Portfolio",
  title: "Creative Direction, Brand Storytelling & Entrepreneurship",
  scrollCue: "Scroll to open",
  location: "Based between the studio and the field",
  email: "isabellawestgate05@gmail.com",
  linkedin: "https://www.linkedin.com/in/isabellawestgate",
  instagram: "https://www.instagram.com/isabellawestgate",
  resumeHref: "/resume.pdf",
  closingLine: "Let's create something memorable.",
  handwrittenAccent: "made with ink, film & intention",
};

/* ── EDIT ME: roles shown floating around the About portrait ───── */
export const roles = ["Founder", "Photographer", "Marketer", "Creative", "Entrepreneur"];

/* ── EDIT ME: About section copy ────────────────────────────────── */
export const about = {
  eyebrow: "About",
  heading: "A short introduction",
  paragraphs: [
    "I build brands the way a photographer builds a frame — with attention to what stays out as much as what stays in.",
    "My work moves between founding companies, directing shoots, and writing the words that hold a brand together.",
  ],
  experience: [
    { role: "Founder & Creative Director", org: "Stitch and Brim", year: "2023 — Present" },
    { role: "Commercial Associate, Supplier Marketing", org: "Wayfair", year: "2023" },
    { role: "Freelance Photographer", org: "Self-employed", year: "2021 — Present" },
  ],
  education: [
    { credential: "B.A., Marketing & Design", org: "EDIT ME — University", year: "2019 — 2023" },
  ],
  skills: [
    "Brand Strategy",
    "Creative Direction",
    "Photography",
    "Marketing Operations",
    "Commercial Strategy",
    "Workflow Automation",
    "Copywriting",
    "Entrepreneurship",
  ],
};

/* ── EDIT ME: Experience — each entry opens a full dossier page ── */
export const experience: ExperienceItem[] = [
  {
    slug: "wayfair",
    role: "Commercial Associate, Supplier Marketing",
    company: "Wayfair",
    year: "2023",
    location: "Boston, MA",
    description:
      "Operated at the intersection of supplier marketing, commercial strategy, and marketing automation — building the tooling and documentation that let the team move faster.",
    image: { alt: "Channel health scorecard dashboard mockup" },
    dossier: {
      overview:
        "A supplier-marketing engagement centered on making a fast-moving commercial team's operations legible — turning recurring manual work into documented, automated, repeatable process. The work sat across commercial strategy, marketing operations, and cross-functional tooling rather than any single lane.",
      focusAreas: [
        "Supplier Marketing",
        "Marketing Operations",
        "Commercial Strategy",
        "Cross-functional Collaboration",
        "Marketing Automation",
        "Workflow Optimization",
        "Knowledge Management",
      ],
      process: [
        {
          title: "Commercial Agenda Automation",
          description:
            "Rebuilt the recurring Commercial Agenda — the weekly brief that drove supplier-facing marketing priorities — as an automated pipeline instead of a manually assembled deck, freeing hours every week for higher-value strategy work.",
        },
        {
          title: "Competitor Communication Research",
          description:
            "Ran structured research into how competitor platforms communicated with their suppliers — cadence, channel, tone — and translated the findings into concrete recommendations for our own supplier-marketing approach.",
        },
        {
          title: "SOP Creation & Documentation",
          description:
            "Authored standard operating procedures for recurring commercial and marketing workflows, closing gaps where process lived only in one person's head.",
        },
      ],
      workflow: {
        heading: "Commercial Agenda — automated pipeline",
        description:
          "An n8n workflow that replaced a manual weekly build with a scheduled pipeline: pulling source data, transforming it into the agenda format, and routing it to stakeholders automatically.",
        steps: [
          { label: "Trigger", detail: "Scheduled weekly run" },
          { label: "Pull Data", detail: "Source systems + trackers" },
          { label: "Transform", detail: "Format into agenda structure" },
          { label: "Review Gate", detail: "Flag exceptions for QA" },
          { label: "Distribute", detail: "Push to stakeholders" },
        ],
      },
      scorecard: {
        heading: "Channel Health Scorecard",
        description:
          "A recurring scorecard built to give the team a single, at-a-glance view of supplier-marketing channel performance instead of pulling numbers ad hoc from scattered sources.",
        rows: [
          { channel: "Supplier Email", status: "on-track", note: "Cadence and open rates stable" },
          { channel: "Onboarding Comms", status: "watch", note: "Response lag trending up" },
          { channel: "Promotional Placements", status: "on-track", note: "Within target range" },
          { channel: "Escalation Channel", status: "at-risk", note: "Needs owner + SOP" },
        ],
      },
      documentation: [
        "CSE Tooling Repository — a central, documented home for the team's internal tools, replacing scattered files and tribal knowledge",
        "Standard operating procedures for the Commercial Agenda pipeline and supplier communication workflows",
        "Competitor communication research findings, packaged as a reference doc for future campaigns",
      ],
      collaboration:
        "Worked directly with commercial, marketing, and engineering-adjacent stakeholders to scope, build, and document tooling — translating between teams so automation reflected how the work actually happened, not just how it was assumed to happen.",
      results: [
        "Replaced a manual weekly build with an automated n8n pipeline",
        "Shipped a recurring Channel Health Scorecard adopted as a standing team reference",
        "Built and documented the CSE Tooling Repository as the team's system of record for internal tools",
        "Authored SOPs that reduced single-person dependency on key recurring workflows",
      ],
      reflection:
        "This role was less about any single deliverable and more about making a team's process visible enough to improve — the automation mattered less than the documentation habit it left behind.",
    },
  },
  {
    slug: "stitch-and-brim",
    role: "Founder & Creative Director",
    company: "Stitch and Brim",
    year: "2023 — Present",
    location: "Remote / On location",
    description:
      "Founded and art-directed a brand identity from the ground up — naming, visual system, photography, and go-to-market storytelling.",
    image: { alt: "Studio table with brand materials for Stitch and Brim" },
    dossier: {
      overview:
        "Founded Stitch and Brim end to end — brand strategy, visual identity, product photography, and the commercial storytelling that took it to market.",
      focusAreas: ["Brand Strategy", "Creative Direction", "Product Photography", "Retail Activations", "Go-to-Market"],
      process: [
        {
          title: "Identity from Materials",
          description:
            "Built the visual system from physical references first — kraft paper, stitched line work, a mark that reads like a maker's stamp — before anything touched a screen.",
        },
        {
          title: "Photography as Brand Voice",
          description:
            "Directed and shot all brand, lifestyle, and product photography, keeping every touchpoint — packaging to social — in the same tactile, warm register.",
        },
        {
          title: "Retail Activation",
          description:
            "Planned and executed in-person retail activations, translating the brand's visual language into a physical, walk-up experience.",
        },
      ],
      documentation: ["Brand guideline booklet", "Packaging and stationery system", "Retail activation playbook"],
      collaboration:
        "Ran every function personally in year one, then began looping in freelance support for production and retail activation execution.",
      results: [
        "Launched a cohesive identity system across product, packaging, and retail",
        "Directed and produced all brand photography in-house",
        "EDIT ME — add a revenue, retail, or press milestone",
      ],
      reflection:
        "Founding this brand is where creative direction and commercial strategy stopped being separate skills for me.",
    },
  },
  {
    slug: "freelance-photography",
    role: "Freelance Photographer",
    company: "Independent",
    year: "2021 — Present",
    location: "On location",
    description:
      "Shoot commercial, hospitality, and editorial photography for independent brands and hospitality groups — see Selected Commercial Work.",
    image: { alt: "Contact sheet of black and white portrait photography" },
    dossier: {
      overview:
        "An ongoing freelance photography practice spanning commercial brand work, hospitality campaigns, and personal editorial projects — documented in full under Selected Commercial Work.",
      focusAreas: ["Commercial Photography", "Hospitality Photography", "Brand Content", "Editorial Storytelling"],
      process: [
        {
          title: "Pre-Production",
          description: "Scout, shot-list, and align with brand or property stakeholders before a single frame is shot.",
        },
        {
          title: "On Location",
          description: "Shoot for both the hero campaign frames and the behind-the-scenes documentation clients increasingly ask for.",
        },
        {
          title: "Edit & Deliver",
          description: "Cull, grade, and sequence the final set so it reads as a story, not just a folder of images.",
        },
      ],
      documentation: ["Shot lists and pre-production briefs per client", "Delivery galleries organized by campaign"],
      collaboration:
        "Work directly with founders, marketing teams, and hospitality operators to translate a brief into a visual campaign — see the individual project dossiers in Selected Commercial Work for specifics.",
      results: ["Ongoing client roster across brand, hospitality, and editorial work"],
      reflection:
        "The through-line across every shoot is the same: find the frame that feels observed, not staged.",
    },
  },
  {
    slug: "creative-direction-intern",
    role: "Creative Direction Intern",
    company: "EDIT ME — Studio",
    year: "2021 — 2022",
    location: "EDIT ME — City",
    description:
      "Supported art direction for magazine-style campaign spreads, from concept sketches to final layout.",
    image: { alt: "Magazine spread layout in progress" },
    dossier: {
      overview: "EDIT ME — add an overview of this role once you have the details on hand.",
      focusAreas: ["EDIT ME"],
      process: [{ title: "EDIT ME", description: "EDIT ME — describe your process here." }],
      documentation: ["EDIT ME"],
      collaboration: "EDIT ME — describe who you worked with and how.",
      results: ["EDIT ME"],
      reflection: "EDIT ME",
    },
  },
];

/* ── EDIT ME: Selected Work — five projects, five physical formats ─ */
export const projects: Project[] = [
  {
    slug: "stitch-and-brim",
    number: "01",
    title: "Stitch and Brim",
    year: "2024",
    category: "Brand Identity",
    role: "Founder / Creative Director",
    description:
      "A full brand identity system built from the ground up — mark, type, palette, and packaging — housed in its own manila folder.",
    format: "folder",
    tags: ["Identity", "Packaging", "Naming"],
    cover: { alt: "Stitch and Brim brand identity folder cover" },
    images: [
      { alt: "Logo lockup sheet" },
      { alt: "Packaging mockup" },
      { alt: "Brand pattern swatch" },
    ],
    caseStudy: {
      overview:
        "Stitch and Brim needed an identity as considered as the product itself — one that felt handmade, warm, and enduring.",
      challenge:
        "Enter a crowded category without borrowing its visual clichés, while staying legible as a small, founder-led brand.",
      concept:
        "Draw from stationery and haberdashery — stitched lines, kraft paper, and a mark that reads like a maker's stamp.",
      strategy:
        "Build the system around restraint: one typeface family, one accent color, and texture used sparingly but intentionally.",
      creativeDirection:
        "Photography shot on warm film stock, styled flat against linen and paper to keep every touchpoint tactile.",
      execution:
        "Delivered a full identity kit — logo suite, packaging system, stationery, and a brand guideline booklet.",
      gallery: [
        { alt: "Logo suite on cream paper" },
        { alt: "Packaging system laid out on a table" },
        { alt: "Business card and stationery detail" },
        { alt: "Brand guideline spread" },
      ],
      results: [
        "Cohesive identity system launched across product and packaging",
        "Brand guideline booklet adopted for all future collateral",
        "EDIT ME — add a measurable outcome",
      ],
      reflection:
        "Founding this brand taught me that restraint is a strategy — every element earned its place twice over.",
    },
  },
  {
    slug: "paper-and-thread",
    number: "02",
    title: "Paper & Thread",
    year: "2023",
    category: "Creative Direction",
    role: "Creative Director",
    description:
      "An editorial campaign art-directed like a magazine spread — full-bleed imagery, pull quotes, and a considered grid.",
    format: "magazine-spread",
    tags: ["Campaign", "Art Direction", "Editorial"],
    cover: { alt: "Magazine spread cover layout" },
    images: [{ alt: "Spread page one" }, { alt: "Spread page two" }],
    caseStudy: {
      overview:
        "A seasonal campaign for an independent label, art-directed to feel like a magazine feature rather than an advertisement.",
      challenge:
        "Make a commercial campaign feel editorial without losing the product as the hero.",
      concept: "Borrow the grid, typography, and pacing of a print magazine feature well.",
      strategy:
        "Pair full-bleed photography with restrained pull quotes and generous white space to slow the reader down.",
      creativeDirection:
        "Directed styling, casting, and location to keep every frame feeling observed rather than staged.",
      execution:
        "Delivered a twelve-page campaign spread rolled out across print and digital placements.",
      gallery: [
        { alt: "Spread detail — opening page" },
        { alt: "Spread detail — pull quote page" },
        { alt: "Spread detail — closing page" },
      ],
      results: ["EDIT ME — add reach or engagement metric", "EDIT ME — add press or partner mention"],
      reflection:
        "This project confirmed that campaigns land harder when they're willing to slow down and read like a story.",
    },
  },
  {
    slug: "in-frame",
    number: "03",
    title: "In Frame",
    year: "2023",
    category: "Social Media",
    role: "Social Strategist",
    description:
      "A social content system for a lifestyle brand, presented here as a stack of mobile screens pulled straight from the feed.",
    format: "mobile-stack",
    tags: ["Social Strategy", "Content", "Growth"],
    cover: { alt: "Stacked mobile screens showing social feed" },
    images: [
      { alt: "Mobile screen — feed grid" },
      { alt: "Mobile screen — story highlight" },
      { alt: "Mobile screen — reel cover" },
    ],
    caseStudy: {
      overview:
        "A content system built to give a growing lifestyle brand a consistent, recognizable voice across every post.",
      challenge:
        "Scale content output without losing the handmade feel that made the brand distinct.",
      concept: "Design a modular content system — templates that flex without ever looking templated.",
      strategy:
        "Balance evergreen brand content with timely, low-lift formats the team could produce independently.",
      creativeDirection:
        "Consistent color grading and typography treatment across every asset, regardless of format.",
      execution:
        "Shipped a content calendar, template library, and posting cadence adopted by the in-house team.",
      gallery: [
        { alt: "Content grid overview" },
        { alt: "Story template set" },
        { alt: "Reel cover template set" },
      ],
      results: ["EDIT ME — add follower growth metric", "EDIT ME — add engagement rate improvement"],
      reflection:
        "Good social systems disappear into the brand — the goal was never to look like a template.",
    },
  },
  {
    slug: "the-founding-year",
    number: "04",
    title: "The Founding Year",
    year: "2023",
    category: "Entrepreneurship",
    role: "Founder",
    description:
      "A year of building a company from zero, documented here as a clipped case-study dossier — notes, numbers, and all.",
    format: "clipped-document",
    tags: ["Founding", "Strategy", "Operations"],
    cover: { alt: "Clipped document cover page" },
    images: [{ alt: "Handwritten strategy notes" }, { alt: "Early product prototype" }],
    caseStudy: {
      overview:
        "The first twelve months of founding a company — from a napkin sketch to a working brand.",
      challenge:
        "Build every function of a business — product, brand, operations — with a team of one.",
      concept: "Treat the first year like a design problem: prototype fast, document everything, iterate in public.",
      strategy:
        "Sequence effort deliberately — brand and product first, then community, then paid growth.",
      creativeDirection:
        "Kept every customer touchpoint, from packaging to email, in the same handwritten, considered voice.",
      execution:
        "Launched the product, built an early customer base, and established the operating rhythms of the business.",
      gallery: [
        { alt: "Early sketches and notes" },
        { alt: "First production run" },
        { alt: "Launch day documentation" },
      ],
      results: ["EDIT ME — add revenue or customer milestone", "EDIT ME — add a key learning metric"],
      reflection:
        "Founding this company taught me more about creative direction than any single client project could.",
    },
  },
  {
    slug: "warm-neutral",
    number: "05",
    title: "Warm Neutral",
    year: "2022",
    category: "Branding",
    role: "Brand Designer",
    description:
      "A branding exploration presented as a moodboard and sample book — palette, texture, and type tested side by side.",
    format: "moodboard",
    tags: ["Moodboard", "Palette", "Type"],
    cover: { alt: "Moodboard and sample book cover" },
    images: [
      { alt: "Fabric and paper swatch" },
      { alt: "Color palette chips" },
      { alt: "Type specimen sheet" },
    ],
    caseStudy: {
      overview:
        "An exploratory branding project testing a warm, neutral palette across a range of applications.",
      challenge:
        "Design a palette flexible enough for both a product line and its packaging without feeling generic.",
      concept: "Build the system from material references first — linen, kraft, and stone — then extract color from them.",
      strategy:
        "Prototype the palette across real materials before finalizing anything on screen.",
      creativeDirection:
        "Photographed every swatch and specimen under the same natural light for consistency.",
      execution:
        "Delivered a sample book documenting palette, type, and texture pairings for future application.",
      gallery: [
        { alt: "Sample book spread — palette" },
        { alt: "Sample book spread — texture" },
        { alt: "Sample book spread — type specimen" },
      ],
      results: ["Adopted as the base system for two subsequent projects"],
      reflection:
        "Starting from physical materials instead of a screen produced a warmer, more confident palette.",
    },
  },
];

/* ── EDIT ME: Selected Commercial Work — the photography section ─ */
export const photographyProjects: Project[] = [
  {
    slug: "stitch-and-brim-photography",
    number: "01",
    title: "Stitch and Brim",
    year: "2023 — Present",
    category: "Brand & Lifestyle Photography",
    role: "Photographer / Creative Director",
    description:
      "Brand photography, creative direction, and lifestyle campaigns for my own label — plus the product photography and retail activations that took it to market.",
    format: "pinned-collage",
    tags: ["Brand Photography", "Creative Direction", "Lifestyle Campaigns", "Product Photography", "Retail Activations"],
    categories: ["Commercial", "Fashion"],
    cover: { alt: "Stitch and Brim lifestyle campaign, pinned print" },
    images: [
      { alt: "Lifestyle campaign frame 01" },
      { alt: "Product photography, flat lay" },
      { alt: "Retail activation setup" },
      { alt: "Lifestyle campaign frame 02" },
      { alt: "Product detail, texture close-up" },
    ],
    caseStudy: {
      overview:
        "Full creative direction and photography for Stitch and Brim's brand and product imagery — every campaign, product shot, and retail activation shot in-house.",
      challenge:
        "Produce commercial-grade brand photography on a founder's timeline and budget, without it ever looking DIY.",
      concept: "Treat every shoot like a small campaign — a shot list, a mood reference, and a consistent light.",
      strategy:
        "Batch production days around natural light, mixing product, lifestyle, and behind-the-scenes coverage in a single session.",
      creativeDirection:
        "Warm, tactile styling against linen and kraft — consistent with the brand's identity system.",
      execution:
        "Shot and directed the full campaign library used across packaging, social, and retail activations.",
      gallery: [
        { alt: "Campaign frame — hero" },
        { alt: "Campaign frame — detail" },
        { alt: "Retail activation, in progress" },
        { alt: "Product photography set" },
      ],
      results: ["Full campaign library shot and delivered in-house", "Imagery used across packaging, social, and retail"],
      reflection:
        "Shooting my own brand forced a discipline I now bring to every client project — nothing gets shot without knowing exactly where it will live.",
    },
  },
  {
    slug: "nikan",
    number: "02",
    title: "Nikan",
    year: "2023",
    category: "Commercial & Campaign Photography",
    role: "Photographer",
    description: "Commercial photography, campaign photography, and brand content for Nikan.",
    format: "film-strip",
    tags: ["Commercial Photography", "Campaign Photography", "Brand Content"],
    categories: ["Commercial"],
    cover: { alt: "Nikan campaign photography, film strip frame" },
    images: [
      { alt: "Nikan campaign frame 01" },
      { alt: "Nikan campaign frame 02" },
      { alt: "Nikan campaign frame 03" },
      { alt: "Nikan campaign frame 04" },
      { alt: "Nikan campaign frame 05" },
    ],
    caseStudy: {
      overview: "A commercial campaign shoot for Nikan, built around consistent, brand-forward content.",
      challenge: "Deliver a full campaign gallery that reads as one cohesive shoot despite covering multiple content needs.",
      concept: "Sequence the shoot like a film strip — a deliberate run of frames, each building on the last.",
      strategy: "Plan a shot list that covers hero campaign imagery and modular brand content in a single production day.",
      creativeDirection: "Clean, consistent lighting and color grading across the full set.",
      execution: "Delivered a full campaign and brand content gallery for Nikan's marketing use.",
      gallery: [
        { alt: "Nikan gallery frame 01" },
        { alt: "Nikan gallery frame 02" },
        { alt: "Nikan gallery frame 03" },
      ],
      results: ["EDIT ME — add campaign usage or reach detail"],
      reflection: "EDIT ME — add a reflection on this project.",
    },
  },
  {
    slug: "thesis-hotel-miami",
    number: "03",
    title: "Thesis Hotel Miami",
    year: "2023",
    category: "Restaurant Opening Campaign",
    role: "Photographer",
    description:
      "Pre-opening and grand opening photography for a restaurant launch — chef portraits, food photography, and hospitality storytelling from preparation through opening night.",
    format: "magazine-spread",
    tags: ["Restaurant Opening", "Chef Portraits", "Food Photography", "Hospitality Storytelling"],
    categories: ["Hospitality", "Commercial"],
    cover: { alt: "Thesis Hotel Miami restaurant opening, chef portrait" },
    images: [
      { alt: "Pre-opening prep, kitchen detail" },
      { alt: "Chef portrait" },
      { alt: "Food photography, plated dish" },
      { alt: "Grand opening, dining room" },
      { alt: "Grand opening, guests arriving" },
    ],
    caseStudy: {
      overview:
        "Documented a restaurant launch at Thesis Hotel Miami from pre-opening preparation through grand opening night — pairing behind-the-scenes storytelling with polished food and portrait photography.",
      challenge:
        "Cover two very different registers in one engagement: the quiet, technical work of pre-opening prep, and the high-energy storytelling of opening night.",
      concept: "Split the coverage into two chapters — preparation and arrival — so the final story has a clear before and after.",
      strategy:
        "Shoot chef portraits and food photography in controlled conditions during prep days, then shift to documentary-style coverage on opening night.",
      creativeDirection: "Warm, moody hospitality lighting that matches the restaurant's own atmosphere rather than fighting it.",
      execution:
        "Delivered a full gallery spanning pre-opening documentation, chef portraits, food photography, and grand opening coverage.",
      gallery: [
        { alt: "Pre-opening, chef at work" },
        { alt: "Food photography, hero dish" },
        { alt: "Grand opening, full room" },
        { alt: "Grand opening, candid guest moment" },
      ],
      results: ["Full campaign gallery delivered across pre-opening and launch phases"],
      reflection:
        "The prep-day photography ended up being just as valuable to the client as the opening-night coverage — it gave them a story, not just an event recap.",
    },
  },
  {
    slug: "tower-hotel",
    number: "04",
    title: "Tower Hotel",
    year: "2023",
    category: "Hospitality Photography",
    role: "Photographer",
    description: "Room photography, interior photography, architecture, and lifestyle imagery.",
    format: "contact-sheet",
    tags: ["Room Photography", "Interior Photography", "Architecture", "Lifestyle Imagery"],
    categories: ["Hospitality"],
    cover: { alt: "Tower Hotel interior photography" },
    images: [
      { alt: "Guest room photography" },
      { alt: "Interior detail, lobby" },
      { alt: "Architecture, exterior facade" },
      { alt: "Lifestyle image, guest experience" },
      { alt: "Interior detail, lighting" },
      { alt: "Architecture, structural detail" },
    ],
    caseStudy: {
      overview: "A hospitality photography engagement covering rooms, interiors, architecture, and lifestyle imagery for Tower Hotel.",
      challenge: "Represent both the architectural scale of the property and the intimacy of the guest experience in one gallery.",
      concept: "Alternate between wide architectural frames and close, lived-in lifestyle detail.",
      strategy: "Shoot rooms and interiors during low-traffic hours for clean composition, then layer in lifestyle imagery separately.",
      creativeDirection: "Natural light, minimal styling intervention — let the architecture and interior design carry the frame.",
      execution: "Delivered a full gallery spanning room photography, interiors, architecture, and lifestyle imagery.",
      gallery: [
        { alt: "Room photography, suite" },
        { alt: "Architecture, wide exterior" },
        { alt: "Interior detail, textures" },
      ],
      results: ["EDIT ME — add usage detail (website, OTA listings, press, etc.)"],
      reflection: "EDIT ME — add a reflection on this project.",
    },
  },
  {
    slug: "editorial-journal",
    number: "05",
    title: "Editorial Journal",
    year: "Ongoing",
    category: "Editorial Journal",
    role: "Photographer",
    description:
      "A curated collection of personal work — travel, architecture, street photography, landscapes, textures, editorial portraits, and lifestyle imagery.",
    format: "pinned-collage",
    tags: ["Travel", "Architecture", "Street Photography", "Landscapes", "Textures", "Editorial Portraits"],
    categories: ["Editorial"],
    cover: { alt: "Editorial journal, curated personal frame" },
    images: [
      { alt: "Travel frame, architecture detail" },
      { alt: "Street photography frame" },
      { alt: "Landscape frame" },
      { alt: "Texture study" },
      { alt: "Editorial portrait" },
    ],
    caseStudy: {
      overview:
        "An ongoing, curated journal of personal photography — the frames that don't belong to a client brief, only to a way of seeing.",
      challenge: "Edit a wide-ranging personal archive down to a set that reads as one voice, not a scattered collection.",
      concept: "Curate by eye and mood rather than by trip or subject — texture, geometry, and light as the connective thread.",
      strategy: "Keep the edit slow and ongoing, adding only frames that hold up months after they were taken.",
      creativeDirection: "Consistent tonal grading across otherwise disparate subjects, so the collection reads as one body of work.",
      execution: "An evolving, curated gallery spanning travel, architecture, street, landscape, texture, and portrait work.",
      gallery: [
        { alt: "Journal frame — architecture" },
        { alt: "Journal frame — street" },
        { alt: "Journal frame — landscape" },
        { alt: "Journal frame — portrait" },
      ],
      results: ["An evolving, curated personal archive"],
      reflection:
        "This is the work that keeps the client work honest — it's where I remember why I picked up a camera in the first place.",
    },
  },
];

/* ── Collage section — a loose set of editorial fragments ──────── */
export const collageItems: { image: ImageRef; rotate: number; note?: string }[] = [
  { image: { alt: "Editorial black and white portrait, cropped tight" }, rotate: -4 },
  { image: { alt: "Layered fashion photography, full length" }, rotate: 3 },
  { image: { alt: "Detail shot, hands and fabric" }, rotate: -2, note: "keep it simple" },
  { image: { alt: "Wide landscape editorial frame" }, rotate: 5 },
  { image: { alt: "Close crop portrait, profile" }, rotate: -6 },
  { image: { alt: "Studio detail, paper and light" }, rotate: 2, note: "shot on film" },
];

export const desk = {
  eyebrow: "The Archive",
  heading: "An open desk",
  subheading: "A working surface — drag, hover, and open what catches your eye.",
};

export const photographySection = {
  eyebrow: "Photography",
  heading: "Selected Commercial Work",
  subheading: "Brand, hospitality, and editorial photography — filter by discipline, open any project for the full story.",
  filters: ["All", "Commercial", "Fashion", "Hospitality", "Editorial"] as const,
};
