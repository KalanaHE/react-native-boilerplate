# 🚀 React Native Feature Boilerplate - October 2021

[![React Native](https://img.shields.io/badge/React%20Native-v0.62.2-green.svg)](https://facebook.github.io/react-native/)
[![React Navigation V5](https://img.shields.io/badge/React%20Navigation-v5.1-blue.svg)](https://reactnavigation.org/)

React NativeFeature Boilerplate is a starting point for React Native application. This project is configured with redux, redux Toolkit
and redux persist. Uses latest version of react-navigation (v5)

<p float="left">
<a href='https://redux-toolkit.js.org/'><img src='https://miro.medium.com/max/800/1*4sxOPaVNwxrfZ9uxVbUaKg.jpeg' height='60' alt='Redux Toolkit Logo' aria-label='redux-toolkit.js.org/' /></a>
 
<a href='https://formik.org/docs/guides/react-native/'><img src='https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png' height='60' alt='Formik Logo' aria-label='formik.org/docs/guides/react-native/' /></a>

<a href='https://callstack.github.io/react-native-paper/'><img src='https://raw.githubusercontent.com/callstack/react-native-paper/master/docs/assets/images/paper-logo.svg?sanitize=true' height='110' alt='Redux Logo' aria-label='https://callstack.github.io/react-native-paper/' /></a>

</p>

## Features

- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Navigation](https://reactnavigation.org/) baked in.
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Redux](http://redux.js.org/) with [hooks](https://react-redux.js.org/api/hooks) support
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist/)
- [Reselect](https://github.com/reduxjs/reselect)
- [Jest](https://facebook.github.io/jest/)
- [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Prerequisites

- [Node](https://nodejs.org) v10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/)
- A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Project Structure

- `/app` - Contains our React Native App codebase
  - `/api` - Api module class.
  - `/features` - Components and Screen Containers
  - `/config` - Universal styles,images,metrics etc..
  - `/features` - Config files
    - `/User/Home`- Each folder will be a feature like this.
      - `HomeSlice.js` - ReduxToolkit Slices
      - `sagas` - Sagas related with this particular feature [can have single or muliple sagas associated]
      - `selectors` - selectors associated with feature
  - `/utils` - util helper files
  - `/navigation` - All naviagtion related stuff including helpers functions and navigation stack
    - `NavigationService.js` - Service class for navigation - can be used without using props
    - `NavigationHelpers.js` - Set of helper functions to navigate to screens
  - `/store` - Includes everything you need to set up store.
    - `index.js` - Set ups store and export things

## Getting Started

1. Clone this repo, `git clone https://github.com/KalanaHE/react-native-boilerplate`
2. Go to project's root directory, `cd <project name>`
5. Run `yarn` or `yarn` to install dependencies

6) Start the packager with `yarn android`
7) Connect a mobile device to your development machine
8) Run the test application:

- On Android:
  - Run `yarn android`


9. Enjoy!!!

## Contributing
Pull requests are welcome
