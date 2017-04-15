const React = require('react');
const Button = require('react-bootstrap').Button;
//const Form = require('react-bootstrap').Form;
const Col = require('react-bootstrap').Col;
const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;

//const Form = require('react-jsonschema-form');

import Form from 'react-jsonschema-form'

const schema = require('../../schema.json');

const axios = require('axios');

const apiPrefix = 'http://localhost:8099/api/findings/';


module.exports = React.createClass({

    handleSaveClick() {
        axios.post(apiPrefix, {

            })
            .then(() => {
                console.log("Success")
            })
    },

    render: function() {
        return (
            <Form schema={schema} />
        )
    }
});
