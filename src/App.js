import React from "react";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import { InputField, TextArea } from "./components/InputField/InputField";

import PhoneImg from "./images/phone.png";
import TwitterImg from "./images/twitter.png";
import LinkedInImg from "./images/linkedin.png";
import MailImg from "./images/mail.png";

import "./css/App.css";
import "./css/main.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName : "Full Name",
        }

        this.fullName = React.createRef();
        this.email = React.createRef();
        this.number = React.createRef();
        this.linkedin = React.createRef();
        this.twitter = React.createRef();
        this.description = React.createRef();

        this.university = React.createRef();
        this.course = React.createRef();
        this.degreeType = React.createRef();
        this.eduFrom = React.createContext();
        this.eduTo = React.createContext();

        this.company = React.createRef();
        this.position = React.createRef();
        this.practicalFrom = React.createRef();
        this.practicalTo = React.createRef();
        this.highlights = React.createRef();
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

    updateGeneralInfo = (e) => {
      e.preventDefault();
      this.setState((latest) => {
        latest.fullName = this.fullName.current.value;
        return latest;
      });
    }

    render() {
        const fullName = this.state.fullName;
        const list = (
          <datalist id="degrees">
              <option value="Bachelor's" />
              <option value="Associate" />
              <option value="Master's" />
              <option value="Doctoral" />
              <option value="Professional" />
          </datalist>
      );

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
              <Section sectionTitle="General Information">
                <form className="cv-form" onSubmit={this.updateGeneralInfo}>
                    <InputField label="Full Name" isRequired={true} compRef={this.fullName} />
                    <div className="flex-row">
                        <InputField label="Email" isRequired={true} type={"email"} />
                        <InputField label="Phone Number" type={"tel"} placeholder="+2349012345678" />
                    </div>
                    <div className="flex-row">
                        <InputField label="LinkedIn URL" type={"url"} placeholder="https://linkedin.com/in/mary-sue" />
                        <InputField label="Twitter URL" type={"url"} placeholder="https://twitter.com/marysue" />
                    </div>
                    <TextArea label="Personal Description" />
                    <Button className="update-btn" btnType="submit">Update</Button>
                </form>
              </Section>
              <Section sectionTitle="Education">
                  <form className="cv-form">
                      <InputField isRequired={true} label="University(in full)"/>
                      <div className="flex-row">
                          <InputField isRequired={true} label="Course" />
                          <InputField isRequired={true} label="Degree Type" placeholder="Bachelors" listID="degrees" list={list} />
                      </div>
                      <div className="flex-row">
                          <InputField isRequired={true} label="From" type="date" />
                          <InputField isRequired={true} label="To" placeholder="Year/Ongoing" />
                      </div>
                      <Button className="add-btn" btnType="submit">Add</Button>
                      <Button className="delete-btn" btnType="submit">Delete</Button>
                  </form>
              </Section>
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