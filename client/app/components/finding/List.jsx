import React from 'react';
import api from '../../../services/api';
import Item from './Item.jsx';
import Emitter from '../../../helpers/emitters.js';
import ReactPaginate from 'react-paginate';
import {apiPrefix} from '../../App.jsx'
import $ from 'jquery';
import staticKeys from '../../../helpers/static';
import {FormControl, FormGroup, Col, ControlLabel} from 'react-bootstrap';
import Spinner from 'react-spinkit';
import './List.css';

import {ToastContainer, ToastMessage} from 'react-toastr';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

const PER_PAGE = 5;

export default class List extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            showFilter: false,
            filterBy: '',
            filteredList: [],
            findings: [],
            offset: 0
        };

        this.toggleFilter = this.toggleFilter.bind(this);
        this.deleteFinding = this.deleteFinding.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.onPageClick = this.onPageClick.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    toggleFilter() {
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
                this.setState({
                    findings: data.findings,
                    filteredList: data.findings,
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

    onFilterChange(e) {
        if (!e.target.value) {
            this.setState({
                filteredList: this.state.findings,
            });
        }
        let filterVal = e.target.value.toString();
        if (this.state.filterBy) {
            let list = this.state.findings.filter(item => item[this.state.filterBy].includes(filterVal));
            this.setState({
                filteredList: list,
            });
        }
    };

    onSelectChange(e) {
        this.setState({
            filterBy: e.target.value
        });
    };

    render() {
        if (!this.state.filteredList) {
            return <Spinner name="line-scale-pulse-out" className="spinner"></Spinner>
        } else {
            return(
                <div>
                    <ToastContainer
                        toastMessageFactory={ToastMessageFactory}
                        ref="container"
                        className="toast-top-right"
                    />
                    <div className="list-inner">

                        <FormGroup>
                            <Col sm={2}>
                                <FormControl componentClass="select" onChange={this.onSelectChange} placeholder="Select">
                                    <option></option>
                                    {staticKeys.map((key, i) => (
                                        <option value={key.name} key={i}>{key.label}</option>
                                    ))}
                                </FormControl>
                            </Col>
                            <Col sm={4}>
                                <FormControl onChange={this.onFilterChange} />
                            </Col>
                        </FormGroup>

                        <div className="list-wrapper">
                            {
                                this.state.filteredList.map((item) => {
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


    async deleteFinding(id) {
        await api.deleteFinding(id);
        this.refreshList();
    }

}


