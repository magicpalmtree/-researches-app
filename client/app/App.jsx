import React from 'react';
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from "./components/Landing.jsx";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import Create from "./components/finding/Create.jsx";
import Build from "./components/finding/Build.jsx";
import List from "./components/finding/List.jsx";
import ItemDetail from "./components/finding/ItemDetail.jsx";

export const apiPrefix = 'http://localhost:8099/api/findings/';
export const apiPrefixSchemas = 'http://localhost:8099/api/findings_schemas/';

/**
 * Main component of application. Renders all components.
 */
class App extends React.Component {

    /**
     * Render method
     */
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
                                {/*<LinkContainer to="/map">*/}
                                    {/*<NavItem>Map view</NavItem>*/}
                                {/*</LinkContainer>*/}
                            </Nav>

                            <Nav pullRight>
                                <LinkContainer to="/findings/create">
                                    <NavItem>Create</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/findings/build">
                                    <NavItem>Build</NavItem>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/findings" component={List}/>
                    <Route path="/finding/:id" component={ItemDetail}/>
                    <Route path="/findings/create" component={Create}/>
                    <Route path="/findings/build" component={Build}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));