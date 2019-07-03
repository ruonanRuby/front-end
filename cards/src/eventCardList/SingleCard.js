import React from 'react';
import Button from "antd/lib/button";
import './singleCard.css';
import {Pages} from "../App";


class SingleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event : null
        };
    }

    goback = () => {
        this.props.goto(Pages.CardList);
    }

    render() {
        const style = {
            margin: '20px',
        }
        return (
            <div className = "App" style = {style} >
                <div>{`this is event ${JSON.stringify(this.props.params.event)}`} </div>
                <Button className = "createNewButton" onClick = {this.goback}>Go Back</Button>
            </div>
        )
    }
}

export default SingleCard;