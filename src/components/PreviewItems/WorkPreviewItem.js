import { format } from "date-fns";
import "./previewItem.css";

const WorkPreviewItem = ({ itemData }) => {
  let { company, position, from, to, employmentType, highlights } = itemData;
  from = format(new Date(from), "MMM yyy");
  if (to !== "Present") to = format(new Date(to), "MMM yyy");

  return (
    <li className="work-preview-item">
      <div className="details">
        <div className="head">
          <span className="position-company">
            <p className="position">{`${position} |`}</p>
            <span className="employment-type">{employmentType}</span>
          </span>
          <p className="company">{company}</p>
        </div>
        <p className="timeframe">{`${from} - ${to}`}</p>
      </div>
      <p className="highlights">{highlights}</p>
    </li>
  );
};

export default WorkPreviewItem;
