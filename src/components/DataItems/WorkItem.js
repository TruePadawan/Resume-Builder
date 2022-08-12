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
          <InputField isRequired={true} label="Organization*" value={company} />
          <InputField isRequired={true} label="Work title*" value={position} />
        </div>
        <div className="flex-row">
          <div className="flex-row">
            <InputField
              isRequired={true}
              label="From*"
              type={"date"}
              value={from}
              placeholder="Year"
            />
            <InputField
              label="To (empty for ongoing)"
              type={"date"}
              value={to}
              placeholder="Year"
            />
          </div>
          <div className="employment-type inputField">
            <label htmlFor="employment">Employment type*</label>
            <select id="employment">
              <option value={"self-employed"}>Self-Employed</option>
              <option value={"full-time"}>Full-time</option>
              <option value={"part-time"}>Part-time</option>
              <option value={"freelance"}>Freelance</option>
              <option value={"contract"}>Contract</option>
              <option value={"internship"}>Internship</option>
              <option value={"apprenticeship"}>Apprenticeship</option>
              <option value={"seasonal"}>Seasonal</option>
            </select>
          </div>
        </div>
        <div className="work-ongoing">
          <input type={"checkbox"} id="ongoing" />
          <label htmlFor={"ongoing"}>Ongoing</label>
        </div>
        <TextArea label="Highlights" value={highlights} />
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

export default WorkItem;
