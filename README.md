# react-notification-modal


[![NPM](https://img.shields.io/npm/v/react-notification-modal.svg)](https://www.npmjs.com/package/react-notification-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A delightful, easy to use and highly configurable component to help you notify your users out of the box. Specially for the server side exceptions, messages and Login Modal.

## Install

```bash
npm install --save react-notification-modal
```

## Usage

```jsx
import React, { Component } from 'react'

import Notifiction from 'react-notification-modal'
import 'react-notification-modal/dist/index.css'

class Example extends Component {
  render() {
    return <Notifiction />
  }
}
```

##### SASS
<code>SASS</code> files are located in `react-notifications-modal/dist`

Render <code>react-notification-modal</code> at the top of your application so that it does not conflict with other absolutely positioned DOM elements.
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
import { store } from 'react-notification-modal';
```

Then call `addNotification` and watch the magic happens

```jsx
store.addNotification({
  title: "Exception!",
  status: 500,
  exception: "abdulwhhabkhan@react-notification-modal",
  //info: <Login />
  type: "success",
});
```

#axios

Add axios.interceptors to globally handle errors.

```jsx
import { store } from 'react-notification-modal';

axios.interceptors.response.use(response => {
    return response;
}, err => {
    return new Promise((resolve, reject) => {
        const ignoreCodes = [422]
        if(err && err.response && err.response.status > 400 && ignoreCodes.indexOf(err.response.status) === -1){
            const response = err.response
            exception.addException({
                status: response.status,
                message: response.statusText,
                info: JSON.stringify(response.data, null, 2),
            })
        }

        throw err

    });
});

```


## License

MIT © [abdulwahhabkhan](https://github.com/abdulwahhabkhan)
