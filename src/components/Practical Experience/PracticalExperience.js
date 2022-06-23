import React from "react";
import Button from "../Button/Button";
import { InputField, TextArea } from "../InputField/InputField";
import Section from "../Section/Section";

export default class PracticalExp extends React.Component {
    render() {
        return (
            <Section sectionTitle="Practical Experience">
                <form className="cv-form">
                    <div className="flex-row">
                        <InputField isRequired={true} label="Company" />
                        <InputField isRequired={true} label="Position" />
                    </div>
                    <div className="flex-row">
                        <InputField isRequired={true} label="From" type="date" />
                        <InputField label="To" placeholder="Year/Ongoing" />
                    </div>
                    <TextArea label="Highlights" />
                    <Button className="add-btn">Add</Button>
                    <Button className="delete-btn">Delete</Button>
                </form>
            </Section>  
        );
    }
}