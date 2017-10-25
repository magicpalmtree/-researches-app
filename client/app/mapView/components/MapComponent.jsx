import React from 'react';
import {GoogleMap, Marker} from "react-google-maps";



export default class MapComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            markers: this.props.markers,
            markerTypes: this.props.markerTypes,
            activeMarker: null,
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
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{lat: 49.885551, lng: 14.982962}}  // todo: calculate map center and zoom based on all data
            >
                {
                    this.state.markers.map((key) => {
                        return (

                            <Marker onClick={this.onMarkerClick.bind(this, key)}
                                    position={{ lat: key.gps.lat, lng: key.gps.lng }}
                                    icon={this.state.markerTypes[key.type].mapIcon}
                                    animation={this.getMarkerAnimation(key)} />
                        )
                    })
                }

            </GoogleMap>
        );
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
}