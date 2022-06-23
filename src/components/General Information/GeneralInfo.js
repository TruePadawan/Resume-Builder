import React from "react";
import Section from "../Section/Section";
import InputField from "../InputField/InputField";
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
                </form>
            </Section>
        )
    }
}