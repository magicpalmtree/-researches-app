const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FindingSchema = new Schema({
    Lokalita : String,
    Kraj : String,
    Okres : String,
    Katastr : String,
    NadmorskaVyska : String,
    ZkoumanaPlocha : String,
    Archeolog : String,
    RokVyzkumu : Date,
    Instituce : String,
    KoordinatyXyz : String,
    Mapa : String,
    Sonda : String,
    Sektor : String,
    Objekt : String,
    TypObjektu : String,
    Vrstva : String,
    Hloubka : String,
    DataceObdobi : String,
    DataceKultura : String,
    TypNaleziste : String,
    Reference : String,
    TypOdberu : String,
    InventarizacniCislo : String,
    Poznamka : String
}, {strict: false});

const Finding = mongoose.model('finding', FindingSchema);

module.exports = Finding;