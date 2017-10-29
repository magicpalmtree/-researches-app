import React from 'react';
import {InfoWindow, Marker, Polygon} from "react-google-maps";
import {Label} from "react-bootstrap";
import {Link} from "react-router-dom";


export default class MapPoi extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            coordinates: this.props.coordinates,
            icon: this.props.icon,
            polygonIcon: this.props.polygonIcon,
            color: this.props.color,
            markerData: this.props.markerData,
            ballonShown: this.props.ballonShown,
        };

        this.googleMaps = this.props.googleMaps;
    }

    /**
     * Calclulate center for given set of GPS coordinates.
     *
     * Accepted format:
     *
     * [{"lat":12.3456,"lng":45.6789}, ...]
     *
     * @param arrayOfCoords
     * @returns {LatLng|LatLngLatLngLatLng}
     */
    calculatePolygonsCenter(arrayOfCoords){

        let calculator = new this.googleMaps.LatLngBounds();

        arrayOfCoords.forEach(function(point){
            calculator.extend(point);
        });

        return calculator.getCenter();
    }

    openBalloon(){
        this.props.setActiveMarkerCallback(this.state.markerData);       // notify parrent for further actions
    }

    closeBalloon(){
        this.props.setActiveMarkerCallback(null);       // notify parrent for further actions
    }

    /**
     * Internal helper method to render marker's data attributes
     *
     * @param attributeName
     * @param attributeValue
     * @returns {*}
     */
    renderFindingElement(attributeName, attributeValue){
        switch (attributeName) {
            case 'gps':
            case '_id':
            case 'Sample_ID':
            case 'DOC_TYPE':
            case 'dynam':
            case 'tag':
                return "";
                break;
        }

        if (typeof attributeValue === "string"){
            return (
                <p key={attributeName}>
                    <small className="text-muted">{attributeName}</small><br />
                    {attributeValue}
                </p>
            )
        }
    }


    render() {

        let infoWindow = (

            <InfoWindow onCloseClick={this.closeBalloon.bind(this)}>

                <div className="item-wrapper">
                    <h3>{this.state.markerData['Sample_ID']}</h3>
                    {
                        this.state.markerData.tag.map(function (tag) {
                            return (
                                <Label key={tag.text} bsStyle={tag.color}>{tag.text}</Label>
                            )
                        })
                    }
                    {
                        Object.keys(this.state.markerData).map((attributeName) => {
                            return (
                                this.renderFindingElement(attributeName, this.state.markerData[attributeName])
                            )
                        })
                    }
                    <Link
                        to={'/finding/' + this.state.markerData._id}
                        className="btn btn-sm btn-success"
                        target="_blank"
                    >
                        View finding </Link>
                </div>

            </InfoWindow>
        );


        // GPS position is a point
        if (this.state.coordinates.length === 1){
            return (
                <Marker
                        onClick={this.openBalloon.bind(this)}
                        position={this.state.coordinates[0]}
                        icon={this.state.icon}
                >
                    {this.state.ballonShown && infoWindow}
                </Marker>
            )

            // GPS position is a polygon
        } else if (this.state.coordinates.length > 1) {

            return (
                <span>
                    <Polygon path={this.state.coordinates}
                             onClick={this.openBalloon.bind(this)}
                             options={{
                                 strokeColor: this.state.color,
                                 fillColor: this.state.color,
                                 strokeOpacity: 1,
                                 strokeWeight: 2,
                                 fillOpacity: 0.6
                             }}
                    />

                    // this center marker is needed for clustering to work properry
                    // because clustering doesn't count with polygons etc.
                    <Marker
                        onClick={this.openBalloon.bind(this)}
                        position={this.calculatePolygonsCenter(this.state.coordinates)}
                        icon={this.state.polygonIcon}
                    >
                        {this.state.ballonShown && infoWindow}
                    </Marker>
                </span>
            )
        }

    }

    /**
     * Update map if markers change
     *
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            ballonShown: nextProps.ballonShown
        });

    }



}