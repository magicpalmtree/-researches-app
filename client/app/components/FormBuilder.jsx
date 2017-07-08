import React from 'react';

import $ from 'jquery';
require('jquery-ui');

import formBuilder from 'formBuilder';

export default class FormBuilder extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
        };

        this.showData = this.showData.bind(this);

    }

    componentDidMount() {
        const {formbuilder} = this.refs;

        let options = {
            showActionButtons: false,
            dataType: 'json'
        };

        global.fb = $(formbuilder).formBuilder(options);
    }

    showData() {
        console.log(fb.actions.getData());
    }


    render() {
        return (
            <div>
                <div ref="formbuilder"></div>
                <button style={{'marginTop': '30px'}} onClick={this.showData}>Show data</button>
            </div>
        )
    }

}
