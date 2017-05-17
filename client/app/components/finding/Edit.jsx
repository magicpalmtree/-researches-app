import React from 'react';
const axios = require('axios');

// import {apiPrefix} from '../../App.jsx'

export default class Edit extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleEditClick() {

    }

    render() {

    }
}
