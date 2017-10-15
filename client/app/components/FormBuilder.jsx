import React from 'react';
import $ from 'jquery';
import formBuilder from 'formBuilder';
import 'jquery-ui';

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
            dataType: 'json'
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
                <button style={{'marginTop': '30px'}} onClick={this.sendSchema}>Create a form</button>
            </div>
        )
    }

}
