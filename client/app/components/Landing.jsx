import React from 'react';
import {Well} from "react-bootstrap";

/**
 * Represent a landing page.
 */
class Landing extends React.Component {
    /**
     * Constructor
     * @param props
     * @param context
     */
    constructor(props, context) {
        super(props, context);
    }

    /**
     * Render method
     * @returns {XML}
     */
    render() {
        return (
            <div className="container">

                <h1>Reaserchers DB</h1>
                <Well>
                    <h2>Welcome to Reaserchers DB</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia erat magna, nec tincidunt lacus auctor at. Mauris eget ante vitae orci lacinia bibendum vel vitae enim. Etiam dolor mi, suscipit ut enim eu, hendrerit aliquet turpis. Donec eu metus at ex commodo consequat. Aliquam rutrum erat sed purus sodales mollis. Praesent a condimentum orci. Nullam aliquet est non ex tempor facilisis. Nam odio diam, fermentum eu scelerisque eget, egestas et lectus.</p>

                    <a href="#" className="btn btn-success disabled">Log in</a>

                </Well>

            </div>
        );
    }
}

export default Landing