import { useRef } from "react";
import { InputField } from "../InputField/InputField";
import Button from "../Button/Button";

const SkillItem = ({ onUpdate, itemData, onDeleteBtnClicked }) => {
    const categoryRef = useRef();
    const skillsRef = useRef();
    const { id, category, skills } = itemData;

    const submitHandler = (e) => {
        e.preventDefault();
        const newItemData = {
            id,
            category : categoryRef.current.value,
            skills : skillsRef.current.value
        }
        onUpdate(newItemData);
    };

    return (
        <li className="data-item">
            <hr />
            <form className="cv-form" onSubmit={submitHandler}>
                <div className="flex-row">
                    <InputField
                        isRequired={true}
                        label={"Category"}
                        value={category}
                        compRef={categoryRef}
                    />
                    <InputField
                        isRequired={true}
                        label={"Skills"}
                        value={skills}
                        compRef={skillsRef}
                    />
                </div>
                <Button className="add-btn" btnType={"submit"}>Update</Button>
                <Button className="delete-btn" onClick={onDeleteBtnClicked}>Delete</Button>
            </form>
        </li>
    )
}

export default SkillItem;