import { useRef } from "react";
import Section from "../Section/Section";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import { InputField, TextArea } from "../InputField/InputField";

const Projects = ({addItem, children}) => {
    const titleRef = useRef();
    const techRef = useRef();
    const descRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            id : uuidv4(),
            title : titleRef.current.value,
            tech : techRef.current.value,
            desc : descRef.current.value
        }
        addItem(data);
        clearInputFields();
    }
    const clearInputFields = () => {
        titleRef.current.value = "";
        techRef.current.value = "";
        descRef.current.value = "";
    }

    return (
        <Section sectionTitle="Projects">
            <form className="cv-form" onSubmit={submitHandler}>
                <div className="flex-row">
                    <InputField 
                        isRequired={true}
                        label={"Project title"}
                        compRef={titleRef}
                        placeholder={"TodoList"}
                    />
                    <InputField 
                        isRequired={true}
                        label={"Technologies"}
                        compRef={techRef}
                        placeholder={"HTML, CSS, JavaScript"}
                    />
                </div>
                <TextArea label={"Project description"} compRef={descRef} />
                <Button className="add-btn" btnType="submit">Add</Button>
            </form>
            {children}
        </Section>
    );
}

export default Projects;