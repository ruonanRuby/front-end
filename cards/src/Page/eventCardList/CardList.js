import React from 'react';
import Card from 'antd/lib/card';
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { loadList } from "../actionCreators/List";
import { Pages } from "../Page";
import "../../App.css";

const { Meta } = Card;

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList: []
        };
    }

    componentDidMount() {
        loadList(this.props.dispatch);
    }

    render() {
        return (
            <div className="App">
                <Row>
                    {this._getList(this.props.listStore.events)}
                </Row>
            </div>
        )
    }

    _getList(eventList) {
        const style = {
            paddingTop: "3%",
            paddingLeft: "5%"
        };
        return eventList.map(event => (
            <Col className="eventCol" style={style}
                xs={24} sm={12} md={8} lg={6} key={event.id}>
                {this._getSingleCard(event)}
            </Col>
        ));
    }

    _getSingleCard(event) {
        const flight = this.props.flightsStore.flights.flights;
        console.log(flight);
        return (
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="eventImage" src={require('../../logo.svg')} />}
                onClick={this._gotoDetails.bind(this, event)}>
                <Meta title={event.title} description={flight.includes("A") ? event.category + " " : null} />
            </Card>
        )
    }

    _gotoDetails(event) {
        this.props.history.push(`${Pages.SingleCard}/${event.id}`);
    }

    _gotoCreate() {
        this.props.history.push(Pages.CreateEvent);
    }

}

export default CardList;