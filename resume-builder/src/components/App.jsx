import { useState } from "react";
import Form from "./Form";
import Resume from "./Resume";

const personObj = {
  name: "Name",
  email: "example@abc.com",
  mobile: 9999999999,
};

const educationObj = [
  {
    institute: "XYZ University",
    course: "ABC",
    from: "2023-01-01",
    to: "2025-01-01",
  },
  {
    institute: "XYZ University",
    course: "ABC",
    from: "2023-01-01",
    to: "2025-01-01",
  },
];

const projectObj = [
  { projectTitle: "", techStack: "", description: "" },
  { projectTitle: "", techStack: "", description: "" },
];
export default function App() {
  const [isSubmit, setSubmit] = useState(false);
  const [personInfo, setPersonInfo] = useState(personObj);
  const [projectInfo, setProject] = useState(projectObj);
  const [educationInfo, setEducation] = useState(educationObj);

  const handleChange = (e) => {
    const attr = e.target.name;
    const value = e.target.value;
    const parentId = e.target.parentNode.getAttribute("data-info");
    const ind = e.target.parentNode.getAttribute("data-index");
    if (parentId == "person") setPersonInfo({ ...personInfo, [attr]: value });
    else if (parentId == "project") {
      const temp = projectInfo.map((obj, i) => {
        if (i == ind) {
          obj[attr] = value;
          return obj;
        } else return obj;
      });
      setProject(temp);
    } else {
      const temp = educationInfo.map((obj, i) => {
        if (i == ind) {
          obj[attr] = value;
          return obj;
        } else return obj;
      });
      setEducation(temp);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  const handleEdit = () => {
    setSubmit(false);
  };
  if (!isSubmit) {
    return (
      <Form
        personInfo={personInfo}
        projectInfo={projectInfo}
        educationInfo={educationInfo}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      ></Form>
    );
  } else {
    return (
      <Resume
        personInfo={personInfo}
        educationInfo={educationInfo}
        projectInfo={projectInfo}
        handleEdit={handleEdit}
      ></Resume>
    );
  }
}
