const React = require('react');
const Button = require('react-bootstrap').Button;
//const Form = require('react-bootstrap').Form;
const Col = require('react-bootstrap').Col;
const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;

import Form from 'react-jsonschema-form'

const schema = require('../../schema.json');

const axios = require('axios');

const apiPrefix = 'http://localhost:8099/api/findings/';

// Perform a post request to save a formData
const onSubmit = ({formData}) =>  axios.post(apiPrefix, formData)
    .then(() => {
        console.log("Saving success")
    });

module.exports = React.createClass({

    render: function() {
        return (
            <Form schema={schema} onSubmit={onSubmit}/>
        )
    }
});
