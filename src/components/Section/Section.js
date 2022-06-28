import "./section.css";

const Section = (props) => {
    return (
        <section className="section" aria-labelledby={props.sectionTitle}>
            <span className="sectionHead">
                <h2 id={props.sectionTitle}>{props.sectionTitle}</h2>
            </span>
            <div className="sectionBody">
                {props.children}
            </div>
        </section>
    );
}

export default Section;