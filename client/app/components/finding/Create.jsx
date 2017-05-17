import React from 'react';
import schemaBot from '../../../schemaBot.json';
import schemaZoo from '../../../schemaZoo.json';
import axios from 'axios';
import {apiPrefix} from "../../App.jsx";

import Form from "react-jsonschema-form";

import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

// Perform a post request to save a formData
const onSubmit = ({formData}) =>  axios.post(apiPrefix, formData)
    .then(() => {
        console.log("Saving success")
    });


export default class Create extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            // Default value
            selectValue: "AB"
        }
    }

    changeHandler(e) {
        this.setState({
            selectValue: e.target.value
        });
    }

    render() {
        return (
            <div>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" onChange={this.changeHandler.bind(this)} placeholder="select">
                        <option value="AB">Archeobotanický záznam</option>
                        <option value="AZ">Archeozoologický záznam</option>
                    </FormControl>
                </FormGroup>

                <Form schema={this.state.selectValue === 'AB' ? schemaBot : schemaZoo}/>
            </div>
        )
    }
}
