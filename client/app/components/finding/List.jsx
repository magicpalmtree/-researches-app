import React from 'react';
import axios from 'axios';
import {apiPrefix} from '../../App.jsx'

// import FindingCreate from './FindingCreate.js';
// import FindingEdit from './FindingEdit.js';

import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

const panelStyle = {
    marginLeft: '10px',
    marginRight: '10px'
};

const itemStyle = {
    margin: '10px 0'
};



const headers = [
    "Lokalita", "Kraj", "Okres", "Katastr", "Nadmořská výška",
    "Zkoumaná plocha", "Archeolog", "Rok výzkumu", "Instituce", "Koordináty XYZ",
    "Mapa", "Sonda", "Sektor", "Objekt", "Typ objektu",
    "Vrstva", "Hloubka(od do)", "Datace-archeologické období", "Datace-archeologická kultura",
    "Typ naleziště", "Reference", "Typ odběru", "Inventarizační číslo", "Poznámka"
];

export default class List extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            findings: [],
            showEditModal: false,
            showCreateModal: false
        }
    }

    render() {
        return(
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                flexWrap: 'wrap'
            }}>
                <Panel style={panelStyle} header="Panel heading">
                    Archeobotanika
                    <ListGroup fill>
                        {
                            headers.map((header) => {
                                return <ListGroupItem key={header}>{header}</ListGroupItem>
                            })
                        }

                    </ListGroup>
                </Panel>

                <Panel style={panelStyle} header="Panel heading">
                    Archeobotanika
                    <ListGroup fill>
                        {
                            headers.map((header) => {
                                return <ListGroupItem key={header}>{header}</ListGroupItem>
                            })
                        }
                    </ListGroup>
                </Panel>

                <Panel style={panelStyle} header="Panel heading">
                    Archeozoologie
                    <ListGroup fill>
                        {
                            headers.map((header) => {
                                return <ListGroupItem key={header}>{header}</ListGroupItem>
                            })
                        }
                    </ListGroup>
                </Panel>
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

    openCreateModal() {
        this.setState({ showCreateModal: true });
    }

    closeCreateModal() {
        this.setState({ showCreateModal: false });
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


