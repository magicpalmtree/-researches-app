import React from 'react';
import axios from 'axios';
import {apiPrefix} from '../../App.jsx'

// import FindingCreate from './FindingCreate.js';
// import FindingEdit from './FindingEdit.js';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';


const cardStyle = {
    margin: '10px'
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
                <Card style={cardStyle}>
                    <CardHeader
                        title="Title"
                        subtitle="Archeobotanika"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <Divider/>
                    <CardText>
                        {headers.map((header) => (
                            <div style={itemStyle} className="item" key={header}>
                                <span>{header}</span>
                                <Divider/>
                            </div>
                        ))}

                    </CardText>
                    <CardText expandable={true}>
                    </CardText>
                </Card>
                <Card style={cardStyle}>
                    <CardHeader
                        title="Title"
                        subtitle="Archeozoologie"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <Divider/>
                    <CardText>
                        {headers.map((header) => (
                            <div style={itemStyle} className="item" key={header}>
                                <span>{header}</span>
                                <Divider/>
                            </div>
                        ))}

                    </CardText>
                    <CardText expandable={true}>
                    </CardText>
                </Card>
                <Card style={cardStyle}>
                    <CardHeader
                        title="Title"
                        subtitle="Archeobotanika"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <Divider/>
                    <CardText>
                        {headers.map((header) => (
                            <div style={itemStyle} className="item" key={header}>
                                <span>{header}</span>
                                <Divider/>
                            </div>
                        ))}

                    </CardText>
                    <CardText expandable={true}>
                    </CardText>
                </Card>
                <Card style={cardStyle}>
                    <CardHeader
                        title="Title"
                        subtitle="Archeozoologie"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <Divider/>
                    <CardText>
                        {headers.map((header) => (
                            <div style={itemStyle} className="item" key={header}>
                                <span>{header}</span>
                                <Divider/>
                            </div>
                        ))}

                    </CardText>
                    <CardText expandable={true}>
                    </CardText>
                </Card>
                <Card style={cardStyle}>
                    <CardHeader
                        title="Title"
                        subtitle="Archeobotanika"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <Divider/>
                    <CardText>
                        {headers.map((header) => (
                            <div style={itemStyle} className="item" key={header}>
                                <span>{header}</span>
                                <Divider/>
                            </div>
                        ))}

                    </CardText>
                    <CardText expandable={true}>
                    </CardText>
                </Card>
                <Card style={cardStyle}>
                    <CardHeader
                        title="Title"
                        subtitle="Archeozoologie"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <Divider/>
                    <CardText>
                        {headers.map((header) => (
                            <div style={itemStyle} className="item" key={header}>
                                <span>{header}</span>
                                <Divider/>
                            </div>
                        ))}

                    </CardText>
                    <CardText expandable={true}>
                    </CardText>
                </Card>
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


