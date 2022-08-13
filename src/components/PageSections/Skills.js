import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "../Section/Section";
import Button from "../Button/Button";
import { InputField } from "../InputField/InputField";

const Skills = ({addItem, children}) => {
    const categoryRef = useRef();
    const skillsRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const item = {
            id : uuidv4(),
            category : categoryRef.current.value,
            skills : skillsRef.current.value
        };
        addItem(item);
        clearInputFields();
    }

    const clearInputFields = () => {
        categoryRef.current.value = "";
        skillsRef.current.value = "";
    }

    return (
        <Section sectionTitle="Skills">
            <form className="cv-form" onSubmit={submitHandler}>
                <div className="flex-row">
                    <InputField
                        isRequired={true}
                        label={"Category"}
                        placeholder={"Technical Skills"}
                        compRef={categoryRef}
                    />
                    <InputField
                        isRequired={true}
                        label={"Skills"}
                        placeholder={"MS Office, Spreadsheets, Database Management"}
                        compRef={skillsRef}
                    />
                </div>
                <Button className="add-btn" btnType={"submit"}>Add</Button>
            </form>
            {children}
        </Section>
    );
}

export default Skills;