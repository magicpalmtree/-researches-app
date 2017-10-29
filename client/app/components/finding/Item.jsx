import React from 'react';
import api from '../../../services/api'
import Confirm from 'react-confirm-bootstrap';
import {Tabs, Tab, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import './Item.css'
import {Link} from "react-router-dom";

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: this.props.item
        };

        this.removeItem = this.removeItem.bind(this);
    }


    removeItem(id) {
        this.props.delete(id);
    }


    render() {
        return (
        <div>
            <Panel className="item-panel" header={
                <div className="header-container">
                    <Link to={'/finding/' + this.state.item._id}>
                        <span>{this.state.item.type === 'AB' ? 'Archeobotanika' : this.state.item.type === 'AZ' ? 'Archeozoologie' : 'Typ'}</span>
                    </Link>
                    <span className="icon-container">
                        <Link to={{
                            pathname: '/findings/create',
                            state: { item: this.state.item }
                        }}>
                            <span className="glyphicon glyphicon-plus" />
                        </Link>
                        <Confirm
                            onConfirm={() => this.removeItem(this.props.item._id)}
                            body="Are you sure you want to delete this?"
                            confirmText="Confirm"
                            title="Deleting item">
                            <span className="glyphicon glyphicon-trash"> </span>
						</Confirm>
                </span>
                </div>
            }>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab">
                    <Tab eventKey={1} title="Static">
                        <ListGroup fill>
                            {
                                Object.keys(this.state.item).map((key) => {
                                    if (key !== '_id' && key !== '__v' && key !== 'dynam' && key !== 'type') {
                                        return  <ListGroupItem className="list-item" key={key}>
                                                  <span className="label-bold"> {key} </span> : {this.state.item[key]}
                                                </ListGroupItem>
                                    }
                                })

                            }

                        </ListGroup>
                    </Tab>
                    {this.state.item.dynam ?
                        <Tab eventKey={2} title="Dynamic">
                            <ListGroup fill>
                                {
                                    Object.keys(this.state.item.dynam).map((key) => {
                                        return <ListGroupItem className="list-item" key={key}>
                                            <span className="label-bold"> {key} </span> : {this.state.item.dynam[key]}
                                        </ListGroupItem>
                                    })
                                }
                            </ListGroup>
                        </Tab> :
                        <div></div>
                    }
                </Tabs>
            </Panel>
        </div>
        )
    }
}
