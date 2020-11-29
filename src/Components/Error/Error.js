import React from 'react';
import "./Error.scss";

const Error = (props) => {
    let errorDivStyle = {
        border:props.border,
        borderRadius:props.borderRadius,
        padding:props.padding,
        margin:props.margin,
        backgroundColor:props.backgroundColor,
    }
    let errorParagraphStyle = {
        color:props.textColor,
    }
    return (
        <div style={errorDivStyle} className="Error">
            <p style={errorParagraphStyle}>{props.message}</p>
        </div>
    );
}

export {Error};
