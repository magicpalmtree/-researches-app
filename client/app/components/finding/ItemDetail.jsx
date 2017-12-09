import React from 'react';
import ReactDOM from 'react-dom';
import api from "../../../services/api";
import {Button, ListGroup, ListGroupItem, Tab, Tabs} from "react-bootstrap";

/**
 * Represent item detail
 */
class ItemDetail extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            finding: {},
            editMode: false,
        };

        this.saveItem = this.saveItem.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputDynamChange = this.onInputDynamChange.bind(this);
    }

    /**
     * @async
     * Get a single finding and set state
     * @returns {Promise.<void>}
     */
    async componentDidMount() {
        let finding = await api.getFinding(this.props.match.params.id);
        this.setState({
            finding: finding.data
        })
    }

    /**
     * Toggle between edit mode
     */
    toggleEdit() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    /**
     * Handle input change
     * @param e
     */
    onInputChange(e) {
        this.state.finding[e.target.name] = e.target.value;

        this.setState({
            finding: this.state.finding
        })
    }

    /**
     * Handle dynamic part input change
     * @param e
     */
    onInputDynamChange(e) {
        this.state.item.dynam[e.target.name] = e.target.value;

        this.setState({
            item: this.state.item
        })
    }

    /**
     * @async
     * Send a finding to api
     * @returns {Promise.<void>}
     */
    async saveItem() {
        this.toggleEdit();
        await api.updateFinding(this.state.finding._id, this.state.finding);
    }

    render() {
        return (
            <div style={{margin: '20px 25%'}}>
                <div style={{ float: 'right'}}>
                    {

                        this.state.editMode ? <Button bsStyle="primary" className={'glyphicon glyphicon-ok'} onClick={() => this.saveItem()}/> :
                            <Button bsStyle="primary" className='glyphicon glyphicon-pencil' onClick={() => this.toggleEdit()}/>
                    }
                </div>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab">
                    <Tab eventKey={1} title="Static">
                        <ListGroup fill>
                            {
                                Object.keys(this.state.finding).map((key) => {
                                    if (key !== '_id' && key !== '__v' && key !== 'dynam' && key !== 'type') {
                                        return  <ListGroupItem className="list.finding" key={key}>
                                            <span className="label-bold"> {key} </span> : {this.state.editMode ?
                                            <input className="form-control" onChange={this.onInputChange} name={key} type="text"
                                                   value={this.state.finding[key]}/> : this.state.finding[key]}
                                        </ListGroupItem>
                                    }
                                })

                            }

                        </ListGroup>
                    </Tab>
                    {this.state.finding.dynam ?
                        <Tab eventKey={2} title="Dynamic">
                            <ListGroup fill>
                                {
                                    Object.keys(this.state.finding.dynam).map((key) => {
                                        return <ListGroupItem className="list.finding" key={key}>
                                            <span className="label-bold"> {key} </span> : {this.state.editMode ?
                                            <input className="form-control" onChange={this.onInputDynamChange}
                                                   name={key} type="text"
                                                   value={this.state.finding.dynam[key]}/> : this.state.finding.dynam[key]}
                                        </ListGroupItem>
                                    })
                                }
                            </ListGroup>
                        </Tab> :
                        <div></div>
                    }
                </Tabs>
            </div>
        )
    }
}

export default ItemDetail;