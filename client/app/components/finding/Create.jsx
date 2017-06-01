import React from 'react';
import schemaBot from '../../../schemaBot.json';
import schemaZoo from '../../../schemaZoo.json';
import axios from 'axios';
import {apiPrefix} from "../../App.jsx";

import Form from "react-jsonschema-form";

import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'


export default class Create extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            // Default value
            selectValue: "AB"
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // Perform a post request to save a formData
    onSubmit({formData}) {
        axios.post(apiPrefix, formData)
            .then(() => {
                console.log("Saving success");
                this.closeModal();
            });
    }

    closeModal() {
        this.props.onFindingCreated();
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
                    <FormControl componentClass="select" onChange={this.changeHandler} placeholder="select">
                        <option value="AB">Archeobotanický záznam</option>
                        <option value="AZ">Archeozoologický záznam</option>
                    </FormControl>
                </FormGroup>

                <Form onSubmit={this.onSubmit} schema={this.state.selectValue === 'AB' ? schemaBot : schemaZoo}/>
            </div>
        )
    }
}
