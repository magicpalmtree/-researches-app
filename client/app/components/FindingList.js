const React = require('react');
//const Table = require('react-bootstrap').Table;
const Button = require('react-bootstrap').Button;
const Modal = require('react-bootstrap').Modal;
const axios = require('axios');
const apiPrefix = 'http://localhost:8099/api/findings/';
const FontAwesome = require('react-fontawesome');

const Table = require('reactable').Table;
const Tr = require('reactable').Tr;
const Td = require('reactable').Td;

const _ = require('underscore');

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
                    <h1 className="list-title">Findings
                        <Button onClick={this.openCreateModal} className="btn__add" bsStyle="primary" bsSize="small">
                            <FontAwesome name="plus" />
                        </Button>
                    </h1>
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

                <Table className="table"
                    // Exclude fields '_id' and '__v' from table list
                       data={_.map(this.state.findings, function (row) { return _.omit(row, ['_id', '__v']);})}
                       itemsPerPage={20}
                       pageButtonLimit={10}
                       sortable={true}>
                </Table>
            </div>
        );
    }
});


