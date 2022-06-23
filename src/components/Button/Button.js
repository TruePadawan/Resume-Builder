import React from "react";
import "./Button.css";


export default class Button extends React.Component {
    render() {
        const clickEvent = this.props.onClick || null;
        const btnType = this.props.btnType || "button";
        const btnClass = `btn ${this.props.className}`;

        if (clickEvent !== null)
        {
            return (
                 <button className={btnClass} type={btnType} onClick={clickEvent}>{this.props.children}</button>
            );
        }
        return (
            <button className={btnClass} type={btnType}>{this.props.children}</button>
       );
    }
}