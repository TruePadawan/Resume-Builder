import React from "react";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import { InputField, TextArea } from "./components/InputField/InputField";
import EducationPreviewItem from "./components/PreviewItems/EducationPreviewItem";

import PhoneImg from "./images/phone.png";
import HomeImg from "./images/home.png";
import LinkedInImg from "./images/linkedin.png";
import MailImg from "./images/mail.png";
import { v4 as uuidv4 } from "uuid";
import "./css/App.css";
import EducationDataItem from "./components/DataItems/EducationDataItem";
import PracticalExpPreviewItem from "./components/PreviewItems/PracticalExpPreviewItem";
import PracticalExpDataItem from "./components/DataItems/PracticalExpDataItem";

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
      practicalExpItems: [],
    };

    this.degreeTypes = (
      <datalist id="degrees">
        <option value="Bachelor's" />
        <option value="Associate" />
        <option value="Master's" />
        <option value="Doctoral" />
        <option value="Professional" />
      </datalist>
    );

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
  }

  clearEducationInputFields = () => {
    this.universityInputRef.current.value = "";
    this.courseInputRef.current.value = "";
    this.degreeTypeInputRef.current.value = "";
    this.eduFromInputRef.current.value = "";
    this.eduToInputRef.current.value = "";
  };

  clearPracticalExpInputFields = () => {
    this.companyInputRef.current.value = "";
    this.positionInputRef.current.value = "";
    this.practicalFromInputRef.current.value = "";
    this.practicalToInputRef.current.value = "";
    this.highlightsInputRef.current.value = "";
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

  updateEducationItem = (data) => {
    const { id } = data;
    this.setState((latest) => {
      const currentEduItems = [...latest.eduItems];
      let itemIndex = currentEduItems.findIndex((item) => item.id === id);
      currentEduItems[itemIndex] = data;

      const updatedState = { ...latest };
      updatedState.eduItems = currentEduItems;
      return updatedState;
    });
  };

  updatePracticalExpItem = (data) => {
    const { id } = data;
    this.setState((latest) => {
      const currentPracticalExpItems = [...latest.practicalExpItems];
      let itemIndex = currentPracticalExpItems.findIndex((item) => item.id === id);
      currentPracticalExpItems[itemIndex] = data;

      const updatedState = { ...latest };
      updatedState.practicalExpItems = currentPracticalExpItems;
      return updatedState;
    });
  }

  addEducationItem = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const from = +this.eduFromInputRef.current.value;
    const to = this.eduToInputRef.current.value;
    const school = this.universityInputRef.current.value;
    const course = this.courseInputRef.current.value;
    const degreeType = this.degreeTypeInputRef.current.value;

    const eduItem = { id, from, to, school, course, degreeType };

    this.setState((latest) => {
      latest.eduItems = [eduItem, ...latest.eduItems];
      return { ...latest };
    });

    this.clearEducationInputFields();
  };

  addPracticalExpItem = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const company = this.companyInputRef.current.value;
    const position = this.positionInputRef.current.value;
    const from = +this.practicalFromInputRef.current.value;
    const to = this.practicalToInputRef.current.value;
    const highlights = this.highlightsInputRef.current.value;

    const practicalExpItem = { id, company, position, from, to, highlights };

    this.setState((latest) => {
      latest.practicalExpItems = [
        practicalExpItem,
        ...latest.practicalExpItems,
      ];
      return { ...latest };
    });

    this.clearPracticalExpInputFields();
  };

  getCVEducationDataItemsFrom = (data) => {
    return data.map((item) => {
      const updateSelf = (e) => {
        e.preventDefault();

        const from = e.target["3"].value;
        const to = e.target["4"].value;
        const school = e.target["0"].value;
        const course = e.target["1"].value;
        const degreeType = e.target["2"].value;

        let itemData = { id: item.id, from, to, school, course, degreeType };
        this.updateEducationItem(itemData);
      };

      const deleteSelf = () => {
        this.deleteEducationItem(item.id);
      };

      return (
        <EducationDataItem
          itemData={item}
          formSubmitHandler={updateSelf}
          onDeleteBtnClicked={deleteSelf}
        />
      );
    });
  };

  getCVEducationPreviewItemsFrom = (data) => {
    return data.map((item) => {
      return <EducationPreviewItem itemData={item} />;
    });
  };

  getCVPracticalExpDataItemsFrom = (data) => {
    return data.map((item) => {
      const updateSelf = (e) => {
        e.preventDefault();

        const company = e.target["0"].value;
        const position = e.target["1"].value;
        const from = e.target["2"].value;
        const to = e.target["3"].value;
        const highlights = e.target["4"].value;

        let itemData = { id: item.id, from, to, company, position, highlights };
        this.updatePracticalExpItem(itemData);
      };

      const deleteSelf = () => {
        this.deletePracticalExpItem(item.id);
      };

      return <PracticalExpDataItem itemData={item} formSubmitHandler={updateSelf} onDeleteBtnClicked={deleteSelf} />
    });
  };

  getCVPracticalExpPreviewItemsFrom = (data) => {
    return data.map((item) => <PracticalExpPreviewItem itemData={item} />);
  }

  deleteEducationItem = (id) => {
    this.setState((latest) => {
      const currentEduItems = [...latest.eduItems];
      const updatedEduItems = currentEduItems.filter((item) => item.id !== id);
      const updatedState = { ...latest };
      updatedState.eduItems = updatedEduItems;
      return updatedState;
    });
  };

  deletePracticalExpItem = (id) => {
    this.setState((latest) => {
      const currentPracticalExpItems = [...latest.practicalExpItems];
      const filteredItems = currentPracticalExpItems.filter((item) => item.id !== id);
      const updatedState = { ...latest };
      updatedState.practicalExpItems = filteredItems;
      return updatedState;
    });
  };

  render() {
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
                    value="Sebastian Tao"
                  />
                  <InputField
                    label="Job Title"
                    compRef={this.jobTitleInputRef}
                    value="Apprentice Necromancer"
                  />
                </div>
                <div className="flex-row">
                  <InputField
                    label="Email*"
                    isRequired={true}
                    type={"email"}
                    compRef={this.emailInputRef}
                    value="sebastiantao@gmail.com"
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
                    value="https://www.linkedin.com/in/sebastian-tao/"
                  />
                  <InputField
                    label="Personal Site"
                    type={"url"}
                    placeholder="https://marysue.com"
                    compRef={this.personalSiteInputRef}
                    value="https://www.sebastiantao.wiz"
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
              <form className="cv-form" onSubmit={this.addEducationItem}>
                <InputField
                  isRequired={true}
                  label="University*(in full)"
                  compRef={this.universityInputRef}
                  value="Hogwarts Academy"
                />
                <div className="flex-row">
                  <InputField
                    isRequired={true}
                    label="Course*"
                    compRef={this.courseInputRef}
                    value="Necromancy"
                  />
                  <InputField
                    isRequired={true}
                    label="Degree Type*"
                    placeholder="Bachelors"
                    listID="degrees"
                    list={this.degreeTypes}
                    compRef={this.degreeTypeInputRef}
                  />
                </div>
                <div className="flex-row">
                  <InputField
                    isRequired={true}
                    label="From*"
                    placeholder="Year"
                    compRef={this.eduFromInputRef}
                    value="2005"
                  />
                  <InputField
                    label="To(empty for ongoing)"
                    placeholder="Year"
                    compRef={this.eduToInputRef}
                  />
                </div>
                <Button className="add-btn" btnType="submit">Add</Button>
              </form>
              <ul className="education-items">
                {this.getCVEducationDataItemsFrom(this.state.eduItems)}
              </ul>
            </Section>

            <Section sectionTitle="Practical Experience">
              <form className="cv-form" onSubmit={this.addPracticalExpItem}>
                <div className="flex-row">
                  <InputField
                    isRequired={true}
                    label="Company*"
                    compRef={this.companyInputRef}
                    value="Microsoft"
                  />
                  <InputField
                    isRequired={true}
                    label="Position*"
                    compRef={this.positionInputRef}
                    value="Junior Fullstack Developer"
                  />
                </div>
                <div className="flex-row">
                  <InputField
                    isRequired={true}
                    label="From*"
                    placeholder="Year"
                    compRef={this.practicalFromInputRef}
                    value="2008"
                  />
                  <InputField
                    label="To(empty for ongoing)"
                    placeholder="Year"
                    compRef={this.practicalToInputRef}
                  />
                </div>
                <TextArea
                  label="Highlights"
                  compRef={this.highlightsInputRef}
                />
                <Button className="add-btn" btnType="submit">Add</Button>
              </form>
              <ul className="practical-exp-items">
                {this.getCVPracticalExpDataItemsFrom(this.state.practicalExpItems)}
              </ul>
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
                <ul className="list">
                  {this.getCVEducationPreviewItemsFrom(this.state.eduItems)}
                </ul>
              </section>
              <section
                className="practical-exp"
                aria-label="Practical Experience"
              >
                <h2 className="section-title">Practical Experience</h2>
                <hr />
                <ul className="list">{this.getCVPracticalExpPreviewItemsFrom(this.state.practicalExpItems)}</ul>
              </section>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
