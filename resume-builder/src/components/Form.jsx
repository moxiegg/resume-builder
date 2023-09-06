/* eslint-disable react/prop-types */
import "./App.css";
export default function Form({
  personInfo,
  educationInfo,
  projectInfo,
  handleChange,
  handleSubmit,
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
        <div className="title">Education</div>
        {educationInfo.map((obj, i) => (
          <div className="educationInfo" key={"education"+i} data-info="education" data-index={i}>
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
              name="from"
              value={educationInfo[i].course}
              onChange={handleChange}
            ></input>
            <label htmlFor="from">From: </label>
            <input
              type="text"
              name="from"
              value={educationInfo[i].from}
              onChange={handleChange}
            ></input>
            <label htmlFor="to">To: </label>
            <input
              type="text"
              name="to"
              value={educationInfo[i].to}
              onChange={handleChange}
            ></input>
          </div>
        ))}
      </div>
      {/* <label htmlFor="institute"> Institute: </label>
        <input
          type="text"
          name="institute"
          id=""
          value={educationInfo[0].institute}
          onChange={handleChange}
        />
        <label htmlFor="course"> Course: </label>
        <input
          type="text"
          name="course"
          id=""
          value={educationInfo[0].course}
          onChange={handleChange}
        />
        <label htmlFor="from">From:</label>
        <input
          type="date"
          name="from"
          id=""
          value={educationInfo[0].from}
          onChange={handleChange}
        />
        <label htmlFor="to">To:</label>
        <input
          type="date"
          name="to"
          id=""
          value={educationInfo[0].to}
          onChange={handleChange}
        />
      </div> */}
      <div className="formElement" id="project" data-index="0">
        <div className="title">Personal Projects</div>
        <label htmlFor="projectTitle"> Project Title: </label>
        <input
          type="text"
          name="projectTitle"
          id=""
          value={projectInfo[0].projectTitle}
          onChange={handleChange}
        />
        <label htmlFor="techStack"> Tech Stack: </label>
        <input
          type="text"
          name="techStack"
          id=""
          value={projectInfo[0].techStack}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          rows="4"
          cols="20"
          id=""
          value={projectInfo[0].description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="formElement" id="project">
        <label htmlFor="projectTitle"> Project Title: </label>
        <input type="text" name="projectTitle" id="" onChange={handleChange} />
        <label htmlFor="techStack"> Tech Stack: </label>
        <input type="text" name="techStack" id="" onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          rows="4"
          cols="20"
          id=""
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="formButton">
        Submit
      </button>
    </form>
  );
}
