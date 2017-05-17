import React from 'react';
import schema from '../../../schema.json';
import axios from 'axios';
import {apiPrefix} from "../../App.jsx";


// Perform a post request to save a formData
const onSubmit = ({formData}) =>  axios.post(apiPrefix, formData)
    .then(() => {
        console.log("Saving success")
    });



export default class Create extends React.Component {

    render() {
        return (
            <div>Schema form</div>
        )
    }
}
