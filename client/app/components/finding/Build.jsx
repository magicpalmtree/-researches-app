import React from 'react';
import FormBuilder from '../FormBuilder.jsx';

import {FormControl} from 'react-bootstrap';

import axios from 'axios';
import {apiPrefixSchemas} from '../../App.jsx'

export default class Build extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            schemaNameValue: ''
        };

        this.getFindingSchema = this.getFindingSchema.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);

    }


    getFindingSchema(schemaObj) {
        let schema = {
            name: this.state.schemaNameValue,
            definition: schemaObj
        };

        console.log(schema);

        axios.post(apiPrefixSchemas, schema)
            .then(() => {
                console.log("success")
            });
    }

    handleNameChange(evt) {
        this.setState({
            schemaNameValue: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter name"
                    onChange={this.handleNameChange}
                    style={{marginBottom: '15px', border: '3px dashed #ccc'}}
                />
                <FormBuilder sendFindingSchema={this.getFindingSchema} />
            </div>
        )
    }

}
