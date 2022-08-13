import { useState, useRef } from "react";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import { InputField, TextArea } from "./components/InputField/InputField";
import ReactToPrint from "react-to-print";
import PhoneImg from "./images/phone.png";
import HomeImg from "./images/home.png";
import LinkedInImg from "./images/linkedin.png";
import MailImg from "./images/mail.png";

import EducationItem from "./components/DataItems/EducationItem";
import EducationPreviewItem from "./components/PreviewItems/EducationPreviewItem";
import WorkItem from "./components/DataItems/WorkItem";
import WorkPreviewItem from "./components/PreviewItems/WorkPreviewItem";
import WorkExperience from "./components/PageSections/WorkExperience";

import "./css/App.css";
import Education from "./components/PageSections/Education";

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
    workItems: [],
  });

  const fullNameInputRef = useRef();
  const jobTitleInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const linkedinInputRef = useRef();
  const personalSiteInputRef = useRef();
  const descInputRef = useRef();

  const degreeTypes = (
    <datalist id="degrees">
      <option value={"Bachelors"} />
      <option value={"Associate"} />
      <option value={"Masters"} />
      <option value={"Doctoral"} />
      <option value={"Professional"} />
    </datalist>
  );

  let previewRef;

  const updateGeneralInfo = (e) => {
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

  const updateWorkItem = (data) => {
    const { id } = data;
    setAppState((latest) => {
      const currentWorkItems = [...latest.workItems];
      let itemIndex = currentWorkItems.findIndex((item) => item.id === id);
      currentWorkItems[itemIndex] = data;
      const updatedState = { ...latest };
      updatedState.workItems = currentWorkItems;
      return updatedState;
    });
  };

  const addEducationItem = (item) => {
    setAppState((latest) => {
      const latestEduItems = [...latest.eduItems];
      latestEduItems.unshift(item);

      const updatedState = { ...latest };
      updatedState.eduItems = latestEduItems;

      return updatedState;
    });
  };

  const addWorkItem = (item) => {
    setAppState((latest) => {
      const latestItems = [...latest.workItems];
      latestItems.unshift(item);

      const updatedState = { ...latest };
      updatedState.workItems = latestItems;
      
      return updatedState;
    });
  };

  const getEducationItems = (data) => {
    return data.map((item) => {
      const updateSelf = (itemData) => {
        updateEducationItem(itemData);
      };

      const deleteSelf = () => {
        removeEducationItem(item.id);
      };

      return (
        <EducationItem
          itemData={item}
          key={item.id}
          degreeTypes={degreeTypes}
          onUpdate={updateSelf}
          onDeleteBtnClicked={deleteSelf}
        />
      );
    });
  };

  const getEducationPreviewItems = (data) => {
    return data.map((item) => {
      return <EducationPreviewItem itemData={item} key={item.id} />;
    });
  };

  const getWorkItems = (data) => {
    return data.map((item) => {
      const updateSelf = (itemData) => {
        updateWorkItem(itemData);
      };

      const deleteSelf = () => {
        removeWorkItem(item.id);
      };

      return (
        <WorkItem
          itemData={item}
          key={item.id}
          onUpdate={updateSelf}
          onDeleteBtnClicked={deleteSelf}
        />
      );
    });
  };

  const getWorkPreviewItems = (data) => {
    return data.map((item) => (
      <WorkPreviewItem itemData={item} key={item.id} />
    ));
  };

  const removeEducationItem = (id) => {
    setAppState((latest) => {
      const currentEduItems = [...latest.eduItems];
      const updatedEduItems = currentEduItems.filter((item) => item.id !== id);
      const updatedState = { ...latest };
      updatedState.eduItems = updatedEduItems;
      return updatedState;
    });
  };

  const removeWorkItem = (id) => {
    setAppState((latest) => {
      const currentPracticalExpItems = [...latest.workItems];
      const filteredItems = currentPracticalExpItems.filter((item) => item.id !== id);
      const updatedState = { ...latest };
      updatedState.workItems = filteredItems;
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

  const educationItems = getEducationItems(appState.eduItems);
  const educationPreviewItems = getEducationPreviewItems(appState.eduItems);
  const workItems = getWorkItems(appState.workItems);
  const workPreviewItems = getWorkPreviewItems(appState.workItems);

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

          <Education addItem={addEducationItem} degreeTypes={degreeTypes}>
            <ul>{educationItems}</ul>
          </Education>

          <WorkExperience addItem={addWorkItem}>
            <ul>{workItems}</ul>
          </WorkExperience>

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
                {educationPreviewItems}
              </ul>
            </section>
            <section className="preview-section" aria-label="Work Experience">
              <h2 className="section-title">Work Experience</h2>
              <hr />
              <ul className="list">{workPreviewItems}</ul>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
