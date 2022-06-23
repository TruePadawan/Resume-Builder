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
                    <InputField inputLabel="Full Name" isRequired={true} />
                    <div className="flex-row">
                        <InputField inputLabel="Email" isRequired={true} inputType={"email"} />
                        <InputField inputLabel="Phone Number" inputType={"tel"} />
                    </div>
                    <div className="flex-row">
                        <InputField inputLabel="LinkedIn" />
                        <InputField inputLabel="Twitter" />
                    </div>
                    <TextArea label="Personal Description" />
                    <Button className="update-btn" btnType="submit">Update</Button>
                </form>
            </Section>
        )
    }
}