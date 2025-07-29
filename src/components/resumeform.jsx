import "./ResumeForm.css";


function ResumeForm({ resumeData, setResumeData }) {
  
  function addBlock(section, fields) {
    let data = resumeData[section];
    let updatedArray = [...data, fields];
    setResumeData({ ...resumeData, [section]: updatedArray });
  }

  function removeBlock(section, index) {
    let data = resumeData[section];
    let updatedArray = data.filter((item, i) => i !== index);
    setResumeData({ ...resumeData, [section]: updatedArray });
  }

  function updateField(section, field, value) {
    let data = resumeData[section];
    let updatedData = { ...data, [field]: value };
    setResumeData({ ...resumeData, [section]: updatedData });
  }

  // ✅ Only one updateArrayField function
  function updateArrayField(section, index, field, value) {
    let data = resumeData[section];
    let updateData = data.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setResumeData({ ...resumeData, [section]: updateData });
  }

  function saveResume() {
    localStorage.setItem("data", JSON.stringify(resumeData));
  }

  return (
    <div className="form-container">
      
      <div className="section">
        <h1 className="title">Personal Details</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            value={resumeData["personalDetails"].name}
            onChange={(e) =>
              updateField("personalDetails", "name", e.target.value)
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={resumeData["personalDetails"].email}
            onChange={(e) =>
              updateField("personalDetails", "email", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Phone "
            value={resumeData["personalDetails"].phone}
            onChange={(e) =>
              updateField("personalDetails", "phone", e.target.value)
            }
          />
          <input
            type="url"
            placeholder="Linkedin"
            value={resumeData["personalDetails"].linkedin}
            onChange={(e) =>
              updateField("personalDetails", "linkedin", e.target.value)
            }
          />
          <input
            type="url"
            placeholder="Github"
            value={resumeData["personalDetails"].github}
            onChange={(e) =>
              updateField("personalDetails", "github", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Location"
            value={resumeData["personalDetails"].location}
            onChange={(e) =>
              updateField("personalDetails", "location", e.target.value)
            }
          />
          <input
            type="url"
            placeholder="Website"
            value={resumeData["personalDetails"].website}
            onChange={(e) =>
              updateField("personalDetails", "website", e.target.value)
            }
          />
        </div><br></br>
        <div className="section">
          <h1 className="title">Professional Summary</h1>
          <textarea
            placeholder="Enter your professional summary"
            value={resumeData["summary"]}
            onChange={(e) =>
              setResumeData({ ...resumeData, summary: e.target.value })
            }
          />
        </div>
         <br></br>
        <div>
          <h1 className="title">Experience</h1>
          <button
            onClick={() =>
              addBlock("experience", {
                company: "",
                position: "",
                duration: "",
                description: "",
              })
            }
          >
            Add Experience
          </button>
        </div>

        {resumeData["experience"].map((expe, index) => (
          <div className="input-container" key={index}>
            <input
              type="text"
              placeholder="Company"
              value={expe.company}
              onChange={(e) =>
                updateArrayField("experience", index, "company", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Position"
              value={expe.position}
              onChange={(e) =>
                updateArrayField("experience", index, "position", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Duration"
              value={expe.duration}
              onChange={(e) =>
                updateArrayField("experience", index, "duration", e.target.value)
              }
            />
            <textarea
              placeholder="Description"
              value={expe.description}
              onChange={(e) =>
                updateArrayField("experience", index, "description", e.target.value)
              }
            />
            <div>
              {resumeData["experience"].length > 1 && (
                <button onClick={() => removeBlock("experience", index)}>
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        <br></br>
        <div>
          <h1 className="title">Education</h1>
          <button
            onClick={() =>
              addBlock("education", { school: "", duration: "", grade: "" })
            }
          >
            Add Education
          </button>
        </div>

        {resumeData["education"].map((edu, index) => (
          <div className="section input-container" key={index}>
            <input
              type="text"
              placeholder="School"
              value={edu.school}
              onChange={(e) =>
                updateArrayField("education", index, "school", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Duration"
              value={edu.duration}
              onChange={(e) =>
                updateArrayField("education", index, "duration", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Grade"
              value={edu.grade}
              onChange={(e) =>
                updateArrayField("education", index, "grade", e.target.value)
              }
            />
            <div>
              {resumeData["education"].length > 1 && (
                <button onClick={() => removeBlock("education", index)}>
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
     <br></br>
      <div>
        <h1 className="title">Project</h1>
        <button
          onClick={() =>
            addBlock("projects", { name: "", technologies: "", description: "" })
          }
        >
          Add Project
        </button>
      </div>

      {resumeData.projects.map((project, index) => (
        <div key={index} className="section input-container">
          <input
            type="text"
            placeholder="Title"
            value={project.name}
            onChange={(e) =>
              updateArrayField("projects", index, "name", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Technologies"
            value={project.technologies}
            onChange={(e) =>
              updateArrayField("projects", index, "technologies", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={project.description}
            onChange={(e) =>
              updateArrayField("projects", index, "description", e.target.value)
            }
          />
          <div>
            {resumeData.projects.length > 1 && (
              <button onClick={() => removeBlock("projects", index)}>
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
<br></br>
      <div className="section">
        <h1 className="title">Skills</h1>
        <textarea
          placeholder="Enter your Skills"
          value={resumeData["skills"]}
          onChange={(e) =>
            setResumeData({ ...resumeData, skills: e.target.value })
          }
        />
      </div>

      <button
        onClick={() => saveResume()}
        style={{ textAlign: "center", marginLeft: "350px", marginTop: "30px" }}
      >
        Save Resume
      </button>
    </div>
  );
}

export default ResumeForm;