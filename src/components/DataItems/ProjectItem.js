import { useRef } from "react";
import { InputField, TextArea } from "../InputField/InputField";
import Button from "../Button/Button";

const ProjectItem = ({ onUpdate, itemData, onDeleteBtnClicked }) => {
  const titleRef = useRef();
  const techRef = useRef();
  const descRef = useRef();
  const { title, tech, desc } = itemData;

  const submitHandler = (e) => {
    e.preventDefault();
    const newItemData = {
      id: itemData.id,
      title: titleRef.current.value,
      tech: techRef.current.value,
      desc: descRef.current.value,
    };
    onUpdate(newItemData);
  };
  return (
    <li className="data-item">
      <hr />
      <form className="cv-form" onSubmit={submitHandler}>
        <div className="flex-row">
          <InputField
            isRequired={true}
            label={"Project title"}
            compRef={titleRef}
            value={title}
            placeholder={"TodoList"}
          />
          <InputField
            isRequired={true}
            label={"Technologies"}
            compRef={techRef}
            value={tech}
            placeholder={"HTML, CSS, JavaScript"}
          />
        </div>
        <TextArea
          label={"Project description"}
          compRef={descRef}
          value={desc}
        />
        <Button className="add-btn" btnType="submit">
          Update
        </Button>
        <Button className="delete-btn" onClick={onDeleteBtnClicked}>
          Delete
        </Button>
      </form>
    </li>
  );
};

export default ProjectItem;
