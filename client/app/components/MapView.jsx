import React from 'react';
import List from './finding/List.jsx';


export default class MapView extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            offset: 0,
            data: {}
        };

    }

    render() {
        return (
            <div>

                <h2>Map view</h2>

                <List />
            </div>
        );
    }
}