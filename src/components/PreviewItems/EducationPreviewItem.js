import "./previewItem.css";

const EducationPreviewItem = (props) => {
    let { id, from, to, school, course, degreeType } = props.itemData;
    if (to === undefined || to === "") to = "Ongoing";

    return (
        <li className="edu-item" key={id}>
          <div className="college-name-course">
            <span className="school">{school}</span>
            <span className="course">{course}</span>
          </div>
          <div className="timeframe-degree-type">
            <span className="timeframe">{`${from} - ${to}`}</span>
            <span className="degree-type">{degreeType}</span>
          </div>
          {/* <span className="timeframe">{`${from} - ${to}`}</span>
          <ul className="details">
            <li className="school">{school}</li>
            <li className="course">{course}</li>
            <li className="degree-type">{`${degreeType} Degree`}</li>
          </ul> */}
        </li>
    );
}

export default EducationPreviewItem;