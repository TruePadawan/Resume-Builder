import React from "react";
import "./inputField.css";

/*
    Input Field Props - isRequired, type, label, placeholder, value
*/
export class InputField extends React.Component {
    render() {
        const inputType = this.props.type || "text";
        const isInputRequired = this.props.isRequired;
        const inputLabel = this.props.label;
        const placeholder = this.props.placeholder || "";
        const value = this.props.value || "";

        if (isInputRequired)
        {
            return (
                <span className="inputField">
                    <label htmlFor={inputLabel}>{inputLabel}</label>
                    <input id={inputLabel} type={inputType} required placeholder={placeholder} defaultValue={value} />
                </span>
            );
        }
        return (
          <span className="inputField">
            <label htmlFor={inputLabel}>{inputLabel}</label>
            <input id={inputLabel} type={inputType} placeholder={placeholder} defaultValue={value} />
          </span>
        );
    }
};

export class TextArea extends React.Component {
    render() {
        const isRequired = this.props.isRequired;
        const label = this.props.label;
        const placeholder = this.props.placeholder || "";
        const value = this.props.value || "";

        if (isRequired)
        {
            return (
                <span className="inputField">
                    <label htmlFor={label}>{label}</label>
                    <textarea id={label} required placeholder={placeholder} defaultValue={value} />
                </span>
            );
        }
        return (
          <span className="inputField">
            <label htmlFor={label}>{label}</label>
            <textarea id={label} placeholder={placeholder} defaultValue={value} />
          </span>
        );
    }
};