import React from 'react';
import ReactDOM from "react-dom";

import Main from "./components/Main.jsx";

export const apiPrefix = 'http://localhost:8099/api/findings/';

export default class App extends React.Component {

    render() {
        return(
            <Main />
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));