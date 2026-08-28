# Frontend Mentor - Arch Studio multi-page website solution

This is a solution to the [Arch Studio multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/arch-studio-multipage-website-wNIbOFYR6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Design deviations](#design-deviations)
- [Author](#author)

## Overview

### Screenshot

![](./screenshot.webp)

### Links

- Solution URL: [GitHub](https://github.com/MrBlackvanta/arch-studio-multi-page-website)
- Live Site URL: [Cloudflare](https://arch-studio-multi-page-website.abdelrhman-ahmed8881.workers.dev)

## My process

### Built with

- [Next.js 16](https://nextjs.org/) (App Router, React Compiler, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS v4](https://tailwindcss.com/)

### Design deviations

Every departure below is deliberate. Geometry comes from the decoded `.fig` rather than from the
reference JPGs, and contrast ratios come from compositing the real WebP pixels under each text box
rather than from the flat hex values.

#### Forced by WCAG AA

| Where                                                    | As drawn                                             | Shipped                                                               | Ratio       |
| -------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------- | ----------- |
| Contact field label — the only label a sighted user gets | `#C8CCD8`                                            | `#60636D`, the body-copy grey                                         | 1.60 → 5.99 |
| Contact field label and message in the error state       | `#EFAAAA` (`#DF5656` at 50%) and `#DF5656`           | `#DA3A3A` for both; the 1px rule keeps `#DF5656`                      | 3.75 → 4.52 |
| Hero photo scrim                                         | flat black at 35%                                    | black 35% ramping to 70% by 60% of the height, then held              | from 2.43   |
| Project card scrim, and the date under it                | black 0 → 50% over the whole card, date white at 75% | 0 → 60% reaching full strength at the midpoint and held, date at 100% | 2.19 → 4.95 |

A focus ring exists throughout (2px `#1B1D23`, 3px offset) where the design draws none. The one
exception is the contact fields, whose 1px → 3px rule is the design's own focus state and carries
the indicator there.

#### Where the frames disagree with each other

- **The About hero panel bleeds to the right edge at every width ≥ 768.** It reaches `1440` exactly
  on desktop but stops 41px short of `768` on tablet — a panel that almost reaches the edge reads as
  a mistake at every viewport that is not exactly 768.
- **About's desktop `h1` sits at 603, not 587.** The rule → heading gap is 73 in three of the four
  hero instances, so all four use 73 and About and Contact share one component.
- **"View on Map" sits flush to its column.** The design insets the label + arrow unit 6px at
  desktop and mobile, and right-aligns it to the container at tablet.
- **The 65px section rules sit 1px left of the frame's x.** Figma draws each one a pixel to the
  right of the text it belongs to, on every page.
- **The tablet container spans 96–672**, against the frame's 97–670.
- **The contact field label is indented 34px**, against 34.49 — a value the frame's own three
  labels disagree on by 0.49.
- **The office phone number is `123-456-3451`**, the value in all three base frames, not the one in
  the Active States frame.
- Frontend Mentor's copy typos are kept verbatim.

#### Markup and behaviour the design does not describe

- **The office addresses are a `<dl>`.** The frame tab-aligns label and value inside a single text
  node, with 3/2/2 tabs at desktop and 2/1/1 at mobile.
- **Mail and phone are `mailto:` and `tel:` links**, drawn as plain text.
- **Both "View on Map" links carry an `sr-only` office name**, so two links to the same target do
  not share one accessible name. The visible text stays inside the accessible name.
- **The contact form validates on the client and announces the result.** There is no backend and no
  request: an invalid submit marks every failing field, moves focus to the first of them and clears
  as they are fixed; a valid one resets the form and announces a success message through a live
  region. The design has neither state.
- **The message field grows as it is typed**, past the design's 92px box, via `field-sizing: content`.
- **The mobile menu swaps the hamburger for the close icon** that Frontend Mentor ships and the
  design never uses, and marks the current route on every page — only the Portfolio frame draws it.

## Author

- UpWork - [Abdelrhman Abdelaal](https://www.upwork.com/freelancers/mrblackvanta)
- LinkedIn - [Abdelrhman Abdelaal](https://www.linkedin.com/in/abdelrhman-vanta/)
- Frontend Mentor - [@MrBlackvanta](https://www.frontendmentor.io/profile/MrBlackvanta)
