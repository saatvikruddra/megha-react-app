import React from 'react';

const Button = (props) => {
    return(
        <button 
            className="myBtn" 
            onClick={props.clickHandler}
        >
            {props.children}
        </button>
    );
}

export default Button;