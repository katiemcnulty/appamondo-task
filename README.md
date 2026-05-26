# Appamondo Task — Visit Scotland Knowledge Base

## Inspiration

I researched a number of real-world knowledge bases before starting. A clear pattern emerged across the best ones: a hero section with a prominent search bar, a categorised topic grid for browsing, and a support call-to-action for users who can't find what they need. I used this as the structural foundation for the app.

For the card-based topic layout I looked at how other knowledge bases examples (https://swifteq.com/post/zendesk-help-center-examples) handle category navigation. The accordion FAQ pattern also caught my attention as a clean way to handle common questions without overwhelming the page, and is something I would have included with more time.

For the navbar I chose a fixed position with a frosted glass blur effect on scroll. This is a pattern used widely by modern interfaces including Apple's own sites, and I think it gives the UI a polished, contemporary feel while keeping navigation accessible at all times.

---

## Theme

I chose Visit Scotland as the theme. I felt it was a good topic for the knowledge base structure, and it gave me the opportunity to bring something personal to the project. The hero image is one of my own landscape photographs, which I felt gave it a more considered finish than a stock image would.

---

## Colours and Design Choices

I pulled the palette directly from Visit Scotland's own brand: a deep purple (`#5b2487`) from their nav etc as the primary colour and a bold blue (`#1a3fb3`) as the secondary accent. All colours are defined as CSS custom properties in `style.css` so they are consistent and easy to update across the whole application.

| Variable | Value | Usage |
|---|---|---|
| `--color-primary` | `#5b2487` | Primary brand colour, navbar, backgrounds |
| `--color-primary-dark` | `#200f2e` | Footer bar, deep backgrounds |
| `--color-primary-light` | `#ededed` | Page backgrounds, content areas |
| `--color-secondary-dark` | `#1a3fb3` | Secondary accent |
| `--color-secondary-light` | `#3b69e6` | Hover states, highlights |

For layout I used CSS grid and flex throughout, with responsive breakpoints that collapse to a single column on mobile. Lucide Vue was used for iconography, keeping the icon set consistent and lightweight.

---

## Approach

The app is built in Vue 3 with TypeScript and Vite. I chose Vue because it is my primary commercial stack and allowed me to focus on the quality and detail of the output. Components are broken down by page section, routing is handled with Vue Router, and CSS for styling.

I approached the build the same way I would a real project: structure and routing first, then pages in priority order, with the home page as the main focus given it is the entry point for most users. 

Most of my time I spent on the home page and then tried to give a consistent look and feel to the rest of the pages.
Each article page is currently static, served from a local JSON file. Given real endpoints, these would be fully dynamic.
 
---

## Assumptions Made

- A knowledge base has three core user needs: finding content (search), browsing by topic (categories), and escalating if needed (contact). These became the three pages.
- Article content and categories are served from a local JSON file to simulate a real data source.
- The search bar is present but not yet functional. I have noted what I would do with it below.
- The contact form captures input but does not submit to a backend. Again, as there are no endpoints this has not been fully implemented.

---

## What Is Fully Working

- Home page including hero, topic cards loaded from JSON, contact support banner, and footer
- Logo has a prop to change color so easy to update, like on nav compared to the footer. Nice and easy to update. 
- Fixed navbar with frosted glass blur effect, responsive burger menu with full screen overlay
- Routing between Home, Article and Contact pages with scroll to top on navigation
- Routing between Home, Article, and Contact pages.
- Back to top button, appears on scroll as a stopgap while search is not yet in the navbar
- Responsive layout across all sections, grid collapses to single column on mobile
- Article page basic structure and content rendering
- Related articles section is stick position so it scrolls with the article content
- Some small animations on search button and contact button just for small nice ux things with time given

---

## What I Would Improve With More Time

**Search**
The search input is in the hero but does not yet filter results. I would wire it up to filter articles and categories client-side. Also I had an idea in mind to move the search bar into the navbar as the user scrolls past it, keeping it accessible at all times without needing to return to the top. The back to top button is a stopgap for this.

**Article Page**
I would add scroll-linked heading highlights in the sidebar using the Intersection Observer API, which is something I have implemented before. I would also add a feedback modal and potentially a comments section. Also the related articles would be better as a collapsible list to toggle when in mobile view.

**FAQ Page**
An accordion-style FAQ page would be a natural addition to a knowledge base and something I would have prioritised with more time.

**Contact Form**
Hook up to a real submission endpoint and show validation. I would also add a success message and a form reset button.

**Popular Articles**
I would add a section to the home page that shows the most popular articles, there is an object for this in the JSON file but I have not yet implemented it.

**Topic/Category Page**
When you click on a topic on the home page it would go to that topic, rather than one static article. 

**Footer**
Replace placeholder links with real content and flesh out the information section.

**Testings**
Testing across more browsers and devices as due to time constraints I have not yet done this.

---

## Running Locally

```bash
npm install
npm run dev