// import {useState} from 'react';
import "./resume.css";
/* eslint-disable react/prop-types */
//TODO:create the style of a resume
export default function Resume({
  personInfo,
  educationInfo,
  projectInfo,
  handleEdit,
}) {
  return (
    <div className="resumeContent">
      <div className="title">Generated Resume
      <button onClick={handleEdit} className="formButton">Edit</button></div>
      <div className="resume-container">
        <div className="header">
          <div className="name">{personInfo.name}</div>
          <div className="contact-details">
            <div>{personInfo.mobile}</div>
            <div>{personInfo.email}</div>
          </div>
        </div>
        <div className="content">
          <div className="section">
            <div className="section-title">Education</div>
            {educationInfo.map((obj, i) => (
              <div className="education-element" key={obj.institute + i}>
                <div className="university">
                  <div className="uni-name">{obj.institute}</div>
                  <div className="sub-title">{obj.course}</div>
                </div>
                <div className="duration">
                  {obj.from} to {obj.to}
                </div>
              </div>
            ))}
          </div>
          <div className="section">
            <div className="section-title">Personal Projects</div>
            {projectInfo.map((obj, i) => (
              <div className="project-element" key={obj.projectTitle + i}>
                <div className="project-title">{obj.projectTitle}</div>
                <div className="sub-title">{obj.techStack}</div>
                <div className="project-description">
                  <ul>
                    {obj.description.split(".").map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
