import { useState, useRef } from "react";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import { v4 as uuidv4 } from "uuid";
import { InputField, TextArea } from "./components/InputField/InputField";
import EducationPreviewItem from "./components/PreviewItems/EducationPreviewItem";
import ReactToPrint from "react-to-print";

import PhoneImg from "./images/phone.png";
import HomeImg from "./images/home.png";
import LinkedInImg from "./images/linkedin.png";
import MailImg from "./images/mail.png";
import EducationDataItem from "./components/DataItems/EducationDataItem";
import PracticalExpPreviewItem from "./components/PreviewItems/PracticalExpPreviewItem";
import PracticalExpDataItem from "./components/DataItems/PracticalExpDataItem";

import "./css/App.css";

const App = () => {
  const [appState, setAppState] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    linkedIn: "",
    personalSite: "",
    desc: "",
    eduItems: [],
    practicalExpItems: [],
  });

  const fullNameInputRef = useRef();
  const jobTitleInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const linkedinInputRef = useRef();
  const personalSiteInputRef = useRef();
  const descInputRef = useRef();

  const universityInputRef = useRef();
  const courseInputRef = useRef();
  const degreeTypeInputRef = useRef();
  const eduFromInputRef = useRef();
  const eduToInputRef = useRef();

  const companyInputRef = useRef();
  const positionInputRef = useRef();
  const practicalFromInputRef = useRef();
  const practicalToInputRef = useRef();
  const highlightsInputRef = useRef();

  let previewRef;
  
  const degreeTypes = (
    <datalist id="degrees">
      <option value="Bachelors" />
      <option value="Associate" />
      <option value="Masters" />
      <option value="Doctoral" />
      <option value="Professional" />
    </datalist>
  );

  const clearEducationInputFields = () => {
    universityInputRef.current.value = "";
    courseInputRef.current.value = "";
    degreeTypeInputRef.current.value = "";
    eduFromInputRef.current.value = "";
    eduToInputRef.current.value = "";
  };

  const clearPracticalExpInputFields = () => {
    companyInputRef.current.value = "";
    positionInputRef.current.value = "";
    practicalFromInputRef.current.value = "";
    practicalToInputRef.current.value = "";
    highlightsInputRef.current.value = "";
  };

  const updateGeneralInfo = (e) => {
    console.log('gen')
    e.preventDefault();

    setAppState((latest) => {
      latest.fullName = fullNameInputRef.current.value;
      latest.jobTitle = jobTitleInputRef.current.value;
      latest.email = emailInputRef.current.value;
      latest.phoneNumber = phoneInputRef.current.value;
      latest.linkedIn = linkedinInputRef.current.value;
      latest.personalSite = personalSiteInputRef.current.value;
      latest.desc = descInputRef.current.value;
      return { ...latest };
    });
  };

  const updateEducationItem = (data) => {
    const { id } = data;
    setAppState((latest) => {
      const currentEduItems = [...latest.eduItems];
      let itemIndex = currentEduItems.findIndex((item) => item.id === id);
      currentEduItems[itemIndex] = data;

      const updatedState = { ...latest };
      updatedState.eduItems = currentEduItems;
      return updatedState;
    });
  };

  const updatePracticalExpItem = (data) => {
    const { id } = data;
    setAppState((latest) => {
      const currentPracticalExpItems = [...latest.practicalExpItems];
      let itemIndex = currentPracticalExpItems.findIndex((item) => item.id === id);
      currentPracticalExpItems[itemIndex] = data;
      const updatedState = { ...latest };
      updatedState.practicalExpItems = currentPracticalExpItems;
      return updatedState;
    });
  };

  const addEducationItem = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const from = eduFromInputRef.current.value;
    const to = eduToInputRef.current.value;
    const school = universityInputRef.current.value;
    const course = courseInputRef.current.value;
    const degreeType = degreeTypeInputRef.current.value;

    const eduItem = { id, from, to, school, course, degreeType };

    setAppState((latest) => {
      const latestEduItems = [...latest.eduItems];
      latestEduItems.unshift(eduItem);

      const updatedState = { ...latest };
      updatedState.eduItems = latestEduItems;

      return updatedState;
    });

    clearEducationInputFields();
  };

  const addPracticalExpItem = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const company = companyInputRef.current.value;
    const position = positionInputRef.current.value;
    const from = +practicalFromInputRef.current.value;
    const to = practicalToInputRef.current.value;
    const highlights = highlightsInputRef.current.value;

    const practicalExpItem = { id, company, position, from, to, highlights };

    setAppState((latest) => {
      const latestItems = [...latest.practicalExpItems];
      latestItems.unshift(practicalExpItem);

      const updatedState = { ...latest };
      updatedState.practicalExpItems = latestItems;
      
      return updatedState;
    });

    clearPracticalExpInputFields();
  };

  const getCVEducationDataItemsFrom = (data) => {
    return data.map((item) => {
      const updateSelf = (e) => {
        e.preventDefault();

        const from = e.target["3"].value;
        const to = e.target["4"].value;
        const school = e.target["0"].value;
        const course = e.target["1"].value;
        const degreeType = e.target["2"].value;

        let itemData = { id: item.id, from, to, school, course, degreeType };
        updateEducationItem(itemData);
      };

      const deleteSelf = () => {
        deleteEducationItem(item.id);
      };

      return (
        <EducationDataItem
          itemData={item}
          key={data.id}
          formSubmitHandler={updateSelf}
          onDeleteBtnClicked={deleteSelf}
        />
      );
    });
  };

  const getCVEducationPreviewItemsFrom = (data) => {
    return data.map((item) => {
      return <EducationPreviewItem itemData={item} key={data.id} />;
    });
  };

  const getCVPracticalExpDataItemsFrom = (data) => {
    return data.map((item) => {
      const updateSelf = (e) => {
        e.preventDefault();

        const company = e.target["0"].value;
        const position = e.target["1"].value;
        const from = e.target["2"].value;
        const to = e.target["3"].value;
        const highlights = e.target["4"].value;

        let itemData = { id: item.id, from, to, company, position, highlights };
        updatePracticalExpItem(itemData);
      };

      const deleteSelf = () => {
        deletePracticalExpItem(item.id);
      };

      return (
        <PracticalExpDataItem
          itemData={item}
          key={data.id}
          formSubmitHandler={updateSelf}
          onDeleteBtnClicked={deleteSelf}
        />
      );
    });
  };

  const getCVPracticalExpPreviewItemsFrom = (data) => {
    return data.map((item) => (
      <PracticalExpPreviewItem itemData={item} key={data.id} />
    ));
  };

  const deleteEducationItem = (id) => {
    setAppState((latest) => {
      const currentEduItems = [...latest.eduItems];
      const updatedEduItems = currentEduItems.filter((item) => item.id !== id);
      const updatedState = { ...latest };
      updatedState.eduItems = updatedEduItems;
      return updatedState;
    });
  };

  const deletePracticalExpItem = (id) => {
    setAppState((latest) => {
      const currentPracticalExpItems = [...latest.practicalExpItems];
      const filteredItems = currentPracticalExpItems.filter(
        (item) => item.id !== id
      );
      const updatedState = { ...latest };
      updatedState.practicalExpItems = filteredItems;
      return updatedState;
    });
  };

  const generatePDFBtn = <Button className="generate-pdf">Generate PDF</Button>;

  const pageStyle = `
      @page {
        size: auto;
        margin: 0;
      }
    `;

  return (
    <>
      <h1>Resume Builder</h1>
      <main>
        <section className="cv-data">
          <Section sectionTitle="General Information">
            <form className="cv-form" onSubmit={updateGeneralInfo}>
              <div className="flex-row">
                <InputField
                  label="Full Name*"
                  isRequired={true}
                  compRef={fullNameInputRef}
                />
                <InputField label="Job Title" compRef={jobTitleInputRef} />
              </div>
              <div className="flex-row">
                <InputField
                  label="Email*"
                  isRequired={true}
                  type={"email"}
                  compRef={emailInputRef}
                />
                <InputField
                  label="Phone Number"
                  type={"tel"}
                  placeholder="+2349012345678"
                  compRef={phoneInputRef}
                />
              </div>
              <div className="flex-row">
                <InputField
                  label="LinkedIn URL"
                  placeholder="linkedin.com/in/mary-sue"
                  compRef={linkedinInputRef}
                />
                <InputField
                  label="Personal Site"
                  placeholder="marysue.com"
                  compRef={personalSiteInputRef}
                />
              </div>
              <TextArea label="Personal Description" compRef={descInputRef} />
              <Button className="update-btn" btnType="submit">
                Update
              </Button>
            </form>
          </Section>

          <Section sectionTitle="Education">
            <form className="cv-form" onSubmit={addEducationItem}>
              <InputField
                isRequired={true}
                label="University*(in full)"
                compRef={universityInputRef}
              />
              <div className="flex-row">
                <InputField
                  isRequired={true}
                  label="Course*"
                  compRef={courseInputRef}
                />
                <InputField
                  isRequired={true}
                  label="Degree Type*"
                  placeholder="Bachelors"
                  listID="degrees"
                  list={degreeTypes}
                  compRef={degreeTypeInputRef}
                />
              </div>
              <div className="flex-row">
                <InputField
                  isRequired={true}
                  label="From*"
                  type={"number"}
                  placeholder="Year"
                  compRef={eduFromInputRef}
                />
                <InputField
                  label="To(empty for ongoing)"
                  type={"number"}
                  placeholder="Year"
                  compRef={eduToInputRef}
                />
              </div>
              <Button className="add-btn" btnType="submit">
                Add
              </Button>
            </form>
            <ul className="education-items">
              {getCVEducationDataItemsFrom(appState.eduItems)}
            </ul>
          </Section>

          <Section sectionTitle="Work Experience">
            <form className="cv-form" onSubmit={addPracticalExpItem}>
              <div className="flex-row">
                <InputField
                  isRequired={true}
                  label="Company*"
                  compRef={companyInputRef}
                />
                <InputField
                  isRequired={true}
                  label="Position*"
                  compRef={positionInputRef}
                />
              </div>
              <div className="flex-row">
                <InputField
                  isRequired={true}
                  label="From*"
                  placeholder="Year"
                  compRef={practicalFromInputRef}
                />
                <InputField
                  label="To(empty for ongoing)"
                  placeholder="Year"
                  compRef={practicalToInputRef}
                />
              </div>
              <TextArea label="Highlights" compRef={highlightsInputRef} />
              <Button className="add-btn" btnType="submit">
                Add
              </Button>
            </form>
            <ul className="practical-exp-items">
              {getCVPracticalExpDataItemsFrom(appState.practicalExpItems)}
            </ul>
          </Section>

          <ReactToPrint
            content={() => previewRef}
            trigger={() => generatePDFBtn}
            pageStyle={pageStyle}
          />
        </section>

        <section className="cv-preview">
          <div className="preview" ref={(el) => (previewRef = el)}>
            <div className="head">
              <p className="full-name">{appState.fullName}</p>
              <p className="job-title">{appState.jobTitle}</p>
            </div>
            <div className="general preview-section">
              <ul className="contact">
                <li>
                  {appState.email && (
                    <>
                      <img src={MailImg} alt="email" />
                      <span className="email">{appState.email}</span>
                    </>
                  )}
                </li>
                <li>
                  {appState.phoneNumber && (
                    <>
                      <img src={PhoneImg} alt="phone" />
                      <span className="phone-number">
                        {appState.phoneNumber}
                      </span>
                    </>
                  )}
                </li>
                <li>
                  {appState.linkedIn && (
                    <>
                      <img src={LinkedInImg} alt="linkedin" />
                      <span className="linkedin-url">{appState.linkedIn}</span>
                    </>
                  )}
                </li>
                <li>
                  {appState.personalSite && (
                    <>
                      <img src={HomeImg} alt="house" />
                      <span className="personal-site">
                        {appState.personalSite}
                      </span>
                    </>
                  )}
                </li>
              </ul>
              <p className="description">{appState.desc}</p>
            </div>
            <section className="preview-section" aria-label="Education">
              <h2 className="section-title">Education</h2>
              <hr />
              <ul className="list">
                {getCVEducationPreviewItemsFrom(appState.eduItems)}
              </ul>
            </section>
            <section
              className="preview-section"
              aria-label="Work Experience"
            >
              <h2 className="section-title">Work Experience</h2>
              <hr />
              <ul className="list">
                {getCVPracticalExpPreviewItemsFrom(appState.practicalExpItems)}
              </ul>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
