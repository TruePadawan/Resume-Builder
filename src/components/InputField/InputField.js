import "./inputField.css";

/*
    Input Field Props - isRequired, type, label, placeholder, value, list
*/

export const InputField = (props) => {
  const inputType = props.type || "text";
  const isInputRequired = props.isRequired || false;
  const inputLabel = props.label;
  const placeholder = props.placeholder;
  const value = props.value;
  const list = props.listID;
  const dataList = props.list;
  const disabled = props.disabled || false;
  const className = props.className;

  if (isInputRequired) {
    return (
      <span className="inputField">
        <label htmlFor={inputLabel}>{inputLabel}</label>
        <input
          disabled={disabled}
          className={className}
          id={inputLabel}
          type={inputType}
          required
          placeholder={placeholder}
          defaultValue={value}
          list={list}
          ref={props.compRef}
        />
        {dataList !== "" && dataList}
      </span>
    );
  }
  return (
    <span className="inputField">
      <label htmlFor={inputLabel}>{inputLabel}</label>
      <input
        disabled={disabled}
        className={className}
        id={inputLabel}
        type={inputType}
        placeholder={placeholder}
        defaultValue={value}
        ref={props.compRef}
      />
      {dataList !== "" && dataList}
    </span>
  );
};

export const TextArea = (props) => {
  const isRequired = props.isRequired;
  const label = props.label;
  const placeholder = props.placeholder || "";
  const value = props.value || "";
  const className = props.className;

  if (isRequired) {
    return (
      <span className="inputField">
        <label htmlFor={label}>{label}</label>
        <textarea
          className={className}
          id={label}
          required
          placeholder={placeholder}
          defaultValue={value}
          ref={props.compRef}
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
        ref={props.compRef}
      />
    </span>
  );
};