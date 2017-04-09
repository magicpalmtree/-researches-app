const React = require('react');
const Table = require('react-bootstrap').Table;
const Button = require('react-bootstrap').Button;
const Modal = require('react-bootstrap').Modal;
const axios = require('axios');
const apiPrefix = 'http://localhost:8099/api/findings/';
const FontAwesome = require('react-fontawesome');

const FindingCreate = require('./FindingCreate.js');
const FindingEdit = require('./FindingEdit.js');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            findings: [],
            showEditModal: false,
            showCreateModal: false
        }
    },

    openEditModal(id) {
        this.setState({
            showEditModal: {
                [id]: true
            }
        });
    },

    closeEditModal() {
        this.setState({ showEditModal: false });
    },

    openCreateModal() {
        this.setState({ showCreateModal: true });
    },

    closeCreateModal() {
        this.setState({ showCreateModal: false });
    },

    refreshList() {
        let _this = this;
        this.serverRequest =
            axios
                .get(apiPrefix)
                .then(function(result) {
                    _this.setState({
                        findings: result.data
                    });
					console.log(_this.state.findings);
                })
    },

    deleteFinding(id) {
        axios.delete(apiPrefix + id).then(() => {
            this.refreshList();
        });

    },

    componentDidMount: function() {
        this.refreshList();
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function(){
        return(
            <div>
                <div className="list-title-container">
                    <h1 className="list-title">Findings</h1>
                    <Button onClick={this.openCreateModal} bsStyle="primary" bsSize="small">
                        <FontAwesome name="plus" />
                    </Button>
                </div>

                <Modal show={this.state.showCreateModal} onHide={this.closeCreateModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new finding</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FindingCreate />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeCreateModal}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Vyzkum</th>
                        <th>Objekt</th>
                        <th>Vzorek</th>
                        <th>PCODE</th>
                        <th>frakce</th>
                        <th>makrozbTyp</th>
                        <th>rPocet</th>
                        <th>odhad</th>
                        <th>nasobitel</th>
                        <th>FPocet</th>
                        <th>datVloz</th>
                        <th>poznFrakce</th>
                        <th>Taxon</th>
                        <th width="103px"></th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.findings.map((finding) => {

                        return (
                            <tr key={finding._id}>
                                <td>{finding.Vyzkum}</td>
                                <td>{finding.Objekt}</td>
                                <td>{finding.Vzorek}</td>
                                <td>{finding.PCODE}</td>
                                <td>{finding.frakce}</td>
                                <td>{finding.makrozbTyp}</td>
                                <td>{finding.rPocet}</td>
                                <td>{finding.odhad}</td>
                                <td>{finding.nasobitel}</td>
                                <td>{finding.FPocet}</td>
                                <td>{finding.datVloz}</td>
                                <td>{finding.poznFrakce}</td>
                                <td>{finding.Taxon}</td>
                                <td>
                                    <Button className="btn__action" bsStyle="warning" onClick={this.openEditModal.bind(this, finding._id)}>
                                        <FontAwesome name="pencil" />
                                    </Button>
                                    <Button className="btn__action--last" bsStyle="danger" onClick={this.deleteFinding.bind(this, finding._id)}>
                                        <FontAwesome name="trash" />
                                    </Button>
                                </td>

                                <Modal show={this.state.showEditModal[finding._id]} onHide={this.closeEditModal}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Finding</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <FindingEdit finding={finding} />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={this.closeEditModal}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
});


