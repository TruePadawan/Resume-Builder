import "./previewItem.css";

const PracticalExpPreviewItem = ({ itemData }) => {
    let { id, company, position, from, to, highlights } = itemData;
      if (to === undefined || to === "") to = "Ongoing";

      return (
        <li className="item" key={id} >
          <span className="timeframe">{`${from} - ${to}`}</span>
          <ul className="details">
            <li className="company">{company}</li>
            <li className="position">{position}</li>
            <li className="highlights">{highlights}</li>
          </ul>
        </li>
      );
}

export default PracticalExpPreviewItem;