

import './template2.css'
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./resumeform.css"
function Template2({resumeData})
{
    const resumeRef = useRef();
        const downloadPDF = () => {
            const input = resumeRef.current;
            html2canvas(input, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "pt", "a4");
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("resume.pdf");
            });
        };
     return (
    <>
      <div>
      <div className="resume-container" ref={resumeRef}>
      <div className="resume">
        {/* Header Section */}
        <header className="header">
          <h1 className="name">{resumeData.personalDetails.name}</h1>
          <div className="contact-info">
            <div className="contact-row">
              <span>{resumeData.personalDetails.location}</span>
              <span>{resumeData.personalDetails.email}</span>
              <span>{resumeData.personalDetails.mobile}</span>
            </div>
            <div className="contact-row">
              <span>{resumeData.personalDetails.linkedIn}</span>
              <span>{resumeData.personalDetails.github}</span>
              <span>{resumeData.personalDetails.website}</span>
            </div>
          </div>
        </header>


        {/* Summary Section */}
        <section className="section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="summary-text">{resumeData.summary}</p>
        </section>


        {/* Experience Section */}
        <section className="section">
          <h2 className="section-title">Professional Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="position-company">
                  <h3 className="position">{exp.position}</h3>
                  <h4 className="company">{exp.company}</h4>
                </div>
                <span className="duration">{exp.duration}</span>
              </div>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </section>


        {/* Education Section */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h3 className="school">{edu.school}</h3>
                <span className="duration">{edu.duration}</span>
              </div>
              <p className="grade">{edu.grade}</p>
            </div>
          ))}
        </section>


        {/* Projects Section */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3 className="project-name">{project.name}</h3>
              <p className="technologies"><strong>Technologies:</strong> {project.technologies}</p>
              <p className="description">{project.description}</p>
            </div>
          ))}
        </section>


        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">Technical Skills</h2>
          <p className="skills-text">{resumeData.skills}</p>
        </section>
      </div><br></br><br></br>
      
    </div>
    <button className="download-button" onClick={downloadPDF}>Download PDF</button>
    </div>
    </>
  );


}


export default Template2







