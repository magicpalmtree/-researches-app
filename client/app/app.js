const React = require('react');
const ReactDOM = require('react-dom');
const FindingList = require('./components/FindingList.js');

// Main component
let App = React.createClass({

    render: function(){
        return(
            <FindingList />
        );
    }
});

ReactDOM.render(<App/>, document.getElementById("root"));