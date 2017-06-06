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
            showFilter: false,
            pageOfItems: []
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.toggleClick = this.toggleClick.bind(this);
        this.deleteFinding = this.deleteFinding.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
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
    }

    refreshList() {
        this.props.refreshList();
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        if( this.props.findings[0] === undefined ) {
            return <div>Loading...</div>
        } else {
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
                            this.state.pageOfItems.map((item) => {
                                return <Item onDelete={this.deleteFinding} key={item._id} item={item} />
                            })
                        }
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <Pagination items={this.props.findings} onChangePage={this.onChangePage}/>
                    </div>

                </div>

            );
        }
    }

    componentWillMount() {
        this.refreshList();
    }


    deleteFinding(id) {
        axios.delete(apiPrefix + id).then(() => {
            this.refreshList();
            let index = this.state.pageOfItems.map(function(x){ return x._id; }).indexOf(id);
            this.state.pageOfItems.splice(index, 1);
        });

    }

}


