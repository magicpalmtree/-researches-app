import React from 'react';

import {Button, Collapse, Form, FormControl, FormGroup, Col, ControlLabel} from 'react-bootstrap';

/**
 * Filter component
 */
class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
    }

    open() {
        this.props.toggleOpen();
    }

    render() {
        return (
            <div style={{marginBottom: '20px'}}>
                <Button bsStyle="primary" onClick={this.open}>
                    Filter
                </Button>

                <Collapse in={this.props.isOpen}>
                    <div>
                        <Form horizontal>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={1}>
                                    Lokalita
                                </Col>
                                <Col sm={4}>
                                    <FormControl placeholder="Field 1" />
                                </Col>

                                <Col componentClass={ControlLabel} sm={1}>
                                    Kraj
                                </Col>
                                <Col sm={4}>
                                    <FormControl placeholder="Field 1" />
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </Collapse>
            </div>
        )
    }
}