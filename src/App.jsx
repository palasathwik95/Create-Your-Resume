import Navbar from "./components/navbar"
import "./App.css"
import Hero from "./components/hero"
import { Routes,Route } from "react-router-dom"
import Resumeform from "./components/resumeform"
import { useState } from "react"
import { useEffect } from "react"
import Template1 from "./components/template1"
import Template2 from "./components/template2"
import Preview from "./components/preview"

function App() {

  useEffect(()=>{
    let myData = localStorage.getItem("resumeData");
    if(myData){
      myData = JSON.parse(myData);
      myData && setResumeData(myData);
    }
  },[]);
  let [resumeData, setResumeData] = useState({
    personalDetails: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      website: "",
      address: ""
    },
    summary: "",
    experience:[
      {company:"",position:"",duration:"",description:""}
    ],
    education:[
      {school:"",duration:"",grade:""}
    ],
    projects:[
      {title:"",description:"",technology:""}
    ],
    skills:"",
});

  return (
    <>
      <div>
       <Navbar />
       <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/edit" element={<Resumeform resumeData={resumeData} setResumeData={setResumeData}/>} />
          <Route path="/preview" element={<Preview/>} />
          <Route path="/preview/template1" element={<Template1 data={resumeData}/>}></Route>
          <Route path="/preview/template2" element={<Template2 resumeData={resumeData}/>}></Route>
        

       </Routes>
      </div>
    </>
  )
}

export default App
