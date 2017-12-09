import React from 'react';

import $ from 'jquery';
import 'jquery-ui';


/**
 * Wrapper for rendering schemas
 */
class FormRender extends React.Component {

    /**
     * Init props, set state, binds methods
     * @param props
     * @param context
     */
    constructor(props, context) {
        super(props, context);

        this.state = {
            schema: []
        };

        this.renderPlugin = this.renderPlugin.bind(this);
    }

    /**
     * Init formRender plugin with definition and options
     * @param definition - Schema definition from props
     */
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

    /**
     * Update schema and call render when component receive new props
     * @param nextProps
     */
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

export default FormRender;