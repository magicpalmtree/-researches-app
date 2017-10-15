import React from 'react';
import axios from 'axios';
import {apiPrefix} from '../../App.jsx'
import Item from './Item.jsx';
import Emitter from '../../../helpers/emitters.js'
import $ from 'jquery';
import ReactPaginate from 'react-paginate';
import Spinner from 'react-spinkit'
import './Item.css'

const PER_PAGE = 5;

export default class List extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            showFilter: false,
            findings: [],
            offset: 0
        };

        // TODO: Implement filter panel
        // this.toggleFilter = this.toggleFilter.bind(this);
        this.deleteFinding = this.deleteFinding.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.onPageClick = this.onPageClick.bind(this);
    }

    // toggleFilter() {
    //     this.setState({
    //         showFilter: !this.state.showFilter
    //     })
    // }

    refreshList() {
        $.ajax({
            url      : apiPrefix,
            data     : {limit: PER_PAGE, offset: this.state.offset},
            dataType : 'json',
            type     : 'GET',

            success: data => {
                this.setState({
                    findings: data.findings,
                    pageCount: Math.ceil(data.meta.total_count / data.meta.limit)
                });
            },

            error: (xhr, status, err) => {
                console.error(apiPrefix, status, err.toString());
            }
        });
    }

    onPageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * PER_PAGE);

        this.setState({offset: offset}, () => {
            this.refreshList();
        });
    };

    render() {
        if (!this.state.findings) {
            return <Spinner name="line-scale-pulse-out" className="spinner"></Spinner>
        } else {
            return(
                <div className="list-inner">
                    <div className="list-wrapper">
                        {
                            this.state.findings.map((item) => {
                                return <Item delete={this.deleteFinding} key={item._id} item={item} />
                            })
                        }
                    </div>
                    <div className="paginate-wrapper">
                        <ReactPaginate previousLabel={"previous"}
                                       nextLabel={"next"}
                                       breakLabel={<a href="">...</a>}
                                       breakClassName={"break-me"}
                                       pageCount={this.state.pageCount}
                                       marginPagesDisplayed={2}
                                       pageRangeDisplayed={5}
                                       onPageChange={this.onPageClick}
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

        Emitter.addListener('onListRefresh', () => {
            this.refreshList();
        });
    }


    deleteFinding(id) {
        axios.delete(apiPrefix + id)
            .then(() => {
                this.refreshList();
            });

    }

}


