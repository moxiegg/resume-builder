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
function educationObj() {
  return {
    institute: "ABC University",
    course: "XYZ",
    from: "",
    to: "",
    selected: true,
  };
}
function projectObj() {
  return {
    projectTitle: "Cool Site",
    techStack: "",
    description: "",
    selected: true,
  };
}

export default function App() {
  const [isSubmit, setSubmit] = useState(false);
  const [personInfo, setPersonInfo] = useState(personObj);
  const [projectInfo, setProject] = useState([new projectObj()]);
  const [educationInfo, setEducation] = useState([new educationObj()]);
  const [errorMsg , setError] = useState("");
  const toggleSelect = (e) => {
    const ind = e.target.getAttribute("data-index");
    const type = e.target.getAttribute("data-info");
    if (type === "education") {
      const temp = educationInfo.map((obj, i) => {
        if (i == ind) {
          obj.selected = true;
          return obj;
        } else {
          obj.selected = false;
          return obj;
        }
      });
      setEducation(temp);
    } else if (type === "project") {
      const temp = projectInfo.map((obj, i) => {
        if (i == ind) {
          obj.selected = true;
          return obj;
        } else {
          obj.selected = false;
          return obj;
        }
      });
      setProject(temp);
    }
  };
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
      if (attr == "to") {
        let startDate = educationInfo[ind].from;
        if (startDate != "") {
          if (new Date(value) < new Date(startDate)) setError("Invalid Date!!");
          else setError("");
        }
      } else if (attr == "from") {
        let endDate = educationInfo[ind].to;
        if (endDate != "") {
          if (new Date(endDate) < new Date(value)) setError("Invalid Date!!");
          else setError("");
        }
      }
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

    if(errorMsg.length==0)setSubmit(true);
    else setError("Unable to Submit")
  };

  const handleEdit = () => {
    setSubmit(false);
  };

  const handleAdd = (e) => {
    const ele = e.target.getAttribute("data-info");
    if (ele == "education") {
      const temp = educationInfo.map((obj) => {
        obj.selected = false;
        return obj;
      });
      setEducation([...temp, new educationObj()]);
    } else if (ele == "project") {
      const temp = projectInfo.map((obj) => {
        obj.selected = false;
        return obj;
      });
      setProject([...temp, new projectObj()]);
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
        errorMsg={errorMsg}
      ></Form>
    );
  } else{
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
