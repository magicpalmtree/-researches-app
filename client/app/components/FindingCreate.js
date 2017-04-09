const React = require('react');
const Button = require('react-bootstrap').Button;
const Form = require('react-bootstrap').Form;
const Col = require('react-bootstrap').Col;
const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;

const axios = require('axios');

const apiPrefix = 'http://localhost:8099/api/findings/';

module.exports = React.createClass({
    getInitialState: function() {
        return {
            Vyzkum: '',
            Objekt: '',
            Vzorek: '',
            PCODE: '',
            frakce: '',
            makrozbTyp: '',
            rPocet: '',
            odhad: '',
            nasobitel: '',
            FPocet: '',
            datVloz: '',
            poznFrakce: '',
            Taxon: ''
        }
    },

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    },

    handleSaveClick() {
        axios.post(apiPrefix, {
                Vyzkum : this.state.Vyzkum,
                Objekt : this.state.Objekt,
                Vzorek : this.state.Vzorek,
                PCODE : this.state.PCODE,
                frakce : this.state.frakce,
                makrozbTyp : this.state.makrozbTyp,
                zach : this.state.zach,
                rPocet : this.state.rPocet,
                odhad : this.state.odhad,
                nasobitel : this.state.nasobitel,
                FPocet : this.state.FPocet,
                datVloz : this.state.datVloz,
                poznFrakce : this.state.poznFrakce,
                Taxon : this.state.Taxon
            })
            .then(() => {
                console.log("Success")
            })
    },

    render: function() {
        return (
            <Form horizontal>
                <FormGroup >
                    <Col componentClass={ControlLabel} sm={2}>
                        Vyzkum
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.Vyzkum} onChange={this.handleInputChange} name="Vyzkum" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Objekt
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.Objekt} onChange={this.handleInputChange} name="Objekt" />
                    </Col>
                </FormGroup>

                <FormGroup >
                    <Col componentClass={ControlLabel} sm={2}>
                        Vzorek
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.Vzorek} onChange={this.handleInputChange} name="Vzorek" />
                    </Col>
                </FormGroup>

                <FormGroup >
                    <Col componentClass={ControlLabel} sm={2}>
                        PCODE
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.PCODE} onChange={this.handleInputChange} name="PCODE" />
                    </Col>
                </FormGroup>

                <FormGroup >
                    <Col componentClass={ControlLabel} sm={2}>
                        frakce
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.frakce} onChange={this.handleInputChange} name="frakce" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        makrozbTyp
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.makrozbTyp} onChange={this.handleInputChange} name="makrozbTyp" />
                    </Col>
                </FormGroup>

                <FormGroup >
                    <Col componentClass={ControlLabel} sm={2}>
                        rPocet
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.rPocet} onChange={this.handleInputChange} name="rPocet" />
                    </Col>
                </FormGroup>

                <FormGroup >
                    <Col componentClass={ControlLabel} sm={2}>
                        odhad
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.odhad} onChange={this.handleInputChange} name="odhad" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        nasobitel
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.nasobitel} onChange={this.handleInputChange} name="nasobitel" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        FPocet
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.FPocet} onChange={this.handleInputChange} name="FPocet" />
                    </Col>
                </FormGroup>

                <FormGroup >
                    <Col componentClass={ControlLabel} sm={2}>
                        datVloz
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.datVloz} onChange={this.handleInputChange} name="datVloz" />
                    </Col>
                </FormGroup>

                <FormGroup >
                    <Col componentClass={ControlLabel} sm={2}>
                        poznFrakce
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.poznFrakce} onChange={this.handleInputChange} name="poznFrakce" />
                    </Col>
                </FormGroup>

                <FormGroup >
                    <Col componentClass={ControlLabel} sm={2}>
                        Taxon
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.Taxon} onChange={this.handleInputChange} name="Taxon" />
                    </Col>
                </FormGroup>


                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button bsStyle="success" type="submit" onClick={this.handleSaveClick}>
                            Save
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
});
