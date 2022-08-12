import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "../Section/Section";
import { InputField, TextArea } from "../InputField/InputField";
import Button from "../Button/Button";

const WorkExperience = (props) => {
    const companyInputRef = useRef();
    const positionInputRef = useRef();
    const timeframeFromInputRef = useRef();
    const timeframeToInputRef = useRef();
    const highlightsInputRef = useRef();

    const getItem = () => {
        const id = uuidv4();
        const company = companyInputRef.current.value;
        const position = positionInputRef.current.value;
        const from = timeframeFromInputRef.current.value;
        const to = timeframeToInputRef.current.value;
        const highlights = highlightsInputRef.current.value;

        return {
          id,
          company,
          position,
          from,
          to,
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
                    placeholder="Year"
                    compRef={timeframeFromInputRef}
                  />
                  <InputField
                    label="To (empty for ongoing)"
                    type={"date"}
                    placeholder="Year"
                    compRef={timeframeToInputRef}
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
              <TextArea label="Highlights" compRef={highlightsInputRef} />
              <Button className="add-btn" btnType="submit">Add</Button>
            </form>
            {props.children}
          </Section>
    );
}

export default WorkExperience;