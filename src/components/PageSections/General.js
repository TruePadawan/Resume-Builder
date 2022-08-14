import { useRef } from "react";
import { InputField, TextArea } from "../InputField/InputField";
import Button from "../Button/Button";
import Section from "../Section/Section";

const General = ({ onUpdate }) => {
  const fullNameInputRef = useRef();
  const locationInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const linkedinInputRef = useRef();
  const personalSiteInputRef = useRef();
  const descInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
        fullName : fullNameInputRef.current.value,
        jobTitle : locationInputRef.current.value,
        email : emailInputRef.current.value,
        phoneNumber : phoneInputRef.current.value,
        linkedIn : linkedinInputRef.current.value,
        personalSite : personalSiteInputRef.current.value,
        desc : descInputRef.current.value,
    }
    onUpdate(data);
  }

  return (
    <Section sectionTitle="General Information">
      <form className="cv-form" onSubmit={submitHandler}>
        <div className="flex-row">
          <InputField
            label="Full Name*"
            isRequired={true}
            compRef={fullNameInputRef}
          />
          <InputField label="Location" compRef={locationInputRef} placeholder={"Lagos, Nigeria"} />
        </div>
        <div className="flex-row">
          <InputField
            label="Email*"
            isRequired={true}
            type={"email"}
            compRef={emailInputRef}
          />
          <InputField
            label="Phone Number"
            type={"tel"}
            placeholder="+2349012345678"
            compRef={phoneInputRef}
          />
        </div>
        <div className="flex-row">
          <InputField
            label="LinkedIn URL"
            placeholder="linkedin.com/in/mary-sue"
            compRef={linkedinInputRef}
          />
          <InputField
            label="Personal Site"
            placeholder="marysue.com"
            compRef={personalSiteInputRef}
          />
        </div>
        <TextArea label="Personal Description" compRef={descInputRef} />
        <Button className="update-btn" btnType="submit">Update</Button>
      </form>
    </Section>
  );
};

export default General;
