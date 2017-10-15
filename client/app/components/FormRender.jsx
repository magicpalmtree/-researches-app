import React from 'react';

import $ from 'jquery';
import 'jquery-ui';


export default class FormRender extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            schema: []
        };

        this.renderPlugin = this.renderPlugin.bind(this);
    }

    renderPlugin(definition) {
        const {formrender} = this.refs;
        let options = {
            dataType: 'json',
            formData: definition
        };
        global.fr = $(formrender).formRender(options);
    }

    componentDidMount(){
        this.renderPlugin(this.props.schema[0].definition);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({schema: nextProps.schema}, () => {
            this.renderPlugin(this.state.schema[0].definition);
        });
    }



    render() {
        return (
            <form name="dynamicForm" ref="formrender"></form>
        )
    }

}

