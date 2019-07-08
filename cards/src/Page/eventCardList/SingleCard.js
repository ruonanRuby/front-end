import React from 'react';
import Button from "antd/lib/button";
import './singleCard.css';


class SingleCard extends React.Component {
    
    render() {
        console.log(this.props);
        const style = {
            margin: '20px',
        }
        return (
            <div className = "App" style = {style} >
                <div>
                    {`this is ${JSON.stringify(this.props.listStore.events[this.props.match.params.id])}`}
                </div>
                <Button className = "createNewButton" onClick = {() => this.props.history.go(-1)} >Go Back</Button>
            </div>
        )
    }
}

export default SingleCard;