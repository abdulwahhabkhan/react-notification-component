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
        if(notification){
            return(
                <Modal size={'xl'} show={this.state.show} centered onHide={this.remove} className={'notification'} backdrop={'static'} >
                    <div className="status-line"></div>
                    <Modal.Header closeButton>
                        <Modal.Title>{notification.status}: {notification.message}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <pre>
                            {notification.info}
                        </pre>
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