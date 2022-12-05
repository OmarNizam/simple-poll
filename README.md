# simple-poll

- Simple poll app is front end single page application which is divided in three sections.
- It has HomePage view component and there are three components sections rendering inside main HTML tag.

  - On the first section: user can create a poll up to 10 options and it called PollForm component.
  - On the central section : user can see PollVote component and he can vote by selecting one of the options and pressing the "vote" button.
  - On the right section: user can see PollChart component and it is Bar chart will updated based on the
    questions created and the votes that each question got.

    ![Chart Color Scheme](./src/assets/images/readme/responsive-mockup.png)

## Project setup

```npm
npm install
```

### Compiles and hot-reloads for development

```npm
npm run serve
```

### Compiles and minifies for production

```npm
npm run build
```

### Run your functional tests

```npm
npm run ft
```

### Lints and fixes files

```npm
npm run lint
```

## Navigator

- [**User experience UX**](#user-experience-ux)
  - [Use cases](#use-cases)
  - [Site structure](#site-structure)
  - [Design choices](#design-choices)
    - [Typography](#typography)
    - [Color scheme](#color-scheme)
- [**Features**](#features)
  - [Existing features](#existing-features)
    - [Poll Form Component](#poll-form-component)
    - [Client Details PopUp](#client-details-popup)
    - [Java script functions](#java-script-functions)
  - [Future features](#future-features)
- [**Technologies used**](#technologies-used)
- [**Testing**](#testing)
  - [Code Validation](#code-validation)
  - [Responsiveness Test](#responsiveness-test)
  - [Browser Compatibility](#browser-compatibility)
  - [Lighthouse](#lighthouse)
  - [Manual testing](#manual-testing)
  - [User stories testing](#user-stories-testing)
- [**Deployment**](#deployment)
  - [To fork the repository on GitHub](#to-fork-the-repository-on-github)
  - [To create a local clone of this project](#to-create-a-local-clone-of-this-project)

## User experience (UX)

### Use cases

- As the owner, I want to change my poll question.
- As the owner, I want to add, edit or remove the options of my poll.
- As the owner, I want to reset the whole form, including answers.
- As the user, I want to see the UI refresh automatically when something changes.
- As the respondent, I want to send several answers.
- As the respondent, I want to see the changes in real time.

[Back to top](#navigator)

## Site structure

- One page application
- App component
- HomePage view: main component rendering inside it 3 other vue components.
- Components interact with each others using central application pinia state store.
- Application using pinia store for state management.

[Back to top](#navigator)

## Design choices

### Typography

- The fonts chosen were 'Helvetica' for the body text. It fall back to sans-serif respectively.
- 'Helvetica' is used for the body text as it provides a nice contrast to the site, and it easy to read.

### Color scheme

- Use the color group to get the [contrast-grid](https://contrast-grid.eightshapes.com/).
- There are chart bars 10 colors scheme ![Chart Color Scheme](./src/assets/images/readme/chart-color-scheme.png)
- Bootstrap buttons background colors used are: bg-success, bg-danger, bg-info

[Back to top](#navigator)

# Features

## Existing features

### Poll Form Component

- It shows owner a form allow him to create a simple question poll with options.
- Question label.
- Question input with "Enter your question" placeholder with max 80 character input.
- Show error span text in case question input reach 80 characters.
- Options label.
- All inputs has max length 80 characters.
- Show error span text for each option in separately in case input text length reach 80 characters.
- There are two default options "option-1" and "option-2"
- There are minimum two options always.
- Default options able to edit but.
- First two options input owner can edit but not delete.
- There is add button next to the second option input creates new option input field with add and delete buttons next to it.
- Owner can add options to reach max of 10 options input fields the .
- Owner can see counter below options loop to keep updated with current number of options.
- When Owner reach 10 options the add button disabled.
- Also there is _Reset_ button to reset form value to default.
- All data and states interact with piniaStore dynamically on real time.
- All changes are realtime updating and rendering in _PollVote_ Component.

Default home page:

![Default Home](./src/assets/images/readme/default-home.png)

Edit PollForm component with two options:

- As you see that also other components get updated directly with the changes.

![Poll Form Component with 2 options](./src/assets/images/readme/form-2-options.png)

Form max options of 10 disable add button:

![Poll Form Component with max options](./src/assets/images/readme/form-max-options.png)

Delete option in the middle of options list

![Poll Form Component with after delete Java option](./src/assets/images/readme/delete-java-option.png)

After click reset button:

![Default Home](./src/assets/images/readme/default-home.png)

Question Input validation:

![Question Validation Error](./src/assets/images/readme/question-validation-error.png)

Options Input validation:

![Option 2 Validation Error](./src/assets/images/readme/option-2-validation-error.png)

![Option 4 Validation Error](./src/assets/images/readme/option-4-validation-error.png)

[Back to top](#navigator)
