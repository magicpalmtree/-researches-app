import React from 'react';

import {Tabs, Tab, Panel, ListGroup, ListGroupItem, Pagination} from 'react-bootstrap';

const panelStyle = {
    marginRight: '10px'
};

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel style={panelStyle} header={
                <div>
                    <span>Archeobotanika</span>
                    <span style={{marginLeft: '70px'}}>
                            <i style={{marginRight: '10px'}} className="fa fa-pencil"/>
                            <i className="fa fa-trash"/>
                        </span>
                </div>
            }>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Static">
                        <ListGroup fill>
                            {
                                this.props.dataStatic.map((header) => {
                                    return <ListGroupItem className="list-item" key={header}>{header}</ListGroupItem>
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
