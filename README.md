# ENGL 341 — Tabletop Games, Narrative, History, Design

Course website for ENGL 341, Fall 2026, UNC Chapel Hill. Built with Jekyll.

## Quick start

You'll need Ruby + Bundler. From the project root:

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://127.0.0.1:4000/ENGL-341/> in a browser.

To build a static site without serving:

```bash
bundle exec jekyll build
```

The output goes into `_site/`.

## Deploying to GitHub Pages

This is set up to live at `https://<username>.github.io/ENGL-341/` (matching the
ENGL-257 / ENGL-258 pattern). The relevant setting is `baseurl: "/ENGL-341"`
in `_config.yml`. If you want it served from the root of a domain (no
sub-path), set `baseurl: ""`.

Push to a GitHub repo, enable Pages from the main branch, and you're live.

## File structure

```
.
├── _config.yml                       # Site config — title, baseurl, contact info
├── Gemfile                           # Ruby dependencies
├── _layouts/
│   └── default.html                  # The HTML shell that wraps every page
├── _includes/
│   ├── header.html                   # Top brand + menu toggle
│   └── footer.html                   # Bottom nav + meta
├── assets/
│   ├── css/main.scss                 # All site styling (SCSS, compiled by Jekyll)
│   ├── js/main.js                    # Minor menu interaction
│   └── images/
│       ├── 341_CON.png               # The CON flyer
│       ├── hero/                     # Page-hero images (landing, overview, etc.)
│       └── weeks/                    # week1.jpg through week16.jpg
├── index.html                        # Home page
├── overview-and-outline.html         # Course description + week-by-week schedule
├── assignments-and-materials.html    # Required materials, diaries, projects
└── gameplay-activities.html          # Critical play, games list, 341 CON
```

## Editing content

- **Masthead text, course title, meeting time, room, contact info:** edit
  `_config.yml`. These values are referenced site-wide via `{{ site.contact.email }}`,
  `{{ site.semester }}`, etc.

- **Course schedule:** all 16 weeks live in `overview-and-outline.html`. Each
  week is a `<article class="week-card">` block. Add, remove, reorder, edit
  copy, change image references — all directly in that file. The image is
  the `<img class="week-image">` inside the article.

- **Assignment descriptions:** `assignments-and-materials.html`. Each assignment
  is an `<div class="assignment-block">` block. The Project #2 detail block uses
  a native `<details class="expandable">` element — content inside collapses by
  default and expands on click.

- **Games list / CON section:** `gameplay-activities.html`.

- **Page hero images:** swap files in `assets/images/hero/`, keeping the same
  filenames, or edit the path in the relevant page's `.page-hero` style attribute.

- **341 CON flyer:** `assets/images/341_CON.png`. The current image carries the
  Fall 2025 date (`12/09/25`) — replace with the updated flyer when ready.
  The canonical date is rendered as text alongside the image, so even with the
  stale flyer the correct date is visible to readers.

## Canvas links

All Canvas links are rendered as placeholders:

```html
<a href="#" class="placeholder-link">Accessible via Canvas</a>
```

These appear with a dashed underline and a small arrow icon to make them easy to
spot. Once the Canvas course shell is set up, find each `href="#"` in the four
HTML pages and replace with the real Canvas URL. (`grep -rn 'placeholder-link' .`
will list them all.)

## Styling notes

- Aesthetic adapted from HTML5 UP's "Hyperspace" theme (CC BY 3.0), which is
  what ENGL-258 also uses. All styling is in `assets/css/main.scss` as plain
  CSS dressed in a Jekyll SCSS wrapper. No SCSS preprocessing features are
  used — you can read and edit it as ordinary CSS.

- Accent color is a muted burnt orange (`#c75d3a`). Search-and-replace that
  hex code in `main.scss` to change it site-wide.

- Fonts are Roboto Slab (headings) and Source Sans 3 (body), loaded from
  Google Fonts in the `<head>` of `_layouts/default.html`.

## What's intentionally not there

- No Contact page — contact info lives at the bottom of the home page (the
  258 model). The menu sidebar also surfaces email and Zoom.
- No academic policies, grade scale, or course objectives — those stay in the
  Canvas-hosted syllabus PDF.
- No detailed assignment instructions or diary prompts — those live in the
  Canvas assignment pages and in-class handouts.
