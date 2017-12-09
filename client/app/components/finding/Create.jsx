import React from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../../services/api'
import FormRender from "../FormRender.jsx";
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

/**
 * Define helping function to building form easier
 * @param id
 * @param label
 * @param props
 * @returns {XML}
 * @constructor
 */
function FieldGroup({ id, label, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

/**
 * Create a new finding
 */
class Create extends React.Component {

    constructor(props, context) {
        super(props, context);

        // Temporary solution FIX
        this.state = {
            lokalita: '',
            kraj: '',
            okres: '',
            katastr: '',
            nadmorskaVyska: '',
            zkoumanaPlocha: '',
            archeolog: '',
            rokVyzkumu: '',
            instituce: '',
            koordinatyXYZ: '',
            mapa: '',
            sonda: '',
            sektor: '',
            objekt: '',
            typObjektu: '',
            vrstva: '',
            hloubka: '',
            dataceObd: '',
            dataceKult: '',
            typNaleziste: '',
            reference: '',
            typOdberu: '',
            inventarizacniCislo: '',
            poznamka: '',
            selectValue: '',
            schemaOptions: [],
            submitted: false
        };

        this.onSelectChange = this.onSelectChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.save = this.save.bind(this);
        this.getSchemaOptions = this.getSchemaOptions.bind(this);
    }


    /**
     * @async
     * @returns {Promise.<void>}
     */
    async componentWillMount() {
        await this.getSchemaOptions();
    }

    /**
     * Init state value with route props, if present
     */
    componentDidMount() {
        if (this.props.location.state) {
            let itemObj = this.props.location.state.item;
            for (let staticProp in itemObj) {
                if (itemObj.hasOwnProperty(staticProp) && staticProp !== '__v' && staticProp !== '_id' && staticProp !== 'dynam') {
                    this.setState({
                        [staticProp]: itemObj[staticProp]
                    });
                }
            }
        }
    }

    /**
     * @async
     * Create a JSON from FormData() object. Then perform a POST request.
     */
    async save() {
        let dynamForm = document.forms.namedItem("dynamicForm"),
            staticForm = document.forms.namedItem("staticForm");

        let dynamData = new FormData(dynamForm),
            staticData = new FormData(staticForm);

        let formData = {},
            dynam = {};

        for (let entry of staticData.entries()) {
            formData[entry[0]] = entry[1];
        }

        for (let entry of dynamData.entries()) {
            dynam[entry[0]] = entry[1];
        }

        formData.dynam = dynam;

        await api.createFinding(formData);

        this.setState({
            submitted: true
        });
    }

    /**
     * Handle input change
     * @param event
     */
    onInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    /**
     * @async
     * Perform GET request to retrieve a list of schemas from a db.
     */
    async getSchemaOptions() {
        let result = await api.getFindingSchemas();
        this.setState({
            schemaOptions: result.data
        })
    }

    /**
     * Handle select change
     * @param e
     */
    onSelectChange(e) {
        this.setState({
            selectValue: e.target.value
        });
    }

    render() {
        if (this.state.submitted) {
            return (<Redirect to="/findings"/>)
        } else {
            return (
                <div style={{margin: '20px 25%'}}>
                    <form name="staticForm">
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.lokalita}
                            id="formControlsText"
                            type="text"
                            label="Lokalita-naleziště"
                            name="lokalita"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.kraj}
                            id="formControlsText"
                            type="text"
                            label="Kraj"
                            name="kraj"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.okres}
                            id="formControlsText"
                            type="text"
                            label="Okres"
                            name="okres"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.katastr}
                            id="formControlsText"
                            type="text"
                            label="Katastr"
                            name="katastr"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.nadmorskaVyska}
                            id="formControlsText"
                            type="text"
                            label="Nadmořská výška"
                            name="nadmorskaVyska"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.zkoumanaPlocha}
                            id="formControlsText"
                            type="text"
                            label="Zkoumaná plocha"
                            name="zkoumanaPlocha"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.archeolog}
                            id="formControlsText"
                            type="text"
                            label="Archeolog"
                            name="archeolog"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.rokVyzkumu}
                            id="formControlsText"
                            type="text"
                            label="Rok výzkumu"
                            name="rokVyzkumu"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.instituce}
                            id="formControlsText"
                            type="text"
                            label="Instituce"
                            name="instituce"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.koordinatyXYZ}
                            id="formControlsText"
                            type="text"
                            label="Koordináty XYZ"
                            name="koordinatyXYZ"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.mapa}
                            id="formControlsText"
                            type="text"
                            label="Mapa"
                            name="mapa"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.sonda}
                            id="formControlsText"
                            type="text"
                            label="Sonda"
                            name="sonda"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.sektor}
                            id="formControlsText"
                            type="text"
                            label="Sektor"
                            name="sektor"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.objekt}
                            id="formControlsText"
                            type="text"
                            label="Objekt"
                            name="objekt"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.typObjektu}
                            id="formControlsText"
                            type="text"
                            label="Typ objektu"
                            name="typObjektu"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.vrstva}
                            id="formControlsText"
                            type="text"
                            label="Vrstva"
                            name="vrstva"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.hloubka}
                            id="formControlsText"
                            type="text"
                            label="Hloubka(od do)"
                            name="hloubka"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.dataceObd}
                            id="formControlsText"
                            type="text"
                            label="Datace - archeologické období"
                            name="dataceObd"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.dataceKult}
                            id="formControlsText"
                            type="text"
                            label="Datace - archeologická kultura"
                            name="dataceKult"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.typNaleziste}
                            id="formControlsText"
                            type="text"
                            label="Typ naleziště"
                            name="typNaleziste"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.reference}
                            id="formControlsText"
                            type="text"
                            label="Reference"
                            name="reference"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.typOdberu}
                            id="formControlsText"
                            type="text"
                            label="Typ odběru"
                            name="typOdberu"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.inventarizacniCislo}
                            id="formControlsText"
                            type="text"
                            label="Inventarizační číslo"
                            name="inventarizacniCislo"
                        />
                        <FieldGroup
                            onChange={this.onInputChange}
                            value={this.state.poznamka}
                            id="formControlsText"
                            type="text"
                            label="Poznámka"
                            name="poznamka"
                        />
                    </form>

                    <hr/>

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Dynamická část</ControlLabel>
                        <FormControl componentClass="select" onChange={this.onSelectChange}
                                     placeholder="Select a schema">
                            <option></option>
                            {this.state.schemaOptions.map((opt, i) => (
                                <option value={opt._id} key={i}>{opt.name}</option>
                            ))}
                        </FormControl>
                    </FormGroup>

                    { this.state.selectValue !== '' ? <FormRender schema={
                        this.state.schemaOptions.filter((el) =>
                        el._id === this.state.selectValue)}/> : <div></div> }

                    <Button bsStyle="primary" bsSize="large" onClick={this.save}>Save</Button>

                </div>
            )
        }
    }
}

export default Create;