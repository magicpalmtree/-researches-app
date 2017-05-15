const React = require('react');

const axios = require('axios');

const apiPrefix = 'http://localhost:8099/api/findings/';

module.exports = React.createClass({

    getInitialState: function() {
        return {
            //Vyzkum: this.props.finding.Vyzkum,
            //Objekt: this.props.finding.Objekt,
            //Vzorek: this.props.finding.Vzorek,
            //PCODE: this.props.finding.PCODE,
            //frakce: this.props.finding.frakce,
            //makrozbTyp: this.props.finding.makrozbTyp,
            //rPocet: this.props.finding.rPocet,
            //odhad: this.props.finding.odhad,
            //nasobitel: this.props.finding.nasobitel,
            //FPocet: this.props.finding.FPocet,
            //datVloz: this.props.finding.datVloz,
            //poznFrakce: this.props.finding.poznFrakce,
            //Taxon: this.props.finding.Taxon
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
        //axios.put(apiPrefix + this.props.finding._id, {
        //    Vyzkum : this.state.Vyzkum,
        //    Objekt : this.state.Objekt,
        //    Vzorek : this.state.Vzorek,
        //    PCODE : this.state.PCODE,
        //    frakce : this.state.frakce,
        //    makrozbTyp : this.state.makrozbTyp,
        //    zach : this.state.zach,
        //    rPocet : this.state.rPocet,
        //    odhad : this.state.odhad,
        //    nasobitel : this.state.nasobitel,
        //    FPocet : this.state.FPocet,
        //    datVloz : this.state.datVloz,
        //    poznFrakce : this.state.poznFrakce,
        //    Taxon : this.state.Taxon
        //})
    },

    render: function(){

    }
});
