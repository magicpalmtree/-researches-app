import React from 'react';
import axios from 'axios';
const apiPrefix = 'http://localhost:8099/api/findings/';

// import FindingCreate from './FindingCreate.js';
// import FindingEdit from './FindingEdit.js';

export default class FindingList extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            findings: [],
            showEditModal: false,
            showCreateModal: false
        }
    }

    render() {
        return(
            <div></div>
        );
    }

    componentDidMount() {
        this.refreshList();
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }


    openEditModal(id) {
        this.setState({
            showEditModal: {
                [id]: true
            }
        });
    }

    closeEditModal() {
        this.setState({ showEditModal: false });
    }

    openCreateModal() {
        this.setState({ showCreateModal: true });
    }

    closeCreateModal() {
        this.setState({ showCreateModal: false });
    }

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
    }

    deleteFinding(id) {
        axios.delete(apiPrefix + id).then(() => {
            this.refreshList();
        });

    }

}


