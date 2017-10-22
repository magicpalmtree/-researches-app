import React from 'react';
import {Col} from "react-bootstrap";
import api from "../../api/index";
import {ToastContainer, ToastMessage} from "react-toastr";
import Spinner from 'react-spinkit';
import Emitter from '../../helpers/emitters.js';
import './MapView.css';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

export default class MapView extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: {}
        };

        this.refreshList = this.refreshList.bind(this);



    }

    async refreshList() {
        try {
            let result = await api.getFindings();
            this.setState({
                findings: result.data.findings,
            });

            // init map and process


            let mapCenter = {lat: 49.885551, lon: 14.982962};
            let map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: mapCenter
            });

            let geocoder = new google.maps.Geocoder();
            var iconBase = 'http://maps.google.com/mapfiles/kml/paddle/';
            var icons = {
                AB: {
                    name: "Archeobotanika",
                    icon: iconBase + 'grn-circle_maps.png'
                },
                AZ: {
                    name: "Archeozoologie",
                    icon: iconBase + 'red-circle_maps.png'
                },
            };

            this.state.findings.forEach(function(element) {


                geocoder.geocode( { 'address': element.Lokalita}, function(results, status) {               // pomucka, TODO: zbavit se toho a presunout to do editace
                    if (status == 'OK') {
                        map.setCenter(results[0].geometry.location);
                        var marker = new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location,
                            icon: icons[element.type].icon,
                        });
                    } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                    }
                });

                    console.log(element);
            });


            var legend = document.getElementById('legend');
            for (var key in icons) {
                var type = icons[key];
                var name = type.name;
                var icon = type.icon;
                var div = document.createElement('div');
                div.innerHTML = '<img src="' + icon + '"> ' + name;
                legend.appendChild(div);
            }

            map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);



        } catch(e) {
            throw e;    // TODO: ten toaster nefuguje, opravit
            // this.refs.container.error(e.toString(), '', { closeButton: true });
        }
    }

    render() {

        if (!this.state.findings) {
            return <Spinner name="line-scale-pulse-out" className="spinner"></Spinner>
        } else {
            return(

                <div>

                    <Col sm={4} md={3}>

                        <ToastContainer
                            toastMessageFactory={ToastMessageFactory}
                            ref="container"
                            className="toast-top-right"
                        />

                        <h2>Map view</h2>


                    </Col>

                    <div id="legend">
                        <strong>Map legend</strong>
                    </div>

                    <div id="mapContainer">
                        <div id="map"></div>
                    </div>






                </div>

            );
        }
    }

    componentWillMount() {
        this.refreshList();

        Emitter.addListener('onListRefresh', () => {         // TODO: ma to tu byt nebo ne?
            this.refreshList();
        });
    }
}