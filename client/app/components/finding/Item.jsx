import React from 'react';

import {Tabs, Tab, Panel, ListGroup, ListGroupItem, Pagination} from 'react-bootstrap';

const panelStyle = {
    marginRight: '10px'
};

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(id) {
        this.props.onDelete(id);
    }

    render() {
        return (
            <Panel style={panelStyle} header={
                <div style={{position: 'relative'}}>
                    <span>Archeobotanika</span>
                    <span style={{position: 'absolute', right: '0'}}>
                            <i style={{marginRight: '15px'}} className="fa fa-pencil"/>
                            <i style={{cursor: 'pointer'}} className="fa fa-trash" onClick={() => this.removeItem(this.props.item._id)} />
                        </span>
                </div>
            }>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Static">
                        <ListGroup fill>
                            {
                                Object.keys(this.props.item).map((key) => {
                                    if(key !== '_id' && key !== '__v') {
                                        return <ListGroupItem className="list-item" key={key}>
                                            <span style={{fontWeight: '700'}}> {key} </span> : {this.props.item[key]}
                                        </ListGroupItem>
                                    }
                                })

                            }

                        </ListGroup>
                    </Tab>
                    <Tab eventKey={2} title="Dynamic">
                        <ListGroup fill>
                            {
                                this.props.dataDynamic.map((header) => {
                                    return <ListGroupItem className="list-item"
                                                          key={header}>{header}</ListGroupItem>
                                })
                            }
                        </ListGroup>
                    </Tab>
                </Tabs>
            </Panel>
        )
    }
}
