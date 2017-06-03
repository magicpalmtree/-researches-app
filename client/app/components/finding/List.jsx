import React from 'react';
import axios from 'axios';
import {apiPrefix} from '../../App.jsx'

import Filter from './Filter.jsx';
import Item from './Item.jsx';

import Pagination from "./Pagination.jsx";


export default class List extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            showEditModal: false,
            showFilter: false,
            activePage: 1
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.toggleClick = this.toggleClick.bind(this);
        this.deleteFinding = this.deleteFinding.bind(this);
        this.refreshList = this.refreshList.bind(this);
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

    refreshList() {
        this.props.refreshList();
    }

    render() {
        return(
            <div style={{padding: '20px'}}>

                {/*<Filter open={this.state.showFilter} toggleOpenHandler={this.toggleClick}/>*/}

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap'
                }}>
                    {
                        this.props.findings.map((item) => {
                            return <Item onDelete={this.deleteFinding} key={item._id} item={item} />
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



    deleteFinding(id) {
        axios.delete(apiPrefix + id).then(() => {
            this.refreshList();
        });

    }

}


