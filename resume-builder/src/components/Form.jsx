/* eslint-disable react/prop-types */
import "./App.css";
export default function Form({
  personInfo,
  educationInfo,
  projectInfo,
  handleChange,
  handleSubmit,
  handleAdd,
  toggleSelect,
}) {
  if (!personInfo) return <div>Error</div>;
  return (
    <form onSubmit={handleSubmit}>
      <div className="formElement" data-info="person">
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
            <button
              type="button"
              className="formButton"
              data-info="education"
              onClick={handleAdd}
            >
              +
            </button>
          </div>
        </div>
        {educationInfo.map((obj, i) => {
          if (obj.selected) {
            return (
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
                  value={obj.institute}
                  onChange={handleChange}
                ></input>
                <label htmlFor="course">Course: </label>
                <input
                  type="text"
                  name="course"
                  value={obj.course}
                  onChange={handleChange}
                ></input>
                {/* TODO:add logic for making sure the 'from' date is before 'to' date */}
                <label htmlFor="from">From: </label>
                <input
                  type="date"
                  name="from"
                  value={obj.from}
                  onChange={handleChange}
                  ></input>
                  {/* TODO:try adding logic for entering present in 'to' date */}
                <label htmlFor="to">To: </label>
                <input
                  type="date"
                  name="to"
                  value={obj.to}
                  onChange={handleChange}
                ></input>
              </div>
            );
          } else {
            return (
              <div
                key={"education" + i}
                onClick={toggleSelect}
                data-info="education"
                data-index={i}
                className="toggleDetail"
              >
                {obj.institute}
              </div>
            );
          }
        })}
      </div>
      <div className="educationElement">
        <div className="title">
          <div>Personal Projects</div>
          <div>
            <button
              type="button"
              className="formButton"
              data-info="project"
              onClick={handleAdd}
            >
              +
            </button>
          </div>
        </div>
        {projectInfo.map((obj, i) => {
          if (obj.selected) {
            return (
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
                <label htmlFor="techStack">Tech Stack: </label>
                <input
                  type="text"
                  name="techStack"
                  value={obj.techStack}
                  onChange={handleChange}
                ></input>
                <label htmlFor="description">Description: </label>
                <textarea
                  name="description"
                  value={obj.description}
                  onChange={handleChange}
                  rows="4"
                  cols="20"
                ></textarea>
              </div>
            );
          }else{
            return (
              <div
                key={"project" + i}
                onClick={toggleSelect}
                data-index={i}
                data-info="project"
                className="toggleDetail"
              >
                {obj.projectTitle}
              </div>
            );
            
          }
        })}
      </div>
      <button type="submit" className="formButton">
        Submit
      </button>
    </form>
  );
}
