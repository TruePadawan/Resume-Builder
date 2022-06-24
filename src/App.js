import React, { Component } from "react";
import Button from "./components/Button/Button";
import Education from "./components/Education/Education";
import GeneralInfo from "./components/General Information/GeneralInfo";
import PracticalExp from "./components/Practical Experience/PracticalExperience";
import "./css/App.css";
import "./css/main.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            fullName : "Full Name",
        }
    }

    render() {
        const fullName = this.state.fullName;

        return (
            <>
                <h1>CV Builder</h1>
                <main>
                    <section className="cv-data">
                        <GeneralInfo />
                        <Education />
                        <PracticalExp />
                        <Button className="generate-pdf">Generate PDF</Button>
                    </section>
                    <section className="cv-preview">
                        <div className="preview">
                            <div className="head">
                                <p className="full-name">{fullName}</p>
                            </div>
                            <div className="general">
                                <div className="contact">
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default App;