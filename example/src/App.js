import React from 'react'
import {Navbar, Container} from  'react-bootstrap'

import Notification from "react-notification-modal";
import { store as Notify } from "react-notification-modal";
import 'react-notification-modal/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'

const Login = () => {

  return(
    <div>
      <p>Login component</p>
      <div>
        <button className={'btn btn-primary btn-sm'} onClick={()=> Notify.removeNotification()}> Login</button>
      </div>

    </div>
  )
}


const App = () => {

  function showException(){
    Notify.addNotification({
      status: 500,
      type: 'exception',
      message: "This is testing",
      exception: [
        "This is testing for exception",
        "This is testing for exception",
        "This is testing for exception",
      ],
      size: 'xl'
    });
  }

  function showSuccess(){
    Notify.addNotification({
      status: 200,
      type: 'success',
      message: "Success!",
      info: <div className={'alert alert-success'}>This is the success message</div>
    });
  }

  function showLogin(){
    Notify.addNotification({
      status: 401,
      message: "Please Login",
      info: <Login />
    });
  }



  return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            React Bootstrap Notification Modal
          </Navbar.Brand>
        </Navbar>
        <Notification/>
        <Container>
          <div className={'text-center'}>
            <p>&nbsp;</p>
            <button name={'exception'} className={'btn btn-warning btn-sm'} onClick={showException}>Show Exception</button>{' '}
            &nbsp;&nbsp;
            <button name={'exception'} className={'btn btn-success btn-sm'} onClick={showSuccess}>Show Success</button>{' '}
            &nbsp;&nbsp;
            <button name={'exception'} className={'btn btn-info btn-sm'} onClick={showLogin}>Show Login</button>{' '}
          </div>

        </Container>

      </div>

    )
}

export default App
