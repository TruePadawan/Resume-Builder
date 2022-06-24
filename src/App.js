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

    buildEducationItem = (data) => {
      let { from, to, school, course, degreeType } = data;
      if (to === undefined) to = "Ongoing";

      return (
        <li className="item">
          <span className="timeframe">{`${from} - ${to}`}</span>
          <ul className="details">
            <li className="school">{school}</li>
            <li className="course">{course}</li>
            <li className="degree-type">{`${degreeType} Degree`}</li>
          </ul>
        </li>
      );
    }

    render() {
        const fullName = this.state.fullName;
        const item = this.buildEducationItem({
          from : 2015,
          school : "University Of Lagos",
          course : "Computer Engr",
          degreeType : "Bachelors"
        });

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
                        <span className="phone-number"></span>
                      </li>
                      <li>
                        <img src={LinkedInImg} alt="linkedin" />
                        <span className="linkedin-url"></span>
                      </li>
                      <li>
                        <img src={MailImg} alt="email" />
                        <span className="email"></span>
                      </li>
                      <li>
                        <img src={TwitterImg} alt="twitter" />
                        <span className="twitter-url"></span>
                      </li>
                    </ul>
                    <p className="description">
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. */}
                    </p>
                  </div>
                  <section className="education" aria-label="Education">
                    <h2 className="section-title">Education</h2>
                    <hr />
                    <ul className="education-list">
                      {item}
                        {/* <li className="item">
                          <span className="timeframe">2015 - Ongoing</span>
                          <ul className="details">
                            <li className="school">Hogwarts Academy</li>
                            <li className="course">Necromancy</li>
                            <li className="degree-type">Masters Degree</li>
                          </ul>
                        </li> */}
                    </ul>
                  </section>
                </div>

              </section>
            </main>
          </>
        );
    }
}

export default App;