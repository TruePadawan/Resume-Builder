import React from "react";
import { InputField } from "../InputField/InputField";
import Section from "../Section/Section";

export default class PracticalExp extends React.Component {
    render() {
        return (
            <Section sectionTitle="Practical Experience">
                <form>
                    <div className="flex-row">
                        <InputField isRequired={true} label="Company" />
                        <InputField isRequired={true} label="Position" />
                    </div>
                    <div className="flex-row">
                        <InputField isRequired={true} label="From" type="date" />
                        <InputField label="To" type="date" />
                    </div>
                </form>
            </Section>  
        );
    }
}