import React from 'react';
import $ from 'jquery';
import formBuilder from 'formBuilder';
import 'jquery-ui';
import {Button} from "react-bootstrap";

/**
 * Wrapper for building schemas
 */
class FormBuilder extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
        };

        this.sendSchema = this.sendSchema.bind(this);

    }

    /**
     * Initialize formBuilder and render it with options
     */
    componentDidMount() {
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

    /**
     * Get schema data object from formBuilder and send it to the parent component
     */
    sendSchema() {
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

export default FormBuilder;