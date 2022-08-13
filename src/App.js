import { useState } from "react";
import Button from "./components/Button/Button";
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
import Education from "./components/PageSections/Education";
import General from "./components/PageSections/General";
import Projects from "./components/PageSections/Projects";
import ProjectItem from "./components/DataItems/ProjectItem";

import "./css/App.css";
import ProjectPreviewItem from "./components/PreviewItems/ProjectPreviewItem";

const App = () => {
  const [appData, setAppData] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    linkedIn: "",
    personalSite: "",
    desc: "",
    eduItems: [],
    workItems: [],
    projectItems: [],
  });

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
  
  const addEducationItem = (item) => {
    setAppData((latest) => {
      const latestEduItems = [...latest.eduItems];
      latestEduItems.unshift(item);

      const updatedState = { ...latest };
      updatedState.eduItems = latestEduItems;

      return updatedState;
    });
  };

  const addWorkItem = (item) => {
    setAppData((latest) => {
      const latestItems = [...latest.workItems];
      latestItems.unshift(item);

      const updatedState = { ...latest };
      updatedState.workItems = latestItems;
      
      return updatedState;
    });
  };

  const addProjectItem = (item) => {
    setAppData((latest) => {
      const newListOfProjects = [...latest.projectItems];
      newListOfProjects.unshift(item);
      const newState = {...latest};
      newState.projectItems = newListOfProjects
      return newState;
    })
  }

  const updateGeneralInfo = (data) => {
    setAppData((latest) => {
      latest.fullName = data.fullName;
      latest.jobTitle = data.jobTitle;
      latest.email = data.email;
      latest.phoneNumber = data.phoneNumber;
      latest.linkedIn = data.linkedIn;
      latest.personalSite = data.personalSite;
      latest.desc = data.desc;
      return { ...latest };
    });
  };

  const updateEducationItem = (data) => {
    const { id } = data;
    setAppData((latest) => {
      const currentEduItems = [...latest.eduItems];
      let itemIndex = currentEduItems.findIndex((item) => item.id === id);
      currentEduItems[itemIndex] = data;

      const updatedState = { ...latest };
      updatedState.eduItems = currentEduItems;
      return updatedState;
    });
  };

  const updateProjectItem = (newData) => {
    setAppData((latest) => {
      let itemIndex = latest.projectItems.findIndex((item) => item.id === newData.id);
      latest.projectItems[itemIndex] = newData;
      return {...latest};
    });
  };

  const updateWorkItem = (data) => {
    const { id } = data;
    setAppData((latest) => {
      const currentWorkItems = [...latest.workItems];
      let itemIndex = currentWorkItems.findIndex((item) => item.id === id);
      currentWorkItems[itemIndex] = data;
      const updatedState = { ...latest };
      updatedState.workItems = currentWorkItems;
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

  const getEducationPreviewItems = (list) => {
    return list.map((item) => {
      return <EducationPreviewItem itemData={item} key={item.id} />;
    });
  };

  const getProjectItems = (items) => {
    return items.map(item => {
      const updateItem = (itemData) => {
        updateProjectItem(itemData);
      };
      const deleteItem = () => {
        removeProjectItem(item.id);
      }

      return (
        <ProjectItem
          itemData={item}
          onUpdate={updateItem}
          onDeleteBtnClicked={deleteItem}
          key={item.id}
        />
      );
    });
  }

  const getProjectPreviewItems = (list) => {
    return list.map((item) => (
      <ProjectPreviewItem itemData={item} key={item.id}/>
    ));
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

  const getWorkPreviewItems = (list) => {
    return list.map((item) => (
      <WorkPreviewItem itemData={item} key={item.id} />
    ));
  };

  const removeEducationItem = (id) => {
    setAppData((latest) => {
      const currentEduItems = [...latest.eduItems];
      const updatedEduItems = currentEduItems.filter((item) => item.id !== id);
      const updatedState = { ...latest };
      updatedState.eduItems = updatedEduItems;
      return updatedState;
    });
  };

  const removeProjectItem = (id) => {
    setAppData((latest) => {
      const filteredProjects = latest.projectItems.filter((item) => item.id !== id);
      latest.projectItems = filteredProjects;
      return {...latest};
    });
  }

  const removeWorkItem = (id) => {
    setAppData((latest) => {
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

  const educationItems = getEducationItems(appData.eduItems);
  const educationPreviewItems = getEducationPreviewItems(appData.eduItems);
  const workItems = getWorkItems(appData.workItems);
  const workPreviewItems = getWorkPreviewItems(appData.workItems);
  const projectItems = getProjectItems(appData.projectItems);
  const projectPreviewItems = getProjectPreviewItems(appData.projectItems);

  return (
    <>
      <h1>Resume Builder</h1>
      <main>
        <section className="cv-data">
          <General onUpdate={updateGeneralInfo} />
          <Education addItem={addEducationItem} degreeTypes={degreeTypes}>
            <ul>{educationItems}</ul>
          </Education>
          <Projects addItem={addProjectItem}>
            <ul>{projectItems}</ul>
          </Projects>
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
            <div className="header">
              <p className="full-name">{appData.fullName}</p>
              <p className="job-title">{appData.jobTitle}</p>
            </div>
            <div className="general preview-section">
              <ul className="contact">
                <li>
                  {appData.email && (
                    <>
                      <img src={MailImg} alt="email" />
                      <span className="email">{appData.email}</span>
                    </>
                  )}
                </li>
                <li>
                  {appData.phoneNumber && (
                    <>
                      <img src={PhoneImg} alt="phone" />
                      <span className="phone-number">
                        {appData.phoneNumber}
                      </span>
                    </>
                  )}
                </li>
                <li>
                  {appData.linkedIn && (
                    <>
                      <img src={LinkedInImg} alt="linkedin" />
                      <span className="linkedin-url">{appData.linkedIn}</span>
                    </>
                  )}
                </li>
                <li>
                  {appData.personalSite && (
                    <>
                      <img src={HomeImg} alt="house" />
                      <span className="personal-site">
                        {appData.personalSite}
                      </span>
                    </>
                  )}
                </li>
              </ul>
              <p className="description">{appData.desc}</p>
            </div>
            <section className="preview-section" aria-label="Education">
              <h2 className="section-title">Education</h2>
              <hr />
              <ul className="list">
                {educationPreviewItems}
              </ul>
            </section>
            <section className="preview-section" aria-label="Projects">
              <h2 className="section-title">Projects</h2>
              <hr />
              <ul className="list">
                {projectPreviewItems}
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
