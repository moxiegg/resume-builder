import { useState } from "react";
import Form from "./Form";
import Resume from "./Resume";

const personObj = {
  name: "Name",
  email: "example@abc.com",
  mobile: 9999999999,
};

// const educationObj = [
//   {
//     institute: "XYZ University",
//     course: "ABC",
//     from: "2023-01-01",
//     to: "2025-01-01",
//   },
//   {
//     institute: "XYZ University",
//     course: "ABC",
//     from: "2023-01-01",
//     to: "2025-01-01",
//   },
// ];
function educationObj(){
  return { institute: "ABC University", course: "XYZ", from: "", to: "",selected:true };
}
const projectObj = { projectTitle: "", techStack: "", description: "" ,selected:true};

export default function App() {
  const [isSubmit, setSubmit] = useState(false);
  const [personInfo, setPersonInfo] = useState(personObj);
  const [projectInfo, setProject] = useState([projectObj]);
  const [educationInfo, setEducation] = useState([new educationObj()]);

  const toggleSelect =(e)=>{
    const ind = e.target.getAttribute("data-index");
    const temp = educationInfo.map((obj, i) => {
      if (i == ind) {
        console.log(i)
        obj.selected = true;
        return obj;
      } else {
        obj.selected=false;
        return obj;
      }
    });
    console.log(temp);
    setEducation(temp);
  }
  const handleChange = (e) => {
    const attr = e.target.name;
    const value = e.target.value;
    const parentId = e.target.parentNode.getAttribute("data-info");
    const ind = e.target.parentNode.getAttribute("data-index");
    console.log(ind);
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
  
  const handleAdd = (e) => {
    const ele = e.target.getAttribute("data-info");
    if (ele == "education") {
      const temp = educationInfo.map((obj) => {
        obj.selected=false;
        return obj;
      });
      setEducation([...temp,new educationObj()]);
    } else if (ele == "project") {
      const temp = projectInfo.map((obj) => {
        obj.selected=false;
        return obj;
      });
      setProject([...temp, projectObj]);
    }
  };
  if (!isSubmit) {
    return (
      <Form
        personInfo={personInfo}
        projectInfo={projectInfo}
        educationInfo={educationInfo}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleAdd={handleAdd}
        toggleSelect={toggleSelect}
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
