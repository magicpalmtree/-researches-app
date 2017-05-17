import React from 'react';

import {Button, Collapse, Form, FormControl, FormGroup, Col, ControlLabel} from 'react-bootstrap';

export default class Filter extends React.Component {

    constructor(props) {
        super(props);
    }

    toggleOpen() {
        this.props.toggleOpenHandler();
    }

    render() {
        return (
            <div style={{marginBottom: '20px'}}>
                <Button bsStyle="primary" onClick={this.toggleOpen.bind(this)}>
                    Filter
                </Button>

                <Collapse in={this.props.open}>
                    <div>
                        <Form horizontal>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={1}>
                                    Field 1
                                </Col>
                                <Col sm={4}>
                                    <FormControl placeholder="Field 1" />
                                </Col>

                                <Col componentClass={ControlLabel} sm={1}>
                                    Field 2
                                </Col>
                                <Col sm={4}>
                                    <FormControl placeholder="Field 1" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={1}>
                                    Field 3
                                </Col>
                                <Col sm={4}>
                                    <FormControl placeholder="Field 2" />
                                </Col>

                                <Col componentClass={ControlLabel} sm={1}>
                                    Field 4
                                </Col>
                                <Col sm={4}>
                                    <FormControl placeholder="Field 2" />
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </Collapse>
            </div>
        )
    }
}