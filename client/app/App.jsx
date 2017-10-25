import React from 'react';
import ReactDOM from "react-dom";

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Landing from "./components/Landing.jsx";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import Main from "./components/Main.jsx";
import MapView from "./components/MapView.jsx";
import {LinkContainer} from "react-router-bootstrap";

export const apiPrefix = 'http://localhost:8099/api/findings/';
export const apiPrefixSchemas = 'http://localhost:8099/api/findings_schemas/';


export default class App extends React.Component {

    render() {
        return(

            <Router>
                <div>
                    <Navbar inverse fluid staticTop>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">Researches app</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>

                            <Nav>
                                <LinkContainer to="/findings">
                                    <NavItem>Findings</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/map">
                                    <NavItem>Map view</NavItem>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route exact path="/" component={Landing}/>
                    <Route path="/findings" component={Main}/>
                    <Route path="/map" component={MapView}/>

                </div>
            </Router>

        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));