import React, { Component } from "react";
import "./App.css";
import GeneralInfo from "./components/General Information/GeneralInfo";

class App extends Component {
    render() {
        return (
            <>
                <h1>CV Builder</h1>
                <main>
                    <section className="cv-data">
                        <GeneralInfo />
                    </section>
                    <section className="cv-preview"></section>
                </main>
            </>
        );
    }
}

export default App;