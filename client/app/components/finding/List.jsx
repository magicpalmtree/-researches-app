import React from 'react';
import axios from 'axios';
import {apiPrefix} from '../../App.jsx'

// import FindingCreate from './FindingCreate.js';
// import FindingEdit from './FindingEdit.js';

import Filter from './Filter.jsx';

import {Tabs, Tab, Panel, ListGroup, ListGroupItem, Pagination, Button, Collapse} from 'react-bootstrap';

const panelStyle = {
    marginRight: '10px'
};

const headersStatic = [
    "Lokalita", "Kraj", "Okres", "Katastr", "Nadmořská výška",
    "Zkoumaná plocha", "Archeolog", "Rok výzkumu", "Instituce", "Koordináty XYZ",
    "Mapa", "Sonda", "Sektor", "Objekt", "Typ objektu",
    "Vrstva", "Hloubka(od do)", "Datace-archeologické období", "Datace-archeologická kultura",
    "Typ naleziště", "Reference", "Typ odběru", "Inventarizační číslo", "Poznámka"
];

const headersDynamBot = [
    "Vzorek Botanický druh", "NISP (počet určených nálezů)", "Botanik",
    "Rok určení", "Reference (archeobot.)","Stav zachování", "Poznámka","Objem"
];

const headersDynamZoo = [
    "Číslo",
    "Zoologický druh",
    "NISP (počet určených nálezů)",
    "Archeozoolog",
    "Rok určení",
    "Reference (archeozoo.)"
];

export default class List extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            findings: [],
            showEditModal: false,
            showFilter: false,
            activePage: 1
        }
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
    };

    render() {
        return(
            <div style={{padding: '20px'}}>

                <Filter open={this.state.showFilter} toggleOpenHandler={this.toggleClick.bind(this)}/>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap'
                }}>

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
                                        headersStatic.map((header) => {
                                            return <ListGroupItem className="list-item" key={header}>{header}</ListGroupItem>
                                        })
                                    }

                                </ListGroup>
                            </Tab>
                            <Tab eventKey={2} title="Dynamic">
                                <ListGroup fill>
                                    {
                                        headersDynamBot.map((header) => {
                                            return <ListGroupItem className="list-item"
                                                                  key={header}>{header}</ListGroupItem>
                                        })
                                    }
                                </ListGroup>
                            </Tab>
                        </Tabs>

                    </Panel>
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
                                        headersStatic.map((header) => {
                                            return <ListGroupItem className="list-item" key={header}>{header}</ListGroupItem>
                                        })
                                    }

                                </ListGroup>
                            </Tab>
                            <Tab eventKey={2} title="Dynamic">
                                <ListGroup fill>
                                    {
                                        headersDynamBot.map((header) => {
                                            return <ListGroupItem className="list-item"
                                                                  key={header}>{header}</ListGroupItem>
                                        })
                                    }
                                </ListGroup>
                            </Tab>
                        </Tabs>

                    </Panel>
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
                                        headersStatic.map((header) => {
                                            return <ListGroupItem className="list-item" key={header}>{header}</ListGroupItem>
                                        })
                                    }

                                </ListGroup>
                            </Tab>
                            <Tab eventKey={2} title="Dynamic">
                                <ListGroup fill>
                                    {
                                        headersDynamZoo.map((header) => {
                                            return <ListGroupItem className="list-item"
                                                                  key={header}>{header}</ListGroupItem>
                                        })
                                    }
                                </ListGroup>
                            </Tab>
                        </Tabs>
                    </Panel>
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
                                        headersStatic.map((header) => {
                                            return <ListGroupItem className="list-item" key={header}>{header}</ListGroupItem>
                                        })
                                    }

                                </ListGroup>
                            </Tab>
                            <Tab eventKey={2} title="Dynamic">
                                <ListGroup fill>
                                    {
                                        headersDynamZoo.map((header) => {
                                            return <ListGroupItem className="list-item"
                                                                  key={header}>{header}</ListGroupItem>
                                        })
                                    }
                                </ListGroup>
                            </Tab>
                        </Tabs>
                    </Panel>
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
                                        headersStatic.map((header) => {
                                            return <ListGroupItem className="list-item" key={header}>{header}</ListGroupItem>
                                        })
                                    }

                                </ListGroup>
                            </Tab>
                            <Tab eventKey={2} title="Dynamic">
                                <ListGroup fill>
                                    {
                                        headersDynamBot.map((header) => {
                                            return <ListGroupItem className="list-item"
                                                                  key={header}>{header}</ListGroupItem>
                                        })
                                    }
                                </ListGroup>
                            </Tab>
                        </Tabs>

                    </Panel>

                </div>

                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={20}
                    maxButtons={5}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect.bind(this)} />
            </div>

        );
    }

    componentDidMount() {
        this.refreshList();
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }


    openEditModal(id) {
        this.setState({
            showEditModal: {
                [id]: true
            }
        });
    }

    closeEditModal() {
        this.setState({ showEditModal: false });
    }

    refreshList() {
        let _this = this;
        this.serverRequest =
            axios
                .get(apiPrefix)
                .then(function(result) {
                    _this.setState({
                        findings: result.data
                    });
                })
    }

    deleteFinding(id) {
        axios.delete(apiPrefix + id).then(() => {
            this.refreshList();
        });

    }

}


