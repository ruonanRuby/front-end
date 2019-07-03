import React from 'react';
import Card from 'antd/lib/card';
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import dataLayer from "../dataLayer";
import {Pages} from "../App";
import "../App.css";

const { Meta } = Card;

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList:[]
        };
    }
    
    componentDidMount() {
        dataLayer.getEvents().then(values => {
            this.setState({
                eventList: values.posts
            });
        });
    }

    render() {
        return (
            <div className = "App">
                <Button className = "createNewButton" onClick = {this._gotoCreate.bind(this)}>Create A New Event</Button>
                <Row>
                    {this._getList(this.state.eventList)}
                </Row>
             </div>
        )
    }

    _getList(eventList) {
        const style = {
            paddingTop: "3%",
            paddingLeft: "5%"
        };
        return eventList.map( event => (
                <Col className = "eventCol" style = {style}
                    xs = {24} sm = {12} md = {8} lg = {6} key = {event.id}>
                        {this._getSingleCard(event)}
                </Col>
            ));
    }

    _getSingleCard(event) {
        return (
            <Card
        hoverable 
        style = {{ width: 240 }}
        cover = {<img alt = "eventImage" src = {require('../logo.svg')} />}
        onClick = {this._gotoDetails.bind(this, event)}>
        <Meta title = {event.title} description = {event. content} />
        </Card>
        )
    }

    _gotoDetails(event) {
        this.props.goto(Pages.SingleCard, {event});
    } 

    _gotoCreate() {
        this.props.goto(Pages.CreateEvent);
    }

}

export default CardList;