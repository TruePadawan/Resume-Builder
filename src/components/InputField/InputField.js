import React from "react";
import "./inputField.css";

export class InputField extends React.Component {
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

export class TextArea extends React.Component {
    render() {
        const isRequired = this.props.isRequired;
        const label = this.props.label;

        if (isRequired)
        {
            return (
                <span className="inputField">
                    <label htmlFor={label}>{label}</label>
                    <textarea id={label} required/>
                </span>
            );
        }
        return (
          <span className="inputField">
            <label htmlFor={label}>{label}</label>
            <textarea id={label} />
          </span>
        );
    }
};