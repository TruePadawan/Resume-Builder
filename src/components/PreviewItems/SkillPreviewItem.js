const SkillPreviewItem = ({ itemData }) => {
    return (
        <li className="skill-preview-item">
            <span className="category">{`${itemData.category}: `}</span>
            <span className="skills">{itemData.skills}</span>
        </li>
    );
}

export default SkillPreviewItem;