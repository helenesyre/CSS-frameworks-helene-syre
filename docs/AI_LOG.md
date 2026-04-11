# AI LOG

## Task explanation

**Tool used:** Copilot

**Date:** 30 March 2026

**Purpose:** I asked Copilot how I should update my tailwind.config.js file to match the current setup. I had my old setup from JavaScript 2 and needed the config to make custom colors to work.

**Outcome:** Copilot suggested the following code to add to my tailwind.config.js file:

```js
From:
"./src/**/*.{js,ts,jsx,tsx}",

To:
"./css/**/*.{css,js,html}",
"./assets/**/*.{css,js,html}",
```

---

## Fonts not applying to the page

**Tool used:** Claude

**Date:** 02 April 2026

**Purpose:** My google fonts were not applying to the page.

**Outcome:** I asked Claude for help and he suggested that I should add the font family import above the @tailwind directives in my input.css file. This worked.

---

## Nav structure for login

**Tool used:** ChatGPT

**Date:** 05 April 2026

**Purpose:** I wanted to know the best structure for the nav on login and the profile page. I asked how the best way to do this was with js.

**Outcome:** It gave me step by step instructions how they would have solved it. I could have asked better than I did, since it gave me an overly explained answer that was more than I needed. So I took the structure as an inspiration and made one on my own.

---

## Debug form visability on mobile breakpoint

**Tool used:** Claude

**Date:** 07 April 2026

**Purpose:** My search form in the top nav was not showing on mobile breakpoint. So I asked Claude to help me debug why this was happening.

**Outcome:** It gave me a solution to add this to tailwind.config.js (I did not change this):

```js
From:
"./css/**/*.{css,js,html}",
"./assets/**/*.{css,js,html}",

To:
"./**/*.html",
"./js/**/*.js",
"./css/**/*.{css,js}",
"./assets/**/*.{css,js}",
```

This did not work, and I found out the problem was with the dev server had stopped running after talking back and forth with Claude. My own code did work, I just had to restart the dev server.

---

## Filler text for post cards

**Tool used:** Claude

**Date:** 08 April 2026

**Purpose:** I wanted to add some filler text to my post cards, so I asked Claude to help me with this. I wanted authors, titles and paragraphs. I pasted inn my current code for a post card so it knew what I was looking for (I asked for not to get images, since I already had those).

**Outcome:** Claude gave me fillers for the amount of post cards I wanted and delivered the text I wanted, but also gave me tags.

---

## Debug button styiling and hover effects

**Tool used:** Claude

**Date:** 09 April 2026

**Purpose:** After working on this project for a while, I suddenly had a problem with not being able to style my buttons or give them a hover effect. I had no idea why this was happening, since I just set up some buttons recently and it worked fine. I asked Claude to help me debug this problem.

**Outcome:** Claude suggested to clear my cache and restart the dev server, which I did. This did not work, so I asked what was happening one more time. Claude then suggested that I had some conflicting code in my input.css file. I didn't set my styles in a @layer components, which I should have done. I added @layer components { } around my button styles and this fixed the problem.

---
