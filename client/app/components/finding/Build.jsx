import React from 'react';
import ReactDOM from 'react-dom';
import FormBuilder from '../FormBuilder.jsx';
import {FormControl} from 'react-bootstrap';
import api from '../../../services/api';
import {ToastContainer, ToastMessage} from 'react-toastr';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);


export default class Build extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            schemaName: ''
        };

        this.saveSchema = this.saveSchema.bind(this);
        this.onSchemaNameChange = this.onSchemaNameChange.bind(this);
        this.showToastSuccess = this.showToastSuccess.bind(this);
    }


    async saveSchema(schemaObj) {
        let schema = {
            name: this.state.schemaName,
            definition: schemaObj
        };

        if (this.state.schemaName) {
            await api.createFindingSchema(schema);
            this.showToastSuccess();
        } else {
            this.showToastError();
        }
    }

    onSchemaNameChange(e) {
        this.setState({
            schemaName: e.target.value
        });
    }

    showToastSuccess() {
        this.refs.container.success('Schema was created', 'Success', {
            closeButton: true,
        });

        // Clear formBuilder and input after submitting form
        fb.actions.clearFields();
        ReactDOM.findDOMNode(this.refs.schemaName).value = '';
        this.setState({
            schemaName: ''
        })
    }

    showToastError() {
        this.refs.container.error('Schema name is missing!', 'Error', {
            closeButton: true,
        });
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
                    value={this.state.schemaName}
                    ref="schemaName"
                    placeholder="Enter name"
                    onChange={this.onSchemaNameChange}
                    style={{marginBottom: '15px', border: '3px dashed #ccc'}}
                />
                <FormBuilder sendSchema={this.saveSchema} />
            </div>
        )
    }
}
