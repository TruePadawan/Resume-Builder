import React from "react";
import Button from "../Button/Button";
import { InputField } from "../InputField/InputField";
import Section from "../Section/Section";

export default class Education extends React.Component {
    render() {
        const list = (
            <datalist id="degrees">
                <option value="Bachelor's" />
                <option value="Associate" />
                <option value="Master's" />
                <option value="Doctoral" />
                <option value="Professional" />
            </datalist>
        );

        return (
            <Section sectionTitle="Education">
                <form className="cv-form">
                    <InputField isRequired={true} label="University(in full)"/>
                    <div className="flex-row">
                        <InputField isRequired={true} label="Course" />
                        <InputField isRequired={true} label="Degree Type" placeholder="Bachelors" listID="degrees" list={list} />
                    </div>
                    <div className="flex-row">
                        <InputField isRequired={true} label="From" type="date" />
                        <InputField isRequired={true} label="To" placeholder="Year/Ongoing" />
                    </div>
                    <Button className="add-btn" btnType="submit">Add</Button>
                    <Button className="delete-btn" btnType="submit">Delete</Button>
                </form>
            </Section>
        );
    }
}