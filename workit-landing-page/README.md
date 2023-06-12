# Frontend Mentor - Workit landing page solution<!-- omit in toc -->

This is a solution to the [Workit landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/workit-landing-page-2fYnyle5lu).

## Table of contents<!-- omit in toc -->

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
    - [Mobile](#mobile)
    - [Tablet](#tablet)
    - [Desktop](#desktop)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

#### Mobile

![final mobile](assets/images/final-mobile.png)

#### Tablet

![final tablet](assets/images/final-tablet.png)

#### Desktop

![final desktop](assets/images/final-desktop.png)

### Links

- [GitHub URL](https://github.com/jdwilkin4/frontend-mentor-monorepo-challenges/tree/main/workit-landing-page)
- [Live site URL](https://jw-workit-landing-page-solution.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to work with radial gradients for the first time to help create rounded bottom corners.

```scss
&__img-container {
  background-image: radial-gradient(
    ellipse 150% 100% at 50% -50%,
    #24053e 0%,
    #24053e 95%,
    #fcf8ff 95%
  );
}
```
