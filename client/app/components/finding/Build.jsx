import React from 'react';
import ReactDOM from 'react-dom';
import FormBuilder from '../FormBuilder.jsx';

import {FormControl} from 'react-bootstrap';

import axios from 'axios';
import {apiPrefixSchemas} from '../../App.jsx';

import {ToastContainer, ToastMessage} from 'react-toastr';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);


export default class Build extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            schemaNameValue: ''
        };

        this.getFindingSchema = this.getFindingSchema.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.showAlertSuccess = this.showAlertSuccess.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    getFindingSchema(schemaObj) {
        let schema = {
            name: this.state.schemaNameValue,
            definition: schemaObj
        };

        axios.post(apiPrefixSchemas, schema)
            .then(() => {
                this.showAlertSuccess();
                // this.closeModal();
            });
    }

    handleNameChange(evt) {
        this.setState({
            schemaNameValue: evt.target.value
        });
    }

    showAlertSuccess() {
        this.refs.container.success('Schema was created', 'Success', {
            closeButton: true,
        });
        // Clear formBuilder and input after submitting form
        fb.actions.clearFields();
        ReactDOM.findDOMNode(this.refs.schemaName).value = '';
        this.setState({
            schemaNameValue: ''
        })
    }

    closeModal() {
        this.props.onSchemaCreated();
    }

    render() {
        return (
            <div>
                <ToastContainer
                    toastMessageFactory={ToastMessageFactory}
                    ref="container"
                    className="toast-top-right"
                />

                <FormControl
                    type="text"
                    value={this.state.value}
                    ref="schemaName"
                    placeholder="Enter name"
                    onChange={this.handleNameChange}
                    style={{marginBottom: '15px', border: '3px dashed #ccc'}}
                />
                <FormBuilder sendFindingSchema={this.getFindingSchema} />
            </div>
        )
    }

}
