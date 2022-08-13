import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "../Section/Section";
import { InputField } from "../InputField/InputField";
import Button from "../Button/Button";

const Education = (props) => {
  const universityInputRef = useRef();
  const courseInputRef = useRef();
  const degreeTypeInputRef = useRef();
  const timeframeFromRef = useRef();
  const timeframeToRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const from = timeframeFromRef.current.value;
    const to = timeframeToRef.current.value;
    const school = universityInputRef.current.value;
    const course = courseInputRef.current.value;
    const degreeType = degreeTypeInputRef.current.value;

    const itemData = { id, from, to, school, course, degreeType };
    props.addItem(itemData);
    clearInputFields();
  };

  const clearInputFields = () => {
    timeframeFromRef.current.value = "";
    timeframeToRef.current.value = "";
    universityInputRef.current.value = "";
    courseInputRef.current.value = "";
    degreeTypeInputRef.current.value = "";
  };

  return (
    <Section sectionTitle="Education">
      <form className="cv-form" onSubmit={formSubmitHandler}>
        <InputField
          isRequired={true}
          label="University/College*"
          compRef={universityInputRef}
        />
        <div className="flex-row">
          <InputField
            isRequired={true}
            label="Course*"
            compRef={courseInputRef}
          />
          <InputField
            isRequired={true}
            label="Degree type*"
            placeholder="Bachelors"
            listID="degrees"
            list={props.degreeTypes}
            compRef={degreeTypeInputRef}
          />
        </div>
        <div className="flex-row">
          <InputField
            isRequired={true}
            label="From*"
            type={"number"}
            compRef={timeframeFromRef}
          />
          <InputField
            label="To (empty for ongoing)"
            type={"number"}
            compRef={timeframeToRef}
          />
        </div>
        <Button className="add-btn" btnType="submit">Add</Button>
      </form>
      {props.children}
    </Section>
  );
};

export default Education;
