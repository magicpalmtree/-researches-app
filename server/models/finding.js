const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema as strict:false because we will want
const FindingSchema = new Schema({
    Vyzkum : String,
    Objekt : String,
    Vzorek : String,
    PCODE : String,
    frakce : String,
    makrozbTyp : String,
    zach : String,
    rPocet : Number,
    odhad : Boolean,
    nasobitel : Number,
    FPocet : Number,
    datVloz : Date,
    poznFrakce : Number,
    Taxon : String
}, {strict: false});

const Finding = mongoose.model('finding', FindingSchema);

module.exports = Finding;