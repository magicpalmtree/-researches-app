import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FindingList from './components/FindingList.js';

export default apiPrefix = 'http://localhost:8099/api/findings/';

injectTapEventPlugin();

export default class App extends React.Component {

    render() {
        return(
            <FindingList />
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));