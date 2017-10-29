import React from 'react';
import {Well} from "react-bootstrap";

export default class Landing extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="container">

                <h1>Reaserchers DB</h1>
                <Well>
                    <h2>Welcome to Reaserchers DB</h2>

                    <a href="#" className="btn btn-success disabled">Log in</a>

                </Well>

            </div>
        );
    }
}