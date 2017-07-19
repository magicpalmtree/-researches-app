import React from 'react';

import List from './finding/List.jsx';
import Create from './finding/Create.jsx';
import Build from './finding/Build.jsx';

// import FormBuilder from 'react-forms-builder';

import {Navbar, Nav, NavItem, Modal, Button} from 'react-bootstrap';


export default class Main extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showCreateModal: false,
            showBuildModal: false,
            offset: 0,
            data: {}
        };

        this.openCreateModal = this.openCreateModal.bind(this);
        this.closeCreateModal = this.closeCreateModal.bind(this);

        this.openBuildModal = this.openBuildModal.bind(this);
        this.closeBuildModal = this.closeBuildModal.bind(this);
    }

    openCreateModal() {
        this.setState({showCreateModal: true});
    }

    closeCreateModal() {
        this.setState({showCreateModal: false});
    }

    openBuildModal() {
        this.setState({showBuildModal: true});
    }

    closeBuildModal() {
        this.setState({showBuildModal: false});
    }

    render() {
            return (
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
                                <NavItem onClick={this.openCreateModal}>Create</NavItem>
                            </Nav>
                            <Nav pullRight>
                                <NavItem onClick={this.openBuildModal}>Build</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>



                    <Modal show={this.state.showCreateModal} onHide={this.closeCreateModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create a new finding</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Create refreshList={this.loadFindings} onFindingCreated={this.closeCreateModal}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.closeCreateModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal bsSize="large" show={this.state.showBuildModal} onHide={this.closeBuildModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Build a new schema</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Build onSchemaCreated={this.closeBuildModal}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.closeBuildModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                    <List />
                </div>
            );
    }
}