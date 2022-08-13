import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "../Section/Section";
import { InputField, TextArea } from "../InputField/InputField";
import Button from "../Button/Button";

const WorkExperience = (props) => {
    const [isWorkOngoing, setIsWorkOngoing] = useState(false);
    const companyInputRef = useRef();
    const positionInputRef = useRef();
    const timeframeFromInputRef = useRef();
    const timeframeToInputRef = useRef();
    const employmentTypeRef = useRef();
    const highlightsInputRef = useRef();

    const modifyWorkStatus = () => {
      setIsWorkOngoing(current => !current);
    }

    const getItem = () => {
        const id = uuidv4();
        const company = companyInputRef.current.value;
        const position = positionInputRef.current.value;
        const from = timeframeFromInputRef.current.value;
        let to = timeframeToInputRef.current.value;
        const employmentType = employmentTypeRef.current.value;
        const highlights = highlightsInputRef.current.value;

        if (isWorkOngoing) to = "Present";

        return {
          id,
          company,
          position,
          from,
          to,
          employmentType,
          highlights,
        };
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.addItem(getItem());
        clearInputFields();
    }
    
    const clearInputFields = () => {
        companyInputRef.current.value = "";
        positionInputRef.current.value = "";
        timeframeFromInputRef.current.value = "";
        timeframeToInputRef.current.value = "";
        highlightsInputRef.current.value = "";
    };

    return (
      <Section sectionTitle="Work Experience">
        <form className="cv-form" onSubmit={submitHandler}>
          <div className="flex-row">
            <InputField
              isRequired={true}
              label="Organization*"
              compRef={companyInputRef}
            />
            <InputField
              isRequired={true}
              label="Work title*"
              compRef={positionInputRef}
            />
          </div>

          <div className="flex-row">
            <div className="flex-row">
              <InputField
                isRequired={true}
                label="From*"
                type={"date"}
                compRef={timeframeFromInputRef}
              />
              <InputField
                disabled={isWorkOngoing}
                isRequired={true}
                label="To*"
                type={"date"}
                compRef={timeframeToInputRef}
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
            <input type={"checkbox"} id="ongoing" onChange={modifyWorkStatus} />
            <label htmlFor={"ongoing"}>Ongoing</label>
          </div>

          <TextArea label="Highlights" compRef={highlightsInputRef} />
          <Button className="add-btn" btnType="submit">Add</Button>
        </form>
        {props.children}
      </Section>
    );
}

export default WorkExperience;