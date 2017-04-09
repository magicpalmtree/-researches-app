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
            Vyzkum: this.props.finding.Vyzkum,
            Objekt: this.props.finding.Objekt,
            Vzorek: this.props.finding.Vzorek,
            PCODE: this.props.finding.PCODE,
            frakce: this.props.finding.frakce,
            makrozbTyp: this.props.finding.makrozbTyp,
            rPocet: this.props.finding.rPocet,
            odhad: this.props.finding.odhad,
            nasobitel: this.props.finding.nasobitel,
            FPocet: this.props.finding.FPocet,
            datVloz: this.props.finding.datVloz,
            poznFrakce: this.props.finding.poznFrakce,
            Taxon: this.props.finding.Taxon
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

    handleEditClick() {
        axios.put(apiPrefix + this.props.finding._id, {
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
    },

    render: function(){
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

                <FormGroup controlId="formControlsSelect">
                    <Col componentClass={ControlLabel} sm={2}>
                        makrozbTyp
                    </Col>
                    <Col sm={10}>
                        <FormControl componentClass="select" value={this.state.makrozbTyp} onChange={this.handleInputChange} name="makrozbTyp">
                            <option>se/plod</option>
                            <option>naklíč</option>
                            <option>kvě_ství</option>
                            <option>pleva</option>
                            <option>plod</option>
                            <option>dř_kůra</option>
                            <option>kosti</option>
                            <option>ršup</option>
                            <option>arch</option>
                            <option>dřevo</option>
                            <option>měkk</option>
                        </FormControl>
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
                        <Button bsStyle="warning" type="submit" onClick={this.handleEditClick}>
                            Edit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
});
