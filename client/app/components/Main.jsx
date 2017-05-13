import React from 'react';

import FindingList from './finding/FindingList.jsx';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';


export default class Main extends React.Component {

    render() {
        return(
            <div>
                <AppBar
                    title={<span>Researches app</span>}
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={<FlatButton label="Create" />}
                />

                <FindingList />
            </div>
        );
    }
}