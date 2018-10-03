import React from 'react';
import './Loader.css';
const Loader = (props) => {
    const { loader } = props;
    console.log(loader);

    if(loader === true){
        return (
            <div className="hide">
                <div className="loader"></div>
            </div>
        );
    }else{
        return (
            <div></div>
        );
    }
};

export default Loader;