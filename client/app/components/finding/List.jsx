import React from 'react';
import api from '../../../api/index';
import Item from './Item.jsx';
import Emitter from '../../../helpers/emitters.js';
import ReactPaginate from 'react-paginate';
import Filter from './Filter.jsx';
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
            findings: [],
            offset: 0
        };

        this.toggleFilter = this.toggleFilter.bind(this);
        this.deleteFinding = this.deleteFinding.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.onPageClick = this.onPageClick.bind(this);
    }

    toggleFilter() {
        this.setState({
            showFilter: !this.state.showFilter
        })
    }

    async refreshList() {
        try {
            let result = await api.getFindings({limit: PER_PAGE, offset: this.state.offset});
            this.setState({
                findings: result.data.findings,
                pageCount: Math.ceil(result.data.meta.total_count / result.data.meta.limit)
            });
        } catch(e) {
            this.refs.container.error(e.toString(), '', { closeButton: true });
        }
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
                <div>
                    <ToastContainer
                        toastMessageFactory={ToastMessageFactory}
                        ref="container"
                        className="toast-top-right"
                    />
                    <div className="list-inner">
                        <Filter isOpen={this.state.showFilter} toggleOpen={this.toggleFilter} />
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


