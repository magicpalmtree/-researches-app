const React = require('react');
const axios = require('axios');
const apiPrefix = 'http://localhost:8099/api/findings/';

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
            <div></div>
        );
    }
});


