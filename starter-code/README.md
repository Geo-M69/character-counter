## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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

The goal of the character counter website is to allow users to analyze the text they input by counting characters, words, and sentences. Key features include:

- Count the number of characters, words, and sentences in the input text.
- Option to include or exclude spaces from the character count.
- Set a character limit and display a warning message when the text exceeds it.
- Display the approximate reading time based on the word count.
- Calculate letter density of the input text.
- Allow users to select their preferred color theme.
- Ensure the interface adjusts to the user’s device screen size for an optimal experience.
- Provide hover and focus states for all interactive elements.

### Screenshot

![](./screenshot.jpg)

**Note: Update the screenshot with your actual project screenshot here.**

### Links

- Live Site URL: [Work in Progress..](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript


### What I learned

While building this project, I gained a deeper understanding of how to handle text input and manipulate it to display useful information. Key learnings include:

- How to calculate the number of characters, words, and sentences using JavaScript.
- The challenge of managing text overflow and ensuring the layout adjusts across different screen sizes.
- How to implement a dynamic reading time feature based on word count.
- Understanding the importance of user experience in providing responsive designs and clear feedback, especially with warnings for exceeding character limits.

```js
const calculateReadingTime = (text) => {
  const words = text.split(' ').length;
  const readingTime = Math.ceil(words / 200); // average reading speed of 200 words per minute
  return readingTime;
}
```

### Continued development

In future iterations, I plan to:

- Implement a more advanced word density analysis to provide insights into text composition.
- Improve the responsiveness and design across all devices by adding more CSS Grid and Flexbox techniques.
- Add features such as saving the text or exporting the analysis report for the user.

### Useful resources

- [JavaScript String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) - This was very helpful for learning how to split text into words and sentences.
- [CSS Tricks: Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This resource was great for improving the layout and responsiveness of my site.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

A big thanks to the developers and communities that provided inspiration for the design and features. I also appreciate the resources on text analysis and responsive design that helped me refine my implementation.