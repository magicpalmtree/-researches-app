import React from 'react';
import List from './finding/List.jsx';
import Create from './finding/Create.jsx';
import Build from './finding/Build.jsx';
import {Modal, Button} from 'react-bootstrap';


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
                <div  className="container-fluid">

                    <div>
                        <h2>Findings</h2>

                        <Button onClick={this.openCreateModal}>Create</Button>
                        <Button onClick={this.openBuildModal}>Build</Button>
                    </div>

                    <Modal show={this.state.showCreateModal} onHide={this.closeCreateModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create a new finding</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Create refreshList={this.loadFindings} onFindingCreate={this.closeCreateModal}/>
                        </Modal.Body>
                    </Modal>

                    <Modal bsSize="large" show={this.state.showBuildModal} onHide={this.closeBuildModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Build a new schema</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Build />
                        </Modal.Body>
                    </Modal>

                    <List />
                </div>
            );
    }
}