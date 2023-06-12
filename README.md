# Frontend Mentor - Product feedback app solution

## Welcome! 👋

This is a full stack solution (MERN) to the [Product feedback app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-feedback-app-wbvUYqjR6).

![Design preview for the Product feedback app challenge](./preview.jpg)

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

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout for the app depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] Create, read, update, and delete product feedback requests
- [x] Receive form validations when trying to create/edit feedback requests
- [x] Sort suggestions by most/least upvotes and most/least comments
- [x] Filter suggestions by category
- [x] Add comments to a product feedback request
- [] Reply to a comment on a product feedback request
- [x] Upvote product feedback requests on all pages
- [x] **Bonus**: Keep track of any changes, even after refreshing the browser

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Feedback App](https://jovial-klepon-dc8a53.netlify.app/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Express](https://expressjs.com/)
- [NodeJS](https://nodejs.dev/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

### What I learned

I learned how to easily handle form validation using React Hook Form. It cut down the amount of code I had to write in order to achieve the same results which include forms that handle input errors appropriately, preventing invalid data from being submitted.

I also learned how to use Redux while building this application. Redux Toolkit is the recommended way to develop with Redux and while its been difficult to understand, after experimenting with it I've come to like it alot. Redux helps to store state that is used in several components in one store for easy access anywhere in the application. RTK Query has also been interesting to use, as it simplifies getting and adding data from the server as it takes care of HTTP requests for me automatically as long as I provide the correct baseurl and endpoints. It also updates right away when it finds out data on the server has been mutated so that it matches data in the cache.

### Continued development

 At the moment a user create, read, update and delete suggestions and can sort through the list of feedback items on the suggestions homepage. Currently the only user on the application is the default "Guest/@GuestUser" to demonstrate how the application functions. As development continues, users will be able to create accounts under different names to upvote feedbacks and leave comments on feedback items. The roadmap page also shows an organized list of feedback suggestions that have a status of "Planned", "In-Progress", or "Live".

### Useful resources

- [React Hook Form](https://react-hook-form.com/) - Assisted with form validation.

- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) - These docs helped me to understand how to use Redux for this project.

- [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query) - This is some additional documentation that helped me understand how to use Redux with HTTP requests to get data from the server and add data to the server while keeping it in sync with the Redux store.

## Author

- Website - [Portfolio](https://www.aniyaallen.com/)
- Frontend Mentor - [@amallen1](https://www.frontendmentor.io/profile/amallen1)
