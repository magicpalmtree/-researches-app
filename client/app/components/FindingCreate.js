const React = require('react');
const schema = require('../../schema.json');
const axios = require('axios');

const apiPrefix = 'http://localhost:8099/api/findings/';

// Perform a post request to save a formData
const onSubmit = ({formData}) =>  axios.post(apiPrefix, formData)
    .then(() => {
        console.log("Saving success")
    });

module.exports = React.createClass({

    render: function() {

    }
});
