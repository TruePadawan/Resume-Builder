import React, { Component } from "react";
import Education from "./components/Education/Education";
import GeneralInfo from "./components/General Information/GeneralInfo";
import PracticalExp from "./components/Practical Experience/PracticalExperience";
import "./css/App.css";
import "./css/main.css";

class App extends Component {
    render() {
        return (
            <>
                <h1>CV Builder</h1>
                <main>
                    <section className="cv-data">
                        <GeneralInfo />
                        <Education />
                        <PracticalExp />
                    </section>
                    <section className="cv-preview"></section>
                </main>
            </>
        );
    }
}

export default App;