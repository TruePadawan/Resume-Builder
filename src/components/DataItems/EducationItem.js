import { useRef } from "react";
import { InputField } from "../InputField/InputField";
import Button from "../Button/Button";
import "./dataItem.css";

const EducationItem = (props) => {
  const universityRef = useRef();
  const courseRef = useRef();
  const degreeTypeRef = useRef();
  const timeframeFromRef = useRef();
  const timeframeToRef = useRef();

  let { id, from, to, school, course, degreeType } = props.itemData;
  if (to === undefined) to = "";

  const submitHandler = (e) => {
    e.preventDefault();
    const itemData = {
      id,
      from: timeframeFromRef.current.value,
      to: timeframeToRef.current.value,
      school: universityRef.current.value,
      course: courseRef.current.value,
      degreeType: degreeTypeRef.current.value,
    };
    props.onUpdate(itemData);
  }

  return (
    <li className="edu-item data">
      <hr />
      <form className="cv-form" onSubmit={submitHandler}>
        <InputField
          isRequired={true}
          label="University/College*"
          value={school}
          compRef={universityRef}
        />
        <div className="flex-row">
          <InputField
            isRequired={true}
            label="Course*"
            value={course}
            compRef={courseRef}
          />
          <InputField
            isRequired={true}
            label="Degree Type*"
            placeholder="Bachelors"
            listID="degrees"
            list={props.degreeTypes}
            value={degreeType}
            compRef={degreeTypeRef}
          />
        </div>
        <div className="flex-row">
          <InputField
            isRequired={true}
            label="From*"
            type={"number"}
            value={from}
            compRef={timeframeFromRef}
          />
          <InputField
            label="To (empty for ongoing)"
            value={to}
            type={"number"}
            compRef={timeframeToRef}
          />
        </div>
        <Button className="add-btn" btnType="submit">
          Update
        </Button>
        <Button className="delete-btn" onClick={props.onDeleteBtnClicked}>
          Delete
        </Button>
      </form>
    </li>
  );
};

export default EducationItem;
