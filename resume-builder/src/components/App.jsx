import { useState } from "react";
import Form from "./Form";
import Resume from "./Resume";

const personObj = {
  name: "Name",
  email: "example@abc.com",
  mobile: 9999999999,
};

const educationObj = {
  institute: "XYZ University",
  course: "ABC",
  from: "2023-01-01",
  to: "2025-01-01",
};

const projectObj = { projectTitle: "", techStack: "", description: "" };
export default function App() {
  const [isSubmit, setSubmit] = useState(false);
  const [personInfo, setPersonInfo] = useState(personObj);
  const [projectInfo, setProject] = useState(projectObj);
  const [educationInfo, setEducation] = useState(educationObj);

  const handleChange = (e) => {
    const attr = e.target.name;
    const value = e.target.value;
    console.log(e.target.value);
    const parentId = e.target.parentNode.id;
    if (parentId == "person") setPersonInfo({ ...personInfo, [attr]: value });
    else if (parentId == "project")
      setProject({ ...projectInfo, [attr]: value });
    else {
      setEducation({ ...educationInfo, [attr]: value });
      console.log(educationInfo);
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
    return <Resume personInfo={personInfo} handleEdit={handleEdit}></Resume>;
  }
}
