# Curbngo - URL Shortener solution
## Table of contents

- [Curbngo - Shortly URL shortening API Challenge solution](#curbngo---shortly-url-shortening-api-challenge-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)

## Overview
Description: This is a solution to the Shortly URL shortening API Challenge. \
Last Updated Date: 10-28-2021 \
Author: Curbngo, Vincent Jiang

### The challenge
Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Links

- Solution URL: [Github-link](https://github.com/VJ4538/URL-Shorenter)
- Live Site URL: [Live-link](https://url-shortener-vincent.netlify.app/)

## My process

### Built with
- [React](https://reactjs.org/) - JS library
- [Shrtcode API](https://app.shrtco.de/) -URL shortening API
- [SCSS](https://sass-lang.com/) - For styles
- Mobile-first workflow

### What I learned

Session Storage: 
- One of the things I learned while working with the problem of keeping shortened links after refreshing is session storage. The first approach I took was the local storage approach. I have worked with local storage in my previous projects, and I know it will solve the problem. However, after implementing local storage, the result is not what I want. The URL list is not cleared when the tab or browser is closed. I have to look for another solution to this problem. One technique I noticed while searching for solutions is session storage. The session storage approach is more logical in this scenario because it is likely to be a one-time use function since the user is not logged in. Session storage will clear the data when the user closes the tab or browser.

- I think there is also an alternative for this problem. Since there is a login function; therefore it is reasonable to take a database approach where the shortened links list can be kept under a user's account in a database. 

Code:
```js
//Storing obj & array
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}
//Set and get
sessionStorage.setObj('ShortenUrl', [...shortenedUrl,response])
const list =sessionStorage.getObj('ShortenUrl')
```
Clipboard: 
- This is the first time I encounter a problem with clipboard. So I have to search for idea on google and stack overflow.

Code:
```js
navigator.clipboard.writeText(shortenLinkRef.current.textContent)
```

Prevent Scrolling:
- Preventing scrolling is a problem I encountered while working with modal. I have worked with modal before, but I never pay attention to the scrolling issue. For this problem, my logic is that when a modal is opened, the user should not be able to scroll. I had to search for the ideas on stack overflow. In the end, I was able to learn from others and successfully implement it.

Code:
```js
import { useEffect } from 'react';

export const useDisableBodyScroll = (open) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);
};
```

### Continued development

1. I usually use desktop-first workflow, but this time I tried mobile-first workflow. I do find mobile-first workflow is easier to work with compared to desktop-first. In the future, I want to refine both skills more and eventually stick to one of them.

2. React custom hooks is a powerful technique it allows you to create re-usable logic. For example, in this project, I used custom hooks for managing HTTP requests and managing input states. I am not completely comfortable with them, so I want to perfect my skills on them.

3. SCSS is what I used in this project for styling. The mixin feature, extend, and variable feature in SCSS is very useful. It helps me create re-usable codes, and it will make managing style much easier by making the code more dynamic. In the future development, I will like to refine and perfect my skills in SCSS.

### Useful resources
- [Prevent Scrolling](https://stackoverflow.com/questions/54989513/react-prevent-scroll-when-modal-is-open) -This helped me with solving prevent scrolling when modal is open.

- [Clipboard](https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard) - This helped me with solving single click copy problem.

- [Clipboard documentation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard) - This helped me with solving single click copy problem.

- [Session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) - This is an amazing article which helped me understand what is session storage and the difference between session and local storage. It also provide reader code snippnet on how to implement a session storage.

- [SCSS](https://sass-lang.com/documentation) This is the offical SCSS documentation and I think it is benfitical for developer to learn about basic concepts of SCSS

