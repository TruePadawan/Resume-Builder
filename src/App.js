import React, { Component } from "react";
import Button from "./components/Button/Button";
import Education from "./components/Education/Education";
import GeneralInfo from "./components/General Information/GeneralInfo";
import PracticalExp from "./components/Practical Experience/PracticalExperience";

import PhoneImg from "./images/phone.png";
import TwitterImg from "./images/twitter.png";
import LinkedInImg from "./images/linkedin.png";
import MailImg from "./images/mail.png";

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
                                <ul className="contact">
                                    <li>
                                        <img src={PhoneImg} alt="phone" />
                                        <span className="phone-number">XXXXXXXXXXX</span>
                                    </li>
                                    <li>
                                        <img src={LinkedInImg} alt="linkedin" />
                                        <span className="linkedin-url">XXXXXXXXXXX</span>
                                    </li>
                                    <li>
                                        <img src={MailImg} alt="email" />
                                        <span className="email">XXXXXXXXXXX</span>
                                    </li>
                                    <li>
                                        <img src={TwitterImg} alt="twitter" />
                                        <span className="twitter-url">XXXXXXXXXXX</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default App;