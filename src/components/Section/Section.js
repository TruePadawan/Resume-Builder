import React from "react";
import "./section.css";

export default class Section extends React.Component {
    render() {
        return (
            <section className="section" aria-labelledby={this.props.sectionTitle}>
                <span className="sectionHead">
                    <h2 id={this.props.sectionTitle}>{this.props.sectionTitle}</h2>
                </span>
                <div className="sectionBody">
                    {this.props.children}
                </div>
            </section>
        );
    }
};