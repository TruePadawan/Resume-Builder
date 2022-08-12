import { InputField, TextArea } from "../InputField/InputField";
import Button from "../Button/Button";
import "./dataItem.css";

const WorkItem = (props) => {
  let { id, company, position, from, to, highlights } = props.itemData;
  if (to === undefined) to = "";

  return (
    <li key={id}>
      <hr />
      <form className="cv-form" onSubmit={props.formSubmitHandler}>
        <div className="flex-row">
          <InputField isRequired={true} label="Company*" value={company} />
          <InputField isRequired={true} label="Position*" value={position} />
        </div>
        <div className="flex-row">
          <InputField
            isRequired={true}
            label="From*"
            placeholder="Year"
            value={from}
          />
          <InputField
            label="To(empty for ongoing)"
            placeholder="Year"
            value={to}
          />
        </div>
        <TextArea label="Highlights" value={highlights} />
        <Button className="add-btn" btnType="submit">Update</Button>
        <Button className="delete-btn" onClick={props.onDeleteBtnClicked}>Delete</Button>
      </form>
    </li>
  );
};

export default WorkItem;
