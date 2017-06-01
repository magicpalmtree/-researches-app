import React from 'react';
import axios from 'axios';
import {apiPrefix} from '../../App.jsx'

import Filter from './Filter.jsx';
import Item from './Item.jsx';

import Pagination from "./Pagination.jsx";

// DUMMY DATA
const headersDynamBot = [
    "Vzorek Botanický druh", "NISP (počet určených nálezů)", "Botanik",
    "Rok určení", "Reference (archeobot.)","Stav zachování", "Poznámka","Objem"
];

export default class List extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            findings: [],
            showEditModal: false,
            showFilter: false,
            activePage: 1
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.toggleClick = this.toggleClick.bind(this);
        this.deleteFinding = this.deleteFinding.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
    }

    toggleClick() {
        this.setState({
            showFilter: !this.state.showFilter
        })
    };

    render() {
        return(
            <div style={{padding: '20px'}}>

                <Filter open={this.state.showFilter} toggleOpenHandler={this.toggleClick}/>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap'
                }}>
                    {
                        this.state.findings.map((item) => {
                            return <Item onDelete={this.deleteFinding} dataDynamic={headersDynamBot} key={item._id} item={item} />
                        })
                    }

                </div>

                <Pagination pageCount={5}/>

            </div>

        );
    }

    componentDidMount() {
        this.refreshList();
    }

    componentWillUnmount() {
        this.serverRequest.abort();
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


