import React from 'react';
import ReactDOM from "react-dom";

import Main from "./components/Main.jsx";

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const apiPrefix = 'http://localhost:8099/api/findings/';

injectTapEventPlugin();

export default class App extends React.Component {

    render() {
        return(
            <MuiThemeProvider>
                <Main />
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));