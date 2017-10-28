import React from 'react';
import {GoogleMap, Marker} from "react-google-maps";
import {MarkerClusterer} from "react-google-maps/lib/components/addons/MarkerClusterer";



export default class MapComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            markers: this.props.markers,
            markerTypes: this.props.markerTypes,
            activeMarker: null,
            clusteringActive: false,
        };

        this.googleMaps = null;         // grabbed on component mount
    }

    /**
     * Handler for marker-click, making it "active"
     *
     * @param marker
     */
    onMarkerClick(marker){
        this.setState({
            activeMarker: marker,
        });

        // TODO: add baloon popup, maybe?

        this.props.onMarkerClickCallback(marker);       // notify parrent for further actions
    }

    /**
     * Helper method for determining whether a marker should be animated
     * (active, currently selected marker should be animated)
     *
     * @param marker
     * @returns {*} Animation type or null
     */
    getMarkerAnimation(marker){

        if (this.state.activeMarker !== null) {
            if (marker._id === this.state.activeMarker._id){
                return this.googleMaps.Animation.BOUNCE;
            }
        }
        return null;
    }

    render() {

        let mapContent = (
            this.state.markers.map((key) => {
                return (

                    <Marker key={key._id} onClick={this.onMarkerClick.bind(this, key)}
                            position={{ lat: key.gps.lat, lng: key.gps.lng }}
                            icon={this.state.markerTypes[key.type].mapIcon}
                            animation={this.getMarkerAnimation(key)} />
                )
            })
        );


        if (this.state.clusteringActive){
            return (
                <GoogleMap
                    defaultZoom={7}
                    defaultCenter={{lat: 49.742285, lng: 15.335175}}  // todo: calculate map center and zoom based on all data
                    mapTypeId="terrain"
                >
                    <MarkerClusterer
                        averageCenter
                        enableRetinaIcons
                        gridSize={60}
                        maxZoom={13}
                    >
                    {mapContent}
                    </MarkerClusterer>

                </GoogleMap>
            );
        } else {
            return (
                <GoogleMap
                    defaultZoom={7}
                    defaultCenter={{lat: 49.742285, lng: 15.335175}}  // todo: calculate map center and zoom based on all data
                    mapTypeId="terrain"
                >
                    {mapContent}
                </GoogleMap>
            );
        }

    }

    componentWillMount() {

        //  solving the issue of grabbing the Google API hidden in react-google-maps lib
        // taken from here https://github.com/tomchentw/react-google-maps/issues/324

        if (typeof window === 'undefined') {
            return
        }
        // grab our googleMaps obj from whever she may lay
        var googleMaps = this.props.googleMaps ||
            (window.google &&
            window.google.maps) ||
            this.googleMaps;

        if (!googleMaps) {
            console.error(
                'Google map api was not found in the page.');
            return;
        }
        // now grab the services we need
        this.googleMaps = googleMaps


    }

    /**
     * Update map if markers change
     *
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {

        // TODO: Ugly, maybe check some unique id or count
        if(JSON.stringify(this.props.markers) !== JSON.stringify(nextProps.markers))
        {
            this.setState({
                markers: nextProps.markers
            });
        }

        // chcek if the active marker needs to be cleard
        if (this.state.activeMarker !== null){
            let found = false;
            for (let newMarker of nextProps.markers) {
                if (newMarker._id === this.state.activeMarker._id) {
                    found = true;
                    break;
                }
            }

            if (!found){            // if the active marker is not in the new marker set, clear it
                this.setState({
                    activeMarker: null
                });
            }
        }

        this.setState({
            clusteringActive: nextProps.clusteringActive,
        })


    }

}