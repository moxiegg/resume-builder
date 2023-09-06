/* eslint-disable react/prop-types */
import "./App.css";
export default function Form({
  personInfo,
  educationInfo,
  projectInfo,
  handleChange,
  handleSubmit,
  handleAdd,
}) {
  if (!personInfo) return <div>Error</div>;
  return (
    <form onSubmit={handleSubmit}>
      <div className="formElement" id="person">
        <div className="title">Personal Info</div>
        <label htmlFor="name"> Name: </label>
        <input
          type="text"
          name="name"
          id=""
          value={personInfo.name}
          onChange={handleChange}
        />
        <label htmlFor="number">Number:</label>
        <input
          type="number"
          name="mobile"
          id=""
          value={personInfo.mobile}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id=""
          value={personInfo.email}
          onChange={handleChange}
        />
      </div>
      <div className="educationElement">
        <div className="title">
          <div>Education</div>
          <div>
            <button type="button" className="formButton" data-info="education" onClick={handleAdd}>
              +
            </button>
          </div>
        </div>
        {educationInfo.map((obj, i) => (
          <div
            className="formElement"
            key={"education" + i}
            data-info="education"
            data-index={i}
          >
            <label htmlFor="institute">Institute: </label>
            <input
              type="text"
              name="institute"
              value={educationInfo[i].institute}
              onChange={handleChange}
            ></input>
            <label htmlFor="course">Course: </label>
            <input
              type="text"
              name="course"
              value={educationInfo[i].course}
              onChange={handleChange}
            ></input>
            <label htmlFor="from">From: </label>
            <input
              type="date"
              name="from"
              value={educationInfo[i].from}
              onChange={handleChange}
            ></input>
            <label htmlFor="to">To: </label>
            <input
              type="date"
              name="to"
              value={educationInfo[i].to}
              onChange={handleChange}
            ></input>
          </div>
        ))}
      </div>
      <div className="educationElement">
        <div className="title">
          <div>Personal Projects</div>
          <div>
            <button type="button" className="formButton" data-info="project" onClick={handleAdd}>
              +
            </button>
          </div>
        </div>
        {projectInfo.map((obj, i) => (
          <div
            className="formElement"
            key={"project" + i}
            data-info="project"
            data-index={i}
          >
            <label htmlFor="institute">Project Title: </label>
            <input
              type="text"
              name="projectTitle"
              value={obj.projectTitle}
              onChange={handleChange}
            ></input>
            <label htmlFor="course">Tech Stack: </label>
            <input
              type="text"
              name="techStack"
              value={obj.techStack}
              onChange={handleChange}
            ></input>
            <label htmlFor="from">Description: </label>
            <textarea
              name="description"
              value={obj.description}
              onChange={handleChange}
              rows="4"
              cols="20"
            ></textarea>
          </div>
        ))}
        </div>
      <button type="submit" className="formButton">
        Submit
      </button>
    </form>
  );
}
