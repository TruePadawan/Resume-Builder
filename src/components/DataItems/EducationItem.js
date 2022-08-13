import { InputField } from "../InputField/InputField";
import Button from "../Button/Button";
import "./dataItem.css";

const EducationItem = (props) => {
  let { id, from, to, school, course, degreeType } = props.itemData;
  if (to === undefined) to = "";

  return (
    <li key={id} className="edu-item data">
      <hr />
      <form className="cv-form" onSubmit={props.formSubmitHandler}>
        <InputField isRequired={true} label="University*" value={school} />
        <div className="flex-row">
          <InputField isRequired={true} label="Course*" value={course} />
          <InputField
            isRequired={true}
            label="Degree Type*"
            placeholder="Bachelors"
            listID="degrees"
            list={props.degreeTypes}
            value={degreeType}
          />
        </div>
        <div className="flex-row">
          <InputField
            isRequired={true}
            label="From*"
            placeholder="Year"
            value={from}
          />
          <InputField label="To(empty for ongoing)" value={to} />
        </div>
        <Button className="add-btn" btnType="submit">Update</Button>
        <Button className="delete-btn" onClick={props.onDeleteBtnClicked}>Delete</Button>
      </form>
    </li>
  );
};

export default EducationItem;
