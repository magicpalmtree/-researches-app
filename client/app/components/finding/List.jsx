import React from 'react';
import axios from 'axios';
import {apiPrefix} from '../../App.jsx'

import Filter from './Filter.jsx';
import Item from './Item.jsx';

import {Pagination} from 'react-bootstrap';

// DUMMY DATA
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
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.toggleClick = this.toggleClick.bind(this);
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

                <Filter open={this.state.showFilter} toggleOpenHandler={this.toggleClick}/>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap'
                }}>

                    <Item dataStatic={headersStatic} dataDynamic={headersDynamBot} />
                    <Item dataStatic={headersStatic} dataDynamic={headersDynamZoo} />
                    <Item dataStatic={headersStatic} dataDynamic={headersDynamBot} />
                    <Item dataStatic={headersStatic} dataDynamic={headersDynamZoo} />
                    <Item dataStatic={headersStatic} dataDynamic={headersDynamBot} />
                    <Item dataStatic={headersStatic} dataDynamic={headersDynamZoo} />

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
                    onSelect={this.handleSelect} />
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


