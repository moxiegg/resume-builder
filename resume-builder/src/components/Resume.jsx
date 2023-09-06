// import {useState} from 'react';

/* eslint-disable react/prop-types */
export default function Resume({
  personInfo,
  educationInfo,
  projectInfo,
  handleEdit,
}) {
  return (
    <>
      <div className="personInfo">
        {Object.keys(personInfo).map((key) => (
          <div key={key}>
            {key}:{personInfo[key]}
          </div>
        ))}
      </div>
      <div className="educationInfo">
        {educationInfo.map((obj, i) =>
          Object.keys(obj).map((key) => (
            <div key={i + key}>
              {key}:{obj[key]}
            </div>
          ))
        )}
      </div>
      <div className="projectInfo">
        {projectInfo.map((obj, i) =>
          Object.keys(obj).map((key) => (
            <div key={i + key}>
              {key}:{obj[key]}
            </div>
          ))
        )}
      </div>
      <button onClick={handleEdit}>Edit</button>
    </>
  );
}
