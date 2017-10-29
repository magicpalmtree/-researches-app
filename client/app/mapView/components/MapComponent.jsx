import React from 'react';
import {GoogleMap} from "react-google-maps";
import {MarkerClusterer} from "react-google-maps/lib/components/addons/MarkerClusterer";
import MapPoi from "./MapPoi.jsx";



export default class MapComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            markers: this.props.markers,
            markerTypes: this.props.markerTypes,
            activeMarker: null,
            clusteringActive: true,
        };

        this.googleMaps = null;         // grabbed on component mount

        this.setActiveMarker = this.setActiveMarker.bind(this);
    }

    /**
     * Handler for marker-click, making it "active" and opening its balloon
     *
     * @param marker
     */
    setActiveMarker(marker){
        this.setState({
            activeMarker: marker,
        });

    }

    /**
     * Helper method for determining whether a marker's baloon
     * sould be opened.
     *
     * @param marker
     * @returns {boolean}
     */
    getBaloonState(marker){

        if (this.state.activeMarker !== null) {
            if (marker._id === this.state.activeMarker._id){
                return true;
            }
        }
        return false;
    }


    /**
     * Internal helper method for wrapping map content with Google maps component
     *
     * @param content A JSX collection of markers, polygons and other elements
     * @returns {XML}
     */
    googleMapWrap(content) {

        return (
            <GoogleMap
                defaultZoom={7}
                defaultCenter={{lat: 49.742285, lng: 15.335175}}  // todo: calculate map center and zoom based on all data
                mapTypeId="terrain"
                onClick={() => (this.setActiveMarker(null))}
            >
            {content}

            </GoogleMap>
        );
    }

    render() {

        let mapContent = (
            this.state.markers.map((key) => {
                return (<MapPoi
                    key={key._id}
                    coordinates={key.gps}
                    icon={this.state.markerTypes[key.DOC_TYPE].mapIcon}
                    polygonIcon={this.state.markerTypes[key.DOC_TYPE].mapPolygonIcon}
                    color={this.state.markerTypes[key.DOC_TYPE].color}
                    markerData={key}
                    googleMaps={this.googleMaps}
                    ballonShown={this.getBaloonState(key)}
                    setActiveMarkerCallback={(key) => (this.setActiveMarker(key))}
                />);
            })
        );


        if (this.state.clusteringActive){
            return (

                this.googleMapWrap(
                    <MarkerClusterer
                        averageCenter
                        enableRetinaIcons
                        gridSize={60}
                        maxZoom={13}
                    >
                        {mapContent}
                    </MarkerClusterer>
                )
            );
        } else {
            return (
                this.googleMapWrap(mapContent)
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