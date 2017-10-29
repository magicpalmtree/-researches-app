import React from 'react';
import $ from 'jquery';
import formBuilder from 'formBuilder';
import 'jquery-ui';
import {Button} from "react-bootstrap";

export default class FormBuilder extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
        };

        this.sendSchema = this.sendSchema.bind(this);

    }

    componentDidMount() {
        // Initialize formbuilder and render it at the page
        const {formbuilder} = this.refs;

        let options = {
            showActionButtons: false,
            dataType: 'json',
            disableFields: [
                'button',
                'file',
                'hidden'
            ]
        };

        global.fb = $(formbuilder).formBuilder(options);
    }

    sendSchema() {
        // Get schema data object from formbuilder and send it to the parent component
        let schemaObj = fb.actions.getData();
        this.props.sendSchema(schemaObj);
    }



    render() {
        return (
            <div>
                <div ref="formbuilder"></div>
                <Button bsStyle="primary" style={{'marginTop': '30px'}} onClick={this.sendSchema}>Create a form</Button>
            </div>
        )
    }

}
