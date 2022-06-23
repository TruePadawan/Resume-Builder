import React from "react";
import "./inputField.css";

export default class InputField extends React.Component {
    render() {
        const inputType = this.props.inputType || "text";
        const isInputRequired = this.props.isRequired;
        const inputLabel = this.props.inputLabel;

        if (isInputRequired)
        {
            return (
                <span className="inputField">
                    <label htmlFor={inputLabel}>{inputLabel}</label>
                    <input id={inputLabel} type={inputType} required/>
                </span>
            );
        }
        return (
          <span className="inputField">
            <label htmlFor={inputLabel}>{inputLabel}</label>
            <input id={inputLabel} type={inputType} />
          </span>
        );
    }
};