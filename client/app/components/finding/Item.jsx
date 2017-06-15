import React from 'react';
import axios from 'axios';

import {Tabs, Tab, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

import './Item.css'
import {apiPrefix} from '../../App.jsx'


const panelStyle = {
    marginRight: '10px'
};

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            item: this.props.item
        };

        this.toggleEdit = this.toggleEdit.bind(this);
        this.onItemSave = this.onItemSave.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputDynamChange = this.onInputDynamChange.bind(this);
    }

    toggleEdit() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    onItemSave() {
        this.toggleEdit();

        axios.put(apiPrefix + this.state.item._id, this.state.item)
            .then(() => {});
    }

    removeItem(id) {
        this.props.onDelete(id);
    }

    onInputChange(e) {
        this.state.item[e.target.name] = e.target.value;

        this.setState({
            item: this.state.item
        })
    }

    onInputDynamChange(e) {
        this.state.item.dynam[e.target.name] = e.target.value;

        this.setState({
            item: this.state.item
        })
    }

    render() {
        return (
            <Panel style={panelStyle} header={
                <div className="header-container">
                    <span>{this.state.item.type === 'AB' ? 'Archeobotanika' : this.state.item.type === 'AZ' ? 'Archeozoologie' : 'Typ'}</span>
                    <span className="icon-container">
                        {
                            this.state.editMode ? <span className={'fui-check'} onClick={() => this.onItemSave()}/> :
                                <span className='fui-new' onClick={() => this.toggleEdit()}/>

                        }
                        <span className="fui-trash" onClick={() => this.removeItem(this.props.item._id)} />
                        </span>
                </div>
            }>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab">
                    <Tab eventKey={1} title="Static">
                        <ListGroup fill>
                            {
                                Object.keys(this.state.item).map((key) => {
                                    if(key !== '_id' && key !== '__v' && key !== 'dynam' && key !== 'type') {
                                        return <ListGroupItem className="list-item" key={key}>
                                            <span className="label-bold"> {key} </span> : {this.state.editMode ?
                                            <input className="form-control" onChange={this.onInputChange} name={key} type="text"
                                                   value={this.state.item[key]}/> : this.state.item[key]}
                                        </ListGroupItem>
                                    }
                                })

                            }

                        </ListGroup>
                    </Tab>
                    <Tab eventKey={2} title="Dynamic">
                        <ListGroup fill>
                            {
                                Object.keys(this.state.item.dynam).map((key) => {

                                    return <ListGroupItem className="list-item" key={key}>
                                        <span className="label-bold"> {key} </span> : {this.state.editMode ?
                                        <input className="form-control" onChange={this.onInputDynamChange} name={key} type="text"
                                               value={this.state.item.dynam[key]}/> : this.state.item.dynam[key]}
                                    </ListGroupItem>
                                })
                            }
                        </ListGroup>
                    </Tab>
                </Tabs>
            </Panel>
        )
    }
}
