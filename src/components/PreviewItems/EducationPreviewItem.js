import "./previewItem.css";

const EducationPreviewItem = (props) => {
    let { id, from, to, school, course, degreeType } = props.itemData;
    if (to === undefined || to === "") to = "Ongoing";

    return (
        <li className="item" key={id}>
          <span className="timeframe">{`${from} - ${to}`}</span>
          <ul className="details">
            <li className="school">{school}</li>
            <li className="course">{course}</li>
            <li className="degree-type">{`${degreeType} Degree`}</li>
          </ul>
        </li>
    );
}

export default EducationPreviewItem;