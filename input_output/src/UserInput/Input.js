import React from 'react';


const UserInput = (props) => {
    return (
        <input type = "text" name = "userInput" 
        value = {props.value} onChange = {props.changed}
        />

    )
}

 export default UserInput;
