import React from 'react';
import {Checkbox, Col} from "react-bootstrap";
import api from '../../services/apiMock';
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
            selectedItems: [],
            findingTypes: {},
            displayTypes: [],
        };

        this.markers = [];

        this.refreshList = this.refreshList.bind(this);

    }

    async refreshList() {
        var that = this;
        try {

            //
            let typesResult = await api.getFindingTypes();
            this.setState({
                findingTypes: typesResult.data,
            });

            let findingsResult = await api.getFindings();
            this.setState({
                findings: findingsResult.data,
            });

            // init map and process


            // let mapCenter = {lat: 49.885551, lon: 14.982962};


            var mapCenter = new google.maps.LatLng(parseFloat(49.885551), parseFloat(14.982962));
            let map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: mapCenter
            });

            let geocoder = new google.maps.Geocoder();
            var iconBase = 'http://maps.google.com/mapfiles/kml/paddle/';

            this.state.findings.forEach(function (element, i) {

                // map.setCenter(results    [0].geometry.location);         // todo: calculate map center and zoom based on all data
                var marker = new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(parseFloat(element.gps.lat), parseFloat(element.gps.lon)),
                    icon: that.state.findingTypes[element.type].mapIcon,
                });

                that.markers.push(marker);

                marker.addListener('click', function () {
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

                console.log(element);
            });


        } catch (e) {
            throw e;    // TODO: ten toaster nefuguje, opravit
            // this.refs.container.error(e.toString(), '', { closeButton: true });
        }
    }

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

                            <h2><small>Filters</small></h2>

                            <hr />

                            <form>
                                {
                                    Object.keys(this.state.findingTypes).map((key) => {
                                        return (
                                            <Checkbox>      // TODO: make alive
                                                <img src={this.state.findingTypes[key].mapIcon}/>
                                                {this.state.findingTypes[key].name}
                                            </Checkbox>

                                        )
                                    })
                                }
                            </form>

                            <hr />

                            <div className="item-wrapper">
                                {
                                    this.state.selectedItems.map((item) => {
                                        return <Item delete={this.deleteFinding} key={item._id} item={item}/>
                                    })
                                }
                            </div>
                        </div>


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

        Emitter.addListener('onListRefresh', async () => {
            await this.refreshList();
        });
    }
}