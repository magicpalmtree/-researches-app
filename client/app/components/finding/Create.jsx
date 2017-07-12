import React from 'react';
import schemaBot from '../../../schemas/schemaBot.json';
import schemaZoo from '../../../schemas/schemaZoo.json';
import axios from 'axios';
import {apiPrefix} from "../../App.jsx";
import {apiPrefixSchemas} from "../../App.jsx";

import Form from "react-jsonschema-form";
import FormRender from "../FormRender.jsx";

import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import Emitter from '../../../helpers/emitters.js';

const test = [
    {
        "type": "header",
        "subtype": "h1",
        "label": "Header"
    },
    {
        "type": "text",
        "label": "Text Field",
        "className": "form-control",
        "name": "text-1499777634233",
        "subtype": "text"
    },
    {
        "type": "text",
        "label": "Text Field",
        "className": "form-control",
        "name": "text-1499777828042",
        "subtype": "text"
    },
    {
        "type": "text",
        "label": "Text Field",
        "className": "form-control",
        "name": "text-1499777829909",
        "subtype": "text"
    }
];

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default class Create extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            selectValue: '',
            schemaOptions: []
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getSchemaOptions = this.getSchemaOptions.bind(this);
    }


    componentWillMount() {
        this.getSchemaOptions();
    }

    // Perform a post request to save a formData
    onSubmit({formData}) {
        formData.type = this.state.selectValue;
        axios.post(apiPrefix, formData)
            .then(() => {
                this.closeModal();
                Emitter.emit('onListRefresh');
            });
    }

    getSchemaOptions() {
        let _this = this;
        axios.get(apiPrefixSchemas)
            .then(function(result) {
                _this.setState({
                    schemaOptions: result.data
                })
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
                    <ControlLabel>Dynamická část</ControlLabel>
                    <FormControl componentClass="select" onChange={this.changeHandler} placeholder="Select a schema">
                        <option></option>
                        {this.state.schemaOptions.map((opt, i) => (
                            <option value={opt._id} key={i}>{opt.name}</option>
                        ))}
                    </FormControl>
                </FormGroup>

                <form>
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Lokalita-naleziště"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Kraj"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Okres"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Katastr"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Nadmořská výška"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Zkoumaná plocha"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Archeolog"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Rok výzkumu"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Instituce"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Koordináty XYZ"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Mapa"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Sonda"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Sektor"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Objekt"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Typ objektu"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Vrstva"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Hloubka(od do)"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Datace - archeologické období"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Datace - archeologická kultura"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Typ naleziště"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Reference"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Typ odběru"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Inventarizační číslo"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Poznámka"
                    />

                    <hr/>

                    {this.state.selectValue !== '' ? <FormRender schema={
                        this.state.schemaOptions.filter((el) =>
                        el._id === this.state.selectValue)}/> : <div></div> }

                </form>
            </div>
        )
    }
}
