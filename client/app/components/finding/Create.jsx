import React from 'react';
// import schemaStatic from '../../../schemas/schemaStatic.json';
import axios from 'axios';
import {apiPrefix} from "../../App.jsx";
import {apiPrefixSchemas} from "../../App.jsx";

// import Form from "react-jsonschema-form";
import FormRender from "../FormRender.jsx";

import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import Emitter from '../../../helpers/emitters.js';

function FieldGroup({ id, label, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

export default class Create extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            selectValue: '',
            schemaOptions: [],
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSave = this.onSave.bind(this);
        this.getSchemaOptions = this.getSchemaOptions.bind(this);
    }


    componentWillMount() {
        this.getSchemaOptions();
    }

    /**
     * Create a JSON from FormData() object. Then perform a POST request.
     */
    onSave() {
        let dynamForm = document.forms.namedItem("dynamicForm"),
            staticForm = document.forms.namedItem("staticForm");

        let dynamData = new FormData(dynamForm),
            staticData = new FormData(staticForm);

        let formData = {},
            dynam = {};

        for(let entry of staticData.entries()) {
            formData[entry[0]] = entry[1];
        }

        for(let entry of dynamData.entries()) {
            dynam[entry[0]] = entry[1];
        }

        formData.dynam = dynam;

        console.log(formData);

        axios.post(apiPrefix, formData)
            .then(() => {
                this.closeModal();
                Emitter.emit('onListRefresh');
            });
    }


    /**
     * Perform GET request to retrieve a list of dynamic schemas from a db.
     */
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
                <form name="staticForm">
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Lokalita-naleziště"
                        name="lokalita"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Kraj"
                        name="kraj"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Okres"
                        name="okres"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Katastr"
                        name="katastr"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Nadmořská výška"
                        name="nadmorskaVyska"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Zkoumaná plocha"
                        name="zkoumanaPlocha"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Archeolog"
                        name="archeolog"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Rok výzkumu"
                        name="rokVyzkumu"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Instituce"
                        name="instituce"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Koordináty XYZ"
                        name="koordinatyXYZ"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Mapa"
                        name="mapa"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Sonda"
                        name="sonda"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Sektor"
                        name="sektor"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Objekt"
                        name="objekt"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Typ objektu"
                        name="typObjektu"
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
                        name="hloubka"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Datace - archeologické období"
                        name="dataceObd"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Datace - archeologická kultura"
                        name="dataceKult"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Typ naleziště"
                        name="typNaleziste"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Reference"
                        name="reference"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Typ odběru"
                        name="typOdberu"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Inventarizační číslo"
                        name="inventarizacniCislo"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Poznámka"
                        name="poznamka"
                    />
                </form>

                <hr/>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Dynamická část</ControlLabel>
                    <FormControl componentClass="select" onChange={this.changeHandler} placeholder="Select a schema">
                        <option></option>
                        {this.state.schemaOptions.map((opt, i) => (
                            <option value={opt._id} key={i}>{opt.name}</option>
                        ))}
                    </FormControl>
                </FormGroup>

                {this.state.selectValue !== '' ? <FormRender schema={
                    this.state.schemaOptions.filter((el) =>
                    el._id === this.state.selectValue)}/> : <div></div> }

                <button onClick={this.onSave}>Save</button>
            </div>
        )
    }
}
