import React from "react";
import Section from "../Section/Section";
import { InputField, TextArea } from "../InputField/InputField";
import Button from "../Button/Button";
import "./generalInfo.css";

export default class GeneralInfo extends React.Component {
    render() {
        return (
            <Section sectionTitle="General Information">
                <form className="cv-form">
                    <InputField label="Full Name" isRequired={true} />
                    <div className="flex-row">
                        <InputField label="Email" isRequired={true} type={"email"} />
                        <InputField label="Phone Number" type={"tel"} placeholder="+2349012345678" />
                    </div>
                    <div className="flex-row">
                        <InputField label="LinkedIn URL" type={"url"} placeholder="https://linkedin.com/in/mary-sue" value="https://" />
                        <InputField label="Twitter URL" type={"url"} placeholder="https://twitter.com/marysue" value="https://" />
                    </div>
                    <TextArea label="Personal Description" />
                    <Button className="update-btn" btnType="submit">Update</Button>
                </form>
            </Section>
        )
    }
}