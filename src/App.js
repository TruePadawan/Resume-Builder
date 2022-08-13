import { useState, useRef } from "react";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import { v4 as uuidv4 } from "uuid";
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

  const universityInputRef = useRef();
  const courseInputRef = useRef();
  const degreeTypeInputRef = useRef();
  const eduFromInputRef = useRef();
  const eduToInputRef = useRef();

  let previewRef;
  
  const degreeTypes = (
    <datalist id="degrees">
      <option value={"Bachelors"} />
      <option value={"Associate"} />
      <option value={"Masters"} />
      <option value={"Doctoral"} />
      <option value={"Professional"} />
    </datalist>
  );

  const clearEducationInputFields = () => {
    universityInputRef.current.value = "";
    courseInputRef.current.value = "";
    degreeTypeInputRef.current.value = "";
    eduFromInputRef.current.value = "";
    eduToInputRef.current.value = "";
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

  const addWorkItem = (item) => {
    setAppState((latest) => {
      const latestItems = [...latest.workItems];
      latestItems.unshift(item);

      const updatedState = { ...latest };
      updatedState.workItems = latestItems;
      
      return updatedState;
    });
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
        <EducationItem
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
          updateSelf={updateSelf}
          onDeleteBtnClicked={deleteSelf}
        />
      );
    });
  };

  const getWorkPreviewItems = (data) => {
    return data.map((item) => (
      <WorkPreviewItem itemData={item} key={data.id} />
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
                  label="Degree type*"
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

          <WorkExperience addItem={addWorkItem}>
            <ul className="work-items">{workItems}</ul>
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
                {getCVEducationPreviewItemsFrom(appState.eduItems)}
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
