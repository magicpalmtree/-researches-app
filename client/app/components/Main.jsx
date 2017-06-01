import React from 'react';

import List from './finding/List.jsx';
import Create from './finding/Create.jsx';

import {Navbar, Nav, NavItem, Modal, Button} from 'react-bootstrap';

export default class Main extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showModal: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({showModal: true});
    }

    closeModal() {
        this.setState({showModal: false});
    }

    render() {
        return(
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Researches app</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem onClick={this.openModal}>Create</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a new finding</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Create onFindingCreated={this.closeModal}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <List />
            </div>
        );
    }
}