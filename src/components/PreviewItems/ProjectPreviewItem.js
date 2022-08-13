const ProjectPreviewItem = ({ itemData }) => {
    const { title, tech, desc } = itemData;

    return (
        <li className="project-preview-item">
            <div className="head">
                <span className="title">{`${title} |`}</span>
                <span className="tech">{tech}</span>
            </div>
            <div className="desc">{desc}</div>
        </li>
    );
}

export default ProjectPreviewItem;