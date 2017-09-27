## React Native Boilerplate

React Native Boilerplate is a  repository that helps anyone create new applications. Giving you a technically sound and well tested starting point for your application.
And there will display a sample for searching repository from github by user name.

### Quick Start

Use the following commands to get started on your new app.
Before i think you should install react-native CLI

```
git clone https://github.com/arthurzoubin/ReactNativeBoilerplate.git <directory-name>
cd <directory-name>
npm install or yarn install
mv example.env .env
#iOS
react-native run-ios
#Android
react-native run-android
```

### Code check (use ESLint to guide the coding type)
```
npm run lint
```

With the default `.env` file, this will start your application in development mode.

### Technology stack

React Native Boilerplate uses the following libraries at its core:

##### Build tools
- [babel](http://babeljs.io/) - A JavaScript compiler.

##### Universal Application
- [react-native](http://facebook.github.io/react-native/) - A library for building interfaces.
- [redux](http://redux.js.org/) - A library for state management.
- [redux-saga](https://github.com/yelouafi/redux-saga) - Side effect management for redux.
- [reselect](https://github.com/reactjs/reselect) - A library for creating state selectors.
- [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware) - A redux middleware for creating asynchronous actions.

##### Utility
- [ramda](http://ramdajs.com/) - A modular utility library focused on functional programming.
- [immutable](https://github.com/facebook/immutable-js) - Immutable persistent data collections for Javascript which increase efficiency and simplicity.
- [flow](https://flow.org/) - Tired of having to run your code to find bugs? Flow identifies problems as you code. Stop wasting your time guessing and checking.
- [ESLint](https://eslint.org/) - ESLint is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript.

##### Modules
- [react-navigation](https://reactnavigation.org/) - Start quickly with built-in navigators that deliver a seamless out-of-the box experience.
