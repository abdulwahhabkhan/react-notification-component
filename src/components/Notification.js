import React, {Component, Fragment} from 'react'
import store from "../store";
import {Modal} from "react-bootstrap";

class Notification extends Component {
    state = {
        notification: null,
        show: false
    }
    componentDidMount() {
        store.register({
            addNotification: this.add,
            removeNotification: this.remove,
        });
    }

    add = (notification)=>{
        this.setState({notification:notification, show: true})
    }

    remove = ()=>{
        this.setState({notification:null, show: false})
    }

    renderNotification = ()=>{
        const notification = this.state.notification;
        const exception = notification && notification.exception ? (
          <pre>
              { notification.exception }
          </pre>
        ) : null

        const info = notification && notification.info ? (
          <div>
            { notification.info }
          </div>
        ) : null
        const type = notification && notification.type || 'info'

        if(notification){
            return(
                <Modal size={this.state.notification.size || 'lg'} show={this.state.show} centered onHide={this.remove} className={'notification '+type} backdrop={this.props.backdrop} >
                    <div className="status-line"></div>
                    <Modal.Header closeButton>
                        <Modal.Title>{notification.status}: {notification.message}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {exception}
                      {info}
                    </Modal.Body>
                </Modal>
            )
        }
    }

    render() {
        return(
            <Fragment>
                {this.renderNotification()}
            </Fragment>
        )
    }
}

export default Notification
