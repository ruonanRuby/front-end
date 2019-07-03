import React from 'react';


const userOutput = (props) => {
    let style = {
       backgroundColor:"salmon",
    }
    return (
        <div style = {style}>
            <p>Hi, my name is {props.name}</p>
            <p>Good to see you! </p>
        </div>
    )

}

export default userOutput;