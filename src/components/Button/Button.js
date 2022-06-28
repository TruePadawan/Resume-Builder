import "./Button.css";

const Button = (props) => {
  const clickEvent = props.onClick || null;
  const btnType = props.btnType || "button";
  const btnClass = `btn ${props.className}`;

  if (clickEvent !== null) {
    return (
      <button className={btnClass} type={btnType} onClick={clickEvent}>
        {props.children}
      </button>
    );
  }
  return (
    <button className={btnClass} type={btnType}>
      {props.children}
    </button>
  );
};

export default Button;