# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshots

<ins>Frontend Mentor's Desktop Design</ins>:

![Frontend Mentor's Desktop Design](./design/desktop-design.jpg)

<ins>My Desktop Solution</ins>:

![My desktop solution](image.png)

<ins>Frontend Mentor's Mobile Solution</ins>:

![Frontend Mentor's Mobile Design](./design/mobile-design.jpg)

<ins>My Mobile Solution</ins>:

![My mobile solution](image-1.png)

### Links

- Solution URL: [Article Preview Component](https://article-preview-component-moonji.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learned that it is not good practice/effective to make style changes in JavaScript. Instead, we should use JS to toggle CSS class styling instead, like this: 

#### JavaScript:
```js
// constants referring to HTML elements
const shareArea = document.getElementById('share-area');
const share = document.getElementById('share-icon');
const links = document.getElementById('links')

// click event to show shareable links and change button color 
shareArea.addEventListener('click', function() {
  links.classList.toggle("hidden")
  shareArea.classList.toggle("button-clicked");
  share.classList.toggle("share-clicked")  
});
```

#### CSS: 
```css
.button-clicked {
  background-color: var(--desat-dark-blue);
}

.share-clicked {
  fill: var(--light-gray-blue);
}
```

<ins>AND</ins> I learned how to change the color of an SVG, which is by assigning a color code to the "fill" property of the SVG element (as shown above in .share-clicked).

### Continued development

I want to continue focusing on funtional JS especially with its interaction with HTML and CSS. I want to learn what are the appropriate practices and I want to be able to understand and implement more complex principles in the future. JavaScript is definitely the more difficult of the three technologies for me, so it's gonna be a rough ride but hopefully I can nail down the concepts (inshaAllah)!

### Useful resources

- [Frontend Mentor: Handling User Events](https://www.frontendmentor.io/learning-paths/javascript-fundamentals-oR7g6-mTZ-/steps/66f70aee5832c087f295b055/article/read) - This is the main lesson of this section which made it much easier for me to understand the differences between the various ways of writing event handlers.
- [Free Code Camp: DOM Events and Event Listeners](https://www.freecodecamp.org/news/dom-events-and-javascript-event-listeners/) - This is another article about the same topic of the above link and it was even recommended by Frontend Mentor. I found this resource very useful! 
- [W3Schools: toggle()](https://www.w3schools.com/HOWTO/howto_js_toggle_class.asp) - Quickly demonstrated the toggling of HTMl classes for the purpose of applying CSS styling when an event handler is triggered.

## Author

- Frontend Mentor - [@moonji-spoonji](https://www.frontendmentor.io/profile/moonji-spoonji)

## Acknowledgments

I'd like to thank alexkmarshall, gracesnow, and .tharunraj in the Discord for helping me with positioning of the link share box, toggling CSS classes through JS, and styling SVGs! I appreciate any and all the help I can get, so big ups to you guys lol! :)
