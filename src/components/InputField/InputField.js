import React from "react";
import "./inputField.css";

/*
    Input Field Props - isRequired, type, label, placeholder, value, list
*/
export class InputField extends React.Component {
    render() {
        const inputType = this.props.type || "text";
        const isInputRequired = this.props.isRequired || false;
        const inputLabel = this.props.label;
        const placeholder = this.props.placeholder;
        const value = this.props.value;
        const list = this.props.listID;
        const dataList = this.props.list;
        const className = this.props.className;

        if (isInputRequired)
        {
            return (
              <span className="inputField">
                <label htmlFor={inputLabel}>{inputLabel}</label>
                <input
                  className={className}
                  id={inputLabel}
                  type={inputType}
                  required
                  placeholder={placeholder}
                  defaultValue={value}
                  list={list}
                  ref={this.props.compRef}
                />
                {dataList !== "" && dataList}
              </span>
            );
        }
        return (
          <span className="inputField">
            <label htmlFor={inputLabel}>{inputLabel}</label>
            <input
              className={className}
              id={inputLabel}
              type={inputType}
              placeholder={placeholder}
              defaultValue={value}
              ref={this.props.compRef}
            />
            {dataList !== "" && dataList}
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
        const className = this.props.className;

        if (isRequired)
        {
            return (
              <span className="inputField">
                <label htmlFor={label}>{label}</label>
                <textarea
                  className={className}
                  id={label}
                  required
                  placeholder={placeholder}
                  defaultValue={value}
                  ref={this.props.compRef}
                />
              </span>
            );
        }
        return (
          <span className="inputField">
            <label htmlFor={label}>{label}</label>
            <textarea
              className={className}
              id={label}
              placeholder={placeholder}
              defaultValue={value}
              ref={this.props.compRef}
            />
          </span>
        );
    }
};