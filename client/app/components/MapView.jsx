import React from 'react';
import {Col} from "react-bootstrap";
import api from '../../services/api';
import {ToastContainer, ToastMessage} from "react-toastr";
import Spinner from 'react-spinkit';
import Emitter from '../../helpers/emitters.js';
import './MapView.css';
import Item from "./finding/Item.jsx";

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

export default class MapView extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: {},
            selectedItems: []
        };

        this.markers = [];

        this.refreshList = this.refreshList.bind(this);

        this.onPlacemarkClick = this.onPlacemarkClick.bind(this);

    }



    async refreshList() {
        var that = this;
        try {
            let result = await api.getFindings();
            this.setState({
                findings: result.data,
            });

            // init map and process


            // let mapCenter = {lat: 49.885551, lon: 14.982962};


            var mapCenter = new google.maps.LatLng(parseFloat(49.885551),parseFloat(14.982962));
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

            this.state.findings.every(function(element, i) {


                geocoder.geocode( { 'address': element.Lokalita}, function(results, status) {               // pomucka, TODO: zbavit se toho a presunout to do editace
                    if (status == 'OK') {
                        map.setCenter(results[0].geometry.location);
                        var marker = new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location,
                            icon: icons[element.type].icon,
                        });

                        that.markers.push(marker);

                        marker.addListener('click', function() {
                            // map.setZoom(8);
                            // map.setCenter(marker.getPosition());


                            // that.markers.every(function (m) {            // todo: vyresit nulovani markeru
                            // // console.log(m);
                            //    m.setAnimation(null);
                            // });
                            // this.setAnimation(google.maps.Animation.BOUNCE);

                            that.setState({
                                selectedItems: [element]
                            });

                        });
                    } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                    }
                });

                console.log(element);
                return i<5;                         // TODO: Je tu natvrdo prvnich pet znamu, kvuli limitu API - Odstranit
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
                    <ToastContainer
                        toastMessageFactory={ToastMessageFactory}
                        ref="container"
                        className="toast-top-right"
                    />

                    <div id="map-toolbox">

                        <div className="container-fluid">

                        <h2>Map view</h2>

                        <hr />

                        <div className="item-wrapper">
                            {
                                this.state.selectedItems.map((item) => {
                                    return <Item delete={this.deleteFinding} key={item._id} item={item} />
                                })
                            }
                        </div>
                        </div>


                    </div>

                    <div id="legend">
                        <strong>Map legend</strong>
                    </div>


                    <div id="map-container">

                        <div id="map"></div>

                    </div>





                </div>

            );
        }
    }


    async componentWillMount() {
        await this.refreshList();

        Emitter.addListener('onListRefresh', async () => { // TODO: ma to tu byt nebo ne?
            await this.refreshList();
        });
    }
}