import "./hero.css"
import { useNavigate } from "react-router-dom"
import video from "./backvid.mp4"
export default function Hero() {
  let navigate = useNavigate();
  return (
    <div className="hero">
        <video src={video} autoPlay loop muted className="video" />
        <div className="content">
        <h1 className="con">Generate your resume</h1>
        <h1 className="con">Craft your resume like a professional</h1>
        <br></br>
        <button className="btn" onClick={()=>navigate("/edit")}>Generate Now</button>
        </div>
    </div>
  )
}
