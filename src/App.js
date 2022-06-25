import React from "react";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import { InputField, TextArea } from "./components/InputField/InputField";

import PhoneImg from "./images/phone.png";
import HomeImg from "./images/home.png";
import LinkedInImg from "./images/linkedin.png";
import MailImg from "./images/mail.png";
import { v4 as uuidv4 } from "uuid";
import "./css/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      jobTitle: "",
      email: "",
      phoneNumber: "",
      linkedIn: "",
      personalSite: "",
      desc: "",
      eduItems: [],
    };

    this.fullNameInputRef = React.createRef();
    this.jobTitleInputRef = React.createRef();
    this.emailInputRef = React.createRef();
    this.phoneInputRef = React.createRef();
    this.linkedinInputRef = React.createRef();
    this.personalSiteInputRef = React.createRef();
    this.descInputRef = React.createRef();

    this.universityInputRef = React.createRef();
    this.courseInputRef = React.createRef();
    this.degreeTypeInputRef = React.createRef();
    this.eduFromInputRef = React.createRef();
    this.eduToInputRef = React.createRef();

    this.companyInputRef = React.createRef();
    this.positionInputRef = React.createRef();
    this.practicalFromInputRef = React.createRef();
    this.practicalToInputRef = React.createRef();
    this.highlightsInputRef = React.createRef();

    this.updateEducationInfo = this.updateEducationInfo.bind(this);
  }

  buildEducationItem = (data) => {
    let { id, from, to, school, course, degreeType } = data;
    if (to === undefined) to = "Ongoing";

    return (
      <li className="item" key={id}>
        <span className="timeframe">{`${from} - ${to}`}</span>
        <ul className="details">
          <li className="school">{school}</li>
          <li className="course">{course}</li>
          <li className="degree-type">{`${degreeType} Degree`}</li>
        </ul>
      </li>
    );
  };

  updateGeneralInfo = (e) => {
    e.preventDefault();
    this.setState((latest) => {
      latest.fullName = this.fullNameInputRef.current.value;
      latest.jobTitle = this.jobTitleInputRef.current.value;
      latest.email = this.emailInputRef.current.value;
      latest.phoneNumber = this.phoneInputRef.current.value;
      latest.linkedIn = this.linkedinInputRef.current.value;
      latest.personalSite = this.personalSiteInputRef.current.value;
      latest.desc = this.descInputRef.current.value;

      return latest;
    });
  };

  updateEducationInfo = (e) => {
    e.preventDefault();
    const from = +this.eduFromInputRef.current.value;
    const to = +this.eduToInputRef.current.value;
    const school = this.universityInputRef.current.value;
    const course = this.courseInputRef.current.value;
    const degreeType = this.degreeTypeInputRef.current.value;
    const id = uuidv4();

    const eduItem = this.buildEducationItem({
      id,
      from,
      to,
      school,
      course,
      degreeType,
    });
    this.setState(
      (latest) => {
        latest.eduItems = [...latest.eduItems, eduItem];
        return { ...latest };
      },
      () => {
        console.log(this.state.eduItems);
      }
    );
  };

  render() {
    const list = (
      <datalist id="degrees">
        <option value="Bachelor's" />
        <option value="Associate" />
        <option value="Master's" />
        <option value="Doctoral" />
        <option value="Professional" />
      </datalist>
    );
    return (
      <>
        <h1>CV Builder</h1>
        <main>
          <section className="cv-data">
            <Section sectionTitle="General Information">
              <form className="cv-form" onSubmit={this.updateGeneralInfo}>
                <div className="flex-row">
                  <InputField
                    label="Full Name*"
                    isRequired={true}
                    compRef={this.fullNameInputRef}
                    value="Hermes Chigoziri"
                  />
                  <InputField
                    label="Job Title"
                    compRef={this.jobTitleInputRef}
                    value="Junior Software Developer"
                  />
                </div>
                <div className="flex-row">
                  <InputField
                    label="Email*"
                    isRequired={true}
                    type={"email"}
                    compRef={this.emailInputRef}
                    value="hermeschigoziri@gmail.com"
                  />
                  <InputField
                    label="Phone Number"
                    type={"tel"}
                    placeholder="+2349012345678"
                    compRef={this.phoneInputRef}
                    value="09018989515"
                  />
                </div>
                <div className="flex-row">
                  <InputField
                    label="LinkedIn URL"
                    type={"url"}
                    placeholder="https://linkedin.com/in/mary-sue"
                    compRef={this.linkedinInputRef}
                    value="https://www.linkedin.com/in/hermes-chigoziri-919148204/"
                  />
                  <InputField
                    label="Personal Site"
                    type={"url"}
                    placeholder="https://marysue.com"
                    compRef={this.personalSiteInputRef}
                    value="https://truepadawan.github.io/portfolio-remake/"
                  />
                </div>
                <TextArea
                  label="Personal Description"
                  compRef={this.descInputRef}
                />
                <Button className="update-btn" btnType="submit">
                  Update
                </Button>
              </form>
            </Section>
            <Section sectionTitle="Education">
              <form className="cv-form" onSubmit={this.updateEducationInfo}>
                <InputField
                  isRequired={true}
                  label="University*(in full)"
                  compRef={this.universityInputRef}
                />
                <div className="flex-row">
                  <InputField
                    isRequired={true}
                    label="Course*"
                    compRef={this.courseInputRef}
                  />
                  <InputField
                    isRequired={true}
                    label="Degree Type*"
                    placeholder="Bachelors"
                    listID="degrees"
                    list={list}
                    compRef={this.degreeTypeInputRef}
                  />
                </div>
                <div className="flex-row">
                  <InputField
                    isRequired={true}
                    label="From*"
                    placeholder="Year"
                    compRef={this.eduFromInputRef}
                  />
                  <InputField
                    isRequired={true}
                    label="To(empty for ongoing)"
                    placeholder="Year/Ongoing"
                    compRef={this.eduToInputRef}
                  />
                </div>
                <Button className="add-btn" btnType="submit">
                  Add
                </Button>
                <Button className="delete-btn">Delete</Button>
              </form>
              <hr />
            </Section>
            <Section sectionTitle="Practical Experience">
              <form className="cv-form">
                <div className="flex-row">
                  <InputField isRequired={true} label="Company*" />
                  <InputField isRequired={true} label="Position*" />
                </div>
                <div className="flex-row">
                  <InputField isRequired={true} label="From*" placeholder="Year" />
                  <InputField
                    label="To(empty for ongoing)"
                    placeholder="Year/Ongoing"
                  />
                </div>
                <TextArea label="Highlights" />
                <Button className="add-btn">Add</Button>
                <Button className="delete-btn">Delete</Button>
              </form>
              <hr />
            </Section>
            <Button className="generate-pdf">Generate PDF</Button>
          </section>
          <section className="cv-preview">
            <div className="preview">
              <div className="head">
                <p className="full-name">{this.state.fullName}</p>
                <p className="job-title">{this.state.jobTitle}</p>
              </div>
              <div className="general">
                <ul className="contact">
                  <li>
                    {this.state.email && (
                      <>
                        <img src={MailImg} alt="email" />
                        <span className="email">{this.state.email}</span>
                      </>
                    )}
                  </li>
                  <li>
                    {this.state.phoneNumber && (
                      <>
                        <img src={PhoneImg} alt="phone" />
                        <span className="phone-number">
                          {this.state.phoneNumber}
                        </span>
                      </>
                    )}
                  </li>
                  <li>
                    {this.state.linkedIn && (
                      <>
                        <img src={LinkedInImg} alt="linkedin" />
                        <span className="linkedin-url">
                          {this.state.linkedIn}
                        </span>
                      </>
                    )}
                  </li>
                  <li>
                    {this.state.personalSite && (
                      <>
                        <img src={HomeImg} alt="house" />
                        <span className="personal-site">
                          {this.state.personalSite}
                        </span>
                      </>
                    )}
                  </li>
                </ul>
                <p className="description">{this.state.desc}</p>
              </div>
              <section className="education" aria-label="Education">
                <h2 className="section-title">Education</h2>
                <hr />
                <ul className="list">{this.state.eduItems}</ul>
              </section>
              <section
                className="practical-exp"
                aria-label="Practical Experience"
              >
                <h2 className="section-title">Practical Experience</h2>
                <hr />
                <ul className="list"></ul>
              </section>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
