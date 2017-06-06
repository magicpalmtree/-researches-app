import React from 'react';
import axios from 'axios';
import {apiPrefix} from '../../App.jsx'

import Filter from './Filter.jsx';
import Item from './Item.jsx';

import $ from 'jquery';

import ReactPaginate from 'react-paginate';

const PER_PAGE = 5;

export default class List extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            showFilter: false,
            findings: [],
            offset: 0
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.toggleClick = this.toggleClick.bind(this);
        this.deleteFinding = this.deleteFinding.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
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
        $.ajax({
            url      : apiPrefix,
            data     : {limit: PER_PAGE, offset: this.state.offset},
            dataType : 'json',
            type     : 'GET',

            success: data => {
                this.setState({findings: data.findings, pageCount: Math.ceil(data.meta.total_count / data.meta.limit)});
            },

            error: (xhr, status, err) => {
                console.error(apiPrefix, status, err.toString());
            }
        });
    }

    handlePageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * PER_PAGE);

        this.setState({offset: offset}, () => {
            this.refreshList();
        });
    };

    render() {
        if( this.state.findings === undefined ) {
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
                            this.state.findings.map((item) => {
                                return <Item onDelete={this.deleteFinding} key={item._id} item={item} />
                            })
                        }
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <ReactPaginate previousLabel={"previous"}
                                       nextLabel={"next"}
                                       breakLabel={<a href="">...</a>}
                                       breakClassName={"break-me"}
                                       pageCount={this.state.pageCount}
                                       marginPagesDisplayed={2}
                                       pageRangeDisplayed={5}
                                       onPageChange={this.handlePageClick}
                                       containerClassName={"pagination"}
                                       subContainerClassName={"pages pagination"}
                                       activeClassName={"active"} />
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
        });

    }

}


