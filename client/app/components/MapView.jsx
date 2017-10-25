import React from 'react';
import {Checkbox, Col} from "react-bootstrap";
import api from '../../services/apiMock';
import {ToastContainer, ToastMessage} from "react-toastr";
import Spinner from 'react-spinkit';
import Emitter from '../../helpers/emitters.js';
import './MapView.css';
import Item from "./finding/Item.jsx";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import MapComponent from "../mapView/components/MapComponent.jsx";

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

// map component must be wrapperd with these HOCs, library requrement
// see https://tomchentw.github.io/react-google-maps/#installation
const WrappedMapComponent = withScriptjs(withGoogleMap((props) =>
    <MapComponent markers={props.markers}
                  markerTypes={props.markerTypes}
                  onMarkerClickCallback={props.onMarkerClickCallback}/>
));

export default class MapView extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            findings: [],
            findingTypes: {},
            selectedFinding: null,
            findingTypesShown: {},
            filteredFindings: []
        };

        this.refreshList = this.refreshList.bind(this);
        this.onFindingTypeChange = this.onFindingTypeChange.bind(this);
        this.filterFindings = this.filterFindings.bind(this);
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
            throw e;    // TODO: ten toaster nefuguje, opravit
            // this.refs.container.error(e.toString(), '', { closeButton: true });
        }
    }

    /**
     * Filter findings to be displayed base on currently selected filters
     */
    filterFindings(){

        let filteredFindingsTemp =  this.state.findings.filter(item => this.state.findingTypesShown[item.type]);
        this.setState({
            filteredFindings: filteredFindingsTemp,
        });
    }

    /**
     * Findings type checkboxes handler
     *
     * @param event
     */
    onFindingTypeChange(event){

        // toggle type filter state
        let findingTypesShownTemp = this.state.findingTypesShown;
        findingTypesShownTemp[event.target.name] = event.target.checked;
        this.setState({
            findingTypesShown: findingTypesShownTemp
        });

        // clear currently selected finding if it belongs to the type, that is now beeing filtred-out
        if (this.state.selectedFinding !== null){
            if (this.state.selectedFinding.type === event.target.name && !event.target.checked) {
                this.setState({
                    selectedFinding: null
                });
            }
        }

        this.filterFindings();
    }

    /**
     * Show details on selected finding (marker)
     *
     * @param marker
     */
    onFindingClick(marker){

        this.setState({
            selectedFinding: marker
        });
    }

    /**
     * Render component
     *
     * @returns {XML}
     */
    render() {

        if (!this.state.findings) {
            return <Spinner name="line-scale-pulse-out" className="spinner"></Spinner>
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

                            <p className="text-muted">TODO: clustering and so on</p>

                            <hr />

                            <h2 className="h3">Findings sets</h2>
                            <form>
                                {
                                    Object.keys(this.state.findingTypes).map((key) => {
                                        return (
                                            <Checkbox key={key} name={key} onChange={this.onFindingTypeChange} defaultChecked={this.state.findingTypesShown[key]}>
                                                {this.state.findingTypes[key].name}
                                                <img src={this.state.findingTypes[key].mapIcon}/>
                                            </Checkbox>

                                        )
                                    })
                                }
                            </form>

                            <hr />

                            {this.state.selectedFinding !== null ? (
                                <div className="item-wrapper">
                                    <p>{this.state.selectedFinding._id}</p>
                                </div>
                            ) : (
                                <p className="text-muted text-center"><em>Click a map pin for finding info</em></p>
                            )}

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
                        onMarkerClickCallback={(marker) => (this.onFindingClick(marker))}        // TODO: not sure if this is ok to do?
                    />

                </div>
            );
        }
    }


    async componentWillMount() {                // TODO: is this necessary? No data modifications occur at the moment
        await this.refreshList();

        Emitter.addListener('onListRefresh', async () => {
            await this.refreshList();
        });
    }
}
