---
name: "Greenwood Homes"
description: "An evidence-first builder's pattern book where tactile construction records frame completed work."
colors:
  ink: "#18231f"
  ink-soft: "#344039"
  paper: "#f2eddf"
  paper-deep: "#d5c5a2"
  clay: "#b85631"
  clay-dark: "#8f3b20"
  brass: "#9c7934"
  line: "rgba(24, 35, 31, 0.24)"
  tab-paper: "#e9dfca"
  tab-hover: "#fff9ec"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.5rem, 4.2vw, 4.8rem)"
    fontWeight: 500
    lineHeight: 0.88
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3rem, 5vw, 5.6rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "2.3rem"
    fontWeight: 500
    lineHeight: 0.95
  body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  square: "0"
  pin: "50%"
spacing:
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  2xl: "5rem"
components:
  action-tab:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "1.1rem 3rem 1.1rem 1.4rem"
  action-tab-hover:
    backgroundColor: "{colors.clay-dark}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "1.1rem 3rem 1.1rem 1.4rem"
  proof-tab:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    width: "clamp(38px, 3.3vw, 52px)"
  proof-tab-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.clay-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    width: "clamp(50px, 4.3vw, 68px)"
  paper-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "2rem clamp(2rem, 7vw, 7rem)"
---

# Design System: Greenwood Homes

## Overview

**Creative North Star: "The Builder's Pattern Book"**

Greenwood Homes presents trust as something a visitor can inspect. Monumental completed-work photography carries desire, while warm paper, vellum-like proof leaves, precise rules, construction notation, and pinned action tabs turn verified experience into a tactile record rather than generic luxury marketing.

The visual world is assured, practical, and quietly crafted. Charcoal drafting linen establishes weight; warm paper creates legibility and human warmth; fired clay reserves attention for action and proof; brass appears only where an object is physically “fastened.” The layout stays editorial and open even when evidence is dense.

**Key Characteristics:**

- Evidence is layered directly over completed work.
- Square paper planes, fine rules, and countable drafting marks replace generic cards.
- Compressed display type carries architectural weight; humanist sans-serif copy stays calm and readable.
- Warm material color and restrained motion make the interface tactile without becoming nostalgic or ornamental.
- Photography remains full-color, site-specific, and visually dominant.

## Colors

The palette combines near-black green drafting ink with aged architectural paper, then uses fired clay and brass as sparse physical accents.

### Primary

- **Fired Clay:** Reserved for primary action tabs, proof emphasis, and keyboard focus so conversion and state remain unmistakable.
- **Deep Fired Clay:** Strengthens emphasized facts and active labels and supplies the action hover state.

### Secondary

- **Fastener Brass:** Appears on pins and fasteners as a localized material highlight, never as a broad surface color.

### Neutral

- **Drafting Ink:** The foundational dark field and primary text color; it anchors the system and gives photography a gallery-like frame.
- **Soft Drafting Ink:** A secondary ink for lower-emphasis copy where full contrast would feel too hard.
- **Warm Plan Paper:** The principal reading surface for navigation, proof leaves, records, and the footer.
- **Aged Vellum:** Separates adjacent paper layers and warms secondary copy on dark fields.
- **Alternating Leaf Paper:** Gives neighboring proof leaves a subtle physical distinction.
- **Fresh Paper Highlight:** Marks hovered or keyboard-focused proof leaves without introducing a new accent hue.
- **Drafting Rule:** Divides records and measurements with low-contrast charcoal lines.

### Named Rules

**The Fired-Clay Signal Rule.** Fired clay marks action, active proof, or direct emphasis; it does not become general decoration.

**The Brass Fastener Rule.** Brass belongs to literal pins and fastening details only.

## Typography

**Display Font:** Barlow Condensed (with sans-serif fallback)
**Body Font:** Source Sans 3 (with sans-serif fallback)

**Character:** Barlow Condensed gives headlines the compact authority of stamped construction lettering. Source Sans 3 makes navigation, evidence, and longer explanations feel direct, contemporary, and unforced.

### Hierarchy

- **Display:** Hero-scale, tightly set, and limited to the opening proposition.
- **Headline:** Large section statements with the same compressed silhouette and tight leading.
- **Title:** Proof-sheet and project-level headings that remain sturdy at a smaller scale.
- **Body:** Humanist reading copy used around a comfortable measure of roughly 48–56 characters where the layout permits.
- **Label:** Narrow uppercase notation for indexes, measurements, roles, and places; small size is balanced by strong weight and open tracking.

### Named Rules

**The Two-Voice Rule.** Barlow Condensed states the proposition; Source Sans 3 explains the evidence.

**The Notation Rule.** Uppercase tracking is reserved for short indexes, measurements, roles, and locations—never paragraphs.

## Layout

The desktop composition behaves like an open worktable. A warm-paper masthead begins after a deliberate charcoal margin, the hero image fills the field, and a dark headline spine plus fanned proof leaves overlap it. Subsequent sections alternate broad dark galleries, offset paper records, and spacious two-column editorial arrangements. Major section padding scales fluidly; thin gaps and rules align related artifacts without boxing them into dashboards.

At the first breakpoint (980px), the masthead loses secondary navigation, the headline becomes horizontal above the image, the proof leaves become a readable row, and two-column content stacks. At the compact breakpoint (650px), proof controls become a multi-row index, project imagery becomes a single-column sequence, process rows stack, and all headline text remains horizontal. Mobile never introduces a sidebar or sideways headline.

**The Open Worktable Rule.** Preserve breathing room around evidence clusters; density belongs inside the proof record, not across the whole page.

**The Image-and-Record Rule.** Major photographic fields should touch or overlap a paper record so aspiration and proof remain visibly connected.

## Elevation & Depth

Depth is physical and low. Soft, offset shadows distinguish stacked paper, pinned tabs, the masthead, and portrait prints; fine tonal changes and one-pixel rules do the rest. Proof leaves use a shared drop shadow so the group reads as one fanned cabinet, while brass pins add a small localized highlight. No glossy floating panels or ambient glass cards belong in this world.

### Shadow Vocabulary

- **Masthead Lift** (`0 6px 22px rgba(8, 12, 10, 0.22)`): Separates the paper masthead from the hero field.
- **Pinned Tab Lift** (`0 8px 18px rgba(15, 20, 17, 0.22)`): Gives fired-clay actions a thin physical offset.
- **Paper Record Lift** (`0 10px 28px rgba(7, 11, 9, 0.20)`): Supports large paper sheets over adjacent material.
- **Portrait Print Lift** (`0 13px 25px rgba(24, 35, 31, 0.20)`): Makes team portraits read as loose prints.
- **Proof Cabinet Stack** (`drop-shadow(8px 11px 12px rgba(8, 12, 10, 0.32))`): Unifies the fanned proof assembly.

### Named Rules

**The Physical Stack Rule.** Use elevation only when one material plane visibly sits above another.

## Shapes

The form language is square, clipped, and constructed. Paper sheets, navigation, project frames, and buttons have no rounded corners. Circles are reserved for brass pins. The hero action gains a triangular paper-tab notch, while slight rotations and offsets on proof leaves and portrait prints imply handled physical objects without compromising alignment.

**The No Rounded Card Rule.** Content surfaces stay square; a circular silhouette means a fastener, not a container.

## Components

### Buttons

Pinned action tabs are tactile and decisive.

- **Shape:** Square fired-clay rectangle with a small brass pin and, where attached to a record, a triangular notch.
- **Primary:** Warm-paper text on fired clay with generous horizontal padding.
- **Hover / Focus:** Deepen to dark clay on hover; keyboard focus must remain visibly clay-colored and high contrast.
- **Motion:** State changes are brief; material movement uses the shipped spring-like easing and becomes effectively instantaneous when reduced motion is requested.

### Cards / Containers

Paper records feel stacked, not componentized.

- **Corner Style:** Square.
- **Background:** Warm plan paper, aged vellum, or translucent plan paper over imagery.
- **Shadow Strategy:** Only the low physical lifts defined above.
- **Border:** Fine drafting rules separate internal records; avoid perimeter borders unless a real material edge requires one.
- **Internal Padding:** Generous and fluid on editorial sheets; compact on repeated proof leaves.

### Navigation

The masthead is a warm-paper strip with the compressed uppercase wordmark on the left, quiet humanist links in the center, and a pinned fired-clay action on the right. Link hover is a thin underline. At narrower widths, secondary links disappear and the brand plus primary action remain; no hamburger or sidebar is introduced by the shipped system.

### Proof Index

Seven semantic tabs expose every evidence category at once. Desktop tabs are narrow vertical paper leaves with stepped offsets, alternating paper tone, a brass pin, an index, and uppercase notation. The active leaf widens and takes dark-clay text. Hover and keyboard focus flatten the offset and brighten the paper; focus receives a visible inset clay outline. At compact widths the leaves become horizontal, always-readable rows.

### Proof Sheet

The active record is a translucent warm-paper sheet that joins a proof title, emphasized fact, explanatory copy, and an authored line drawing. A fine rule separates copy from the drawing on desktop. Switching records uses a short left-to-right opening motion; reduced-motion preferences suppress it.

### Project Frames

Project links are full-bleed photographs separated by a single fine gap. A dark lower gradient carries the compressed project name and a tracked uppercase region label. Hover scales the photograph only slightly, preserving the building as evidence rather than turning the card into spectacle.

### Portrait Prints

Team portraits use square, gently desaturated photographs on warm-paper mounts. Small rotations and one lifted center print create an informal stack; role labels use dark clay and uppercase notation.

## Do's and Don'ts

### Do:

- **Do** pair major claims with completed-work imagery or a specific proof record.
- **Do** keep paper planes square, rules fine, and shadows low and offset.
- **Do** reserve fired clay for actions, active evidence, focus, and short emphasis.
- **Do** keep completed-home and team photography full-color, site-specific, and prominent.
- **Do** convert the proof index into horizontal, always-readable controls on mobile.
- **Do** respect reduced-motion preferences for sheet changes, image scaling, and smooth scrolling.

### Don't:

- **Don't** use rounded cards, pill controls, glossy glass panels, or soft SaaS-style containers.
- **Don't** scatter brass as decoration; it represents a physical pin or fastener.
- **Don't** let uppercase notation expand into long-form copy.
- **Don't** separate aspiration from evidence with a generic luxury-gallery hero.
- **Don't** introduce sidebar navigation or sideways headline text on compact screens.
- **Don't** fabricate technical plans; drafting drawings are precise visual metaphors, not engineering documents.
