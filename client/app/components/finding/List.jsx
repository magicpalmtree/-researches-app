import React from 'react';
import api from '../../../services/api';
import Item from './Item.jsx';
import Emitter from '../../../helpers/emitters.js';
import Pagination from '../Pagination.jsx'
import staticKeys from '../../../helpers/static';
import {FormControl, FormGroup, Col, ControlLabel} from 'react-bootstrap';
import Spinner from 'react-spinkit';
import './List.css';

import {ToastContainer, ToastMessage} from 'react-toastr';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);


export default class List extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            showFilter: false,
            filterBy: '',
            filteredList: [],
            findings: [],
            pageOfItems: []
        };

        this.toggleFilter = this.toggleFilter.bind(this);
        this.deleteFinding = this.deleteFinding.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    toggleFilter() {
        this.setState({
            showFilter: !this.state.showFilter
        })
    }

    async refreshList() {
        let result = await api.getFindings();

        this.setState({
            findings: result.data,
            filteredList: result.data,
        })
    }

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

    onPageChange(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
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
                                this.state.pageOfItems.map((item) => {
                                    return <Item delete={this.deleteFinding} key={item._id} item={item} />
                                })
                            }
                        </div>
                        <div className="paginate-wrapper">
                            <Pagination items={this.state.filteredList} onPageChange={this.onPageChange} pageSize={5} />
                        </div>

                    </div>
                </div>
            );
        }
    }

    async componentWillMount() {
        await this.refreshList();

        Emitter.addListener('onListRefresh', async () => {
            await this.refreshList();
        });
    }


    async deleteFinding(id) {
        await api.deleteFinding(id);
        await this.refreshList();
    }

}


