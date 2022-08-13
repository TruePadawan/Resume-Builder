import { useRef, useState } from "react";
import { InputField, TextArea } from "../InputField/InputField";
import Button from "../Button/Button";
import "./dataItem.css";

const WorkItem = (props) => {
  let { id, company, position, from, to, highlights } = props.itemData;
  const [isWorkOngoing, setIsWorkOngoing] = useState(false);
  const companyRef = useRef();
  const workTitleRef = useRef();
  const timeframeFromRef = useRef();
  const timeframeToRef = useRef();
  const employmentTypeRef = useRef();
  const highlightsRef = useRef();

  const modifyWorkStatus = () => {
    setIsWorkOngoing(current => !current);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    let itemData = {
      id,
      company : companyRef.current.value,
      position : workTitleRef.current.value,
      from : timeframeFromRef.current.value,
      to : timeframeToRef.current.value,
      employmentType : employmentTypeRef.current.value,
      highlights : highlightsRef.current.value
    };

    if (isWorkOngoing) itemData.to = "Present";
    props.onUpdate(itemData);
  }

  return (
    <li className="work-item data">
      <hr />
      <form className="cv-form" onSubmit={submitHandler}>
        <div className="flex-row">
          <InputField isRequired={true} label="Organization*" value={company} compRef={companyRef} />
          <InputField isRequired={true} label="Work title*" value={position} compRef={workTitleRef} />
        </div>
        <div className="flex-row">
          <div className="flex-row">
            <InputField
              isRequired={true}
              label="From*"
              type={"date"}
              value={from}
              compRef={timeframeFromRef}
            />
            <InputField
              disabled={isWorkOngoing}
              isRequired={true}
              label="To*"
              type={"date"}
              value={to}
              compRef={timeframeToRef}
            />
          </div>
          <div className="employment-type inputField">
            <label htmlFor="employment">Employment type*</label>
            <select id="employment" ref={employmentTypeRef}>
              <option value={"Self-Employed"}>Self-Employed</option>
              <option value={"Full-time"}>Full-time</option>
              <option value={"Part-time"}>Part-time</option>
              <option value={"Freelance"}>Freelance</option>
              <option value={"Contract"}>Contract</option>
              <option value={"Internship"}>Internship</option>
              <option value={"Apprenticeship"}>Apprenticeship</option>
              <option value={"Seasonal"}>Seasonal</option>
            </select>
          </div>
        </div>
        <div className="work-ongoing">
          <input type={"checkbox"} onChange={modifyWorkStatus}/>
          <label>Ongoing</label>
        </div>
        <TextArea label="Highlights" value={highlights} compRef={highlightsRef} />
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
