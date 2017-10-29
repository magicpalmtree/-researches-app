import React from 'react';
import {Col, Label, Row} from "react-bootstrap";
import api from '../../services/apiMock';
import {ToastContainer, ToastMessage} from "react-toastr";
import Spinner from 'react-spinkit';
import './MapView.css';
import {withGoogleMap, withScriptjs} from "react-google-maps";
import MapComponent from "./components/MapComponent.jsx";
import Switch from 'react-bootstrap-switch';
import {compose} from "recompose";

// TODO: I belive there must be a better way, I don't know it now, sorry :(

import '../../../node_modules/react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

const WrappedMapComponent = compose(
    withScriptjs,
    withGoogleMap
)(props =>

    <MapComponent
        markers={props.markers}
        markerTypes={props.markerTypes}
        clusteringActive={props.clusteringActive}
     />

);

export default class MapView extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            findings: [],
            findingTypes: {},
            selectedFinding: null,
            findingTypesShown: {},
            filteredFindings: [],
            clusteringActive: true
        };

        this.refreshList = this.refreshList.bind(this);
        this.onFindingTypeChange = this.onFindingTypeChange.bind(this);
        this.filterFindings = this.filterFindings.bind(this);
        this.onClusteringToggle = this.onClusteringToggle.bind(this);
    }

    /**
     * Refresh data and reset filters
     *
     * @returns {Promise.<void>}
     */
    async refreshList() {
        try {

            let typesResult = await api.getFindingTypes();
            let findingsResult = await api.getFindings();

            let findingTypesShown = {};                                 // TODO: is it a good idea to reset the filters?
            Object.keys(typesResult.data).forEach(function(type) {
                findingTypesShown[type] = true;
            });

            this.setState({
                findingTypes: typesResult.data,
                findings: findingsResult.data,
                filteredFindings: findingsResult.data,
                findingTypesShown: findingTypesShown,
            });

        } catch (e) {
            throw e;    // TODO: make toaster work to display erros of the real API
            // this.refs.container.error(e.toString(), '', { closeButton: true });
        }
    }

    /**
     * Filter findings to be displayed base on currently selected filters
     */
    filterFindings(){

        let filteredFindingsTemp =  this.state.findings.filter(item => this.state.findingTypesShown[item.DOC_TYPE]);
        this.setState({
            filteredFindings: filteredFindingsTemp,
        });
    }

    /**
     * Findings type switches handler
     *
     * @param event
     * @param state
     */
    onFindingTypeChange(event, state){

        // toggle type filter state
        let findingTypesShownTemp = this.state.findingTypesShown;
        findingTypesShownTemp[event.props.name] = state;
        this.setState({
            findingTypesShown: findingTypesShownTemp
        });

        // clear currently selected finding if it belongs to the type, that is now beeing filtred-out
        if (this.state.selectedFinding !== null){
            if (this.state.selectedFinding.DOC_TYPE === event.props.name && !state) {
                this.setState({
                    selectedFinding: null
                });
            }
        }

        this.filterFindings();
    }

    /**
     * Map clustering switch handler
     *
     * @param elem
     * @param state
     */
    onClusteringToggle(elem, state) {
        this.setState({ clusteringActive: state });
    }

    /**
     * Render component
     *
     * @returns {XML}
     */
    render() {

        if (!this.state.findings) {
            return <Spinner name="line-scale-pulse-out" className="spinner"/>
        } else {
            return (

                <div>
                    <ToastContainer
                        toastMessageFactory={ToastMessageFactory}
                        ref="container"
                        className="toast-top-right"
                    />

                    <div id="map-toolbox">

                        <div className="container-fluid">

                            <h2 className="h3">Map options</h2>

                            <div>
                            <Row>
                                <Col sm={7}>
                                    Clustering
                                </Col>
                                <Col sm={5} className="text-right">
                                    <Switch value={this.state.clusteringActive}
                                            onChange={(el, state) => this.onClusteringToggle(el, state)}
                                            name='clusteringToggle'
                                            bsSize="mini"
                                    />
                                </Col>
                            </Row>
                            </div>


                            <hr />

                            <h2 className="h3">Findings sets</h2>
                            <div className="map-legend">
                                {
                                    Object.keys(this.state.findingTypes).map((key) => {
                                        return (

                                            <Row key={key}>
                                                <Col sm={7}>
                                                    <img src={this.state.findingTypes[key].mapIcon} className="map-legend-icon"/>
                                                    {this.state.findingTypes[key].name}
                                                </Col>
                                                <Col sm={5} className="text-right">
                                                    <Switch value={this.state.findingTypesShown[key]}
                                                            onChange={(el, state) => this.onFindingTypeChange(el, state)}
                                                            name={key}
                                                            bsSize="mini"
                                                    />
                                                </Col>
                                            </Row>
                                        )
                                    })
                                }
                            </div>

                            <hr />

                            <p className="text-muted text-center"><em>Click a map pin for finding info</em></p>

                        </div>

                    </div>

                    {/* TODO: neprodukcni klic, zmenit !*/}

                    <WrappedMapComponent
                        // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8HRY96IlGOrm49g4htKZpaVUV1OVWjKA&v=3.exp&libraries=geometry,drawing,places"
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"           // works just fine without the key, hmm...
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div id="map-container" />}
                        mapElement={<div id="map" />}
                        markers = {this.state.filteredFindings}
                        markerTypes = {this.state.findingTypes}
                        clusteringActive = {this.state.clusteringActive}
                    />

                </div>
            );
        }
    }


    async componentWillMount() {                // TODO: is this necessary? No data modifications occur at the moment
        await this.refreshList();
    }
}
