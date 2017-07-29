import React from 'react';

import $ from 'jquery';
require('jquery-ui');

import formBuilder from 'formBuilder';

export default class FormBuilder extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
        };

        this.sendSchema = this.sendSchema.bind(this);

    }

    componentDidMount() {
        const {formbuilder} = this.refs;

        let options = {
            showActionButtons: false,
            dataType: 'json'
        };

        global.fb = $(formbuilder).formBuilder(options);
    }

    sendSchema() {
        let schemaObj = fb.actions.getData();
        this.props.sendFindingSchema(schemaObj);
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
