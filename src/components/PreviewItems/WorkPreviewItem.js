import { format } from "date-fns";
import "./previewItem.css";

const WorkPreviewItem = ({ itemData }) => {
    let { id, company, position, from, to, employmentType, highlights } = itemData;
    from = format(new Date(from), 'MMM yyy');
    if (to !== "Present") to = format(new Date(to), 'MMM yyy');
    
      return (
        <li className="work-preview-item">
          <div className="details">
            <div className="main">
              <span className="position-company">
                <p className="position">{`${position} |`}</p>
                <p className="company">{company}</p>
              </span>
              <span className="employment-type">{employmentType}</span>
            </div>
            <p className="timeframe">{`${from} - ${to}`}</p>
          </div>
          <ul className="highlights">
            <li>{highlights}</li>
          </ul>
        </li>
      );
}

export default WorkPreviewItem;