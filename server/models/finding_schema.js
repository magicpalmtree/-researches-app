const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FindingSchemaSchema = new Schema({name: String}, {strict: false});

const FindingSchema = mongoose.model('finding_schema', FindingSchemaSchema);

module.exports = FindingSchema;