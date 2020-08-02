# react-notification-component

A delightful, easy to use and highly configurable component to help you notify your users out of the box. Specially for the server side exceptions e.g. 400, 500 errors

## Dependencies
* React Bootstrap Modal

## Getting started
```
npm install react-notification-component
```

### Development

First build the library
```
npm run build:library:dev
```
then run the webpack server to see the app running
```
npm run start
```

## Usage

###

Import <code>react-notification-component</code>
```js
import ReactNotification from 'react-notification-component'
```
Import the <code>CSS</code> theme
```js
import 'react-notification-component/dist/theme.css'
```

##### SASS
<code>SASS</code> files are located in `react-notifications-component/dist/scss`

Render <code>react-notification-component</code> at the top of your application so that it does not conflict with other absolutely positioned DOM elements.
```jsx
const App = () => {
  return (
    <div className="app-container">
      <ReactNotification />
      <Application />
    </div>
  )
};
```

Import <code>store</code> where needed - will be used to access `addNotification` and `removeNotification` API methods
```js
import { store } from 'react-notification-component';
```

Then call `addNotification` and watch the magic happens

```jsx
store.addNotification({
  title: "Exception: 500!",
  message: "abdulwhhabhan@react-notification-component",
  type: "success",
});
```
