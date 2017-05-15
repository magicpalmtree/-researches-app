import React from 'react';

import FindingList from './finding/List.jsx';
import Create from './finding/Create.jsx'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';

const paperStyle = {
    margin: '20px',
    padding: '20px'
};

export default class Main extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            openDialog: false,
        };
    }

    toggleOpen() {
        this.setState({openDialog: true});
    }

    render() {
        return(
            <div>
                <AppBar
                    title={<span>Researches app</span>}
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={<FlatButton label="Create" onTouchTap={this.toggleOpen.bind(this)}/>}
                />

                <Dialog
                    title="Create new"
                    modal={true}
                    open={this.state.openDialog}
                >

                </Dialog>

                <Paper style={paperStyle}>
                    <FindingList />
                    <ul className="md-ui component-pagination">
                        <li className="pagination-arrow arrow-left"><i className="material-icons">keyboard_arrow_left</i></li>
                        <li className="pagination-number">1</li>
                        <li className="pagination-number">2</li>
                        <li className="pagination-number current-number">3</li>
                        <li className="pagination-number">4</li>
                        <li className="pagination-number">5</li>
                        <li className="pagination-arrow arrow-right"><i className="material-icons">keyboard_arrow_right</i></li>
                    </ul>
                </Paper>
            </div>
        );
    }
}