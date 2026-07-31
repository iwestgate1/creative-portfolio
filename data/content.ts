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
  | "moodboard"; // branding sample book

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
}

export interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  location: string;
  description: string;
  image: ImageRef;
}

/* ── EDIT ME: site-level identity ─────────────────────────────── */
export const siteConfig = {
  name: "Isabella Westgate",
  shortName: "I. Westgate",
  initials: "IW",
  tagline: "Creative Portfolio",
  title: "Creative Direction, Brand Storytelling & Entrepreneurship",
  scrollCue: "Scroll to explore",
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
    { role: "Freelance Photographer", org: "Self-employed", year: "2021 — Present" },
    { role: "Marketing Lead", org: "EDIT ME — Company", year: "2022 — 2023" },
  ],
  education: [
    { credential: "B.A., Marketing & Design", org: "EDIT ME — University", year: "2019 — 2023" },
  ],
  skills: [
    "Brand Strategy",
    "Creative Direction",
    "Photography",
    "Art Direction",
    "Copywriting",
    "Social Strategy",
    "Entrepreneurship",
    "Campaign Design",
  ],
};

/* ── EDIT ME: Experience index ──────────────────────────────────── */
export const experience: ExperienceItem[] = [
  {
    role: "Founder & Creative Director",
    company: "Stitch and Brim",
    year: "2023 — Present",
    location: "Remote / On location",
    description:
      "Founded and art-directed a brand identity from the ground up — naming, visual system, photography, and go-to-market storytelling.",
    image: { alt: "Studio table with brand materials for Stitch and Brim" },
  },
  {
    role: "Freelance Photographer",
    company: "Independent",
    year: "2021 — Present",
    location: "On location",
    description:
      "Shoot editorial and campaign photography for independent brands, focused on black-and-white portraiture and contact-sheet storytelling.",
    image: { alt: "Contact sheet of black and white portrait photography" },
  },
  {
    role: "Marketing Lead",
    company: "EDIT ME — Company",
    year: "2022 — 2023",
    location: "EDIT ME — City",
    description:
      "Directed campaign strategy and social content across channels, translating brand voice into measurable growth.",
    image: { alt: "Campaign moodboard on a studio wall" },
  },
  {
    role: "Creative Direction Intern",
    company: "EDIT ME — Studio",
    year: "2021 — 2022",
    location: "EDIT ME — City",
    description:
      "Supported art direction for magazine-style campaign spreads, from concept sketches to final layout.",
    image: { alt: "Magazine spread layout in progress" },
  },
];

/* ── EDIT ME: Selected Work — six projects, six physical formats ─ */
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
    slug: "field-notes",
    number: "02",
    title: "Field Notes",
    year: "2024",
    category: "Photography",
    role: "Photographer",
    description:
      "A black-and-white portrait series presented as a contact sheet — every frame considered, only the best circled.",
    format: "contact-sheet",
    tags: ["Portraiture", "Film", "Editorial"],
    cover: { alt: "Contact sheet cover frame" },
    images: [
      { alt: "Contact sheet frame 01" },
      { alt: "Contact sheet frame 02" },
      { alt: "Contact sheet frame 03" },
      { alt: "Contact sheet frame 04" },
      { alt: "Contact sheet frame 05" },
      { alt: "Contact sheet frame 06" },
    ],
    caseStudy: {
      overview:
        "A personal series exploring portraiture in natural light, shot entirely on black-and-white film.",
      challenge:
        "Capture unguarded expressions without the polish of a studio setup or the safety of digital previews.",
      concept:
        "Treat every roll like a single, continuous conversation — no reshoots, no digital retouching of expression.",
      strategy:
        "Shoot in short, familiar sessions to let the subject forget the camera was there.",
      creativeDirection:
        "High-contrast black and white, tight crops, and a consistent grain that ties every frame together.",
      execution:
        "Twelve rolls shot over three months, developed and scanned by hand, edited down to a single sheet.",
      gallery: [
        { alt: "Selected portrait frame 01" },
        { alt: "Selected portrait frame 02" },
        { alt: "Selected portrait frame 03" },
        { alt: "Selected portrait frame 04" },
      ],
      results: [
        "Series exhibited as a printed contact sheet at EDIT ME — venue",
        "Selected frames licensed for editorial use",
      ],
      reflection:
        "Working on film again slowed me down in the best way — every frame had to be decided before it was taken.",
    },
  },
  {
    slug: "paper-and-thread",
    number: "03",
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
    number: "04",
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
    number: "05",
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
    number: "06",
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
