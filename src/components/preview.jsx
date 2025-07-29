import React from 'react'
import './preview.css';
import image1 from './resumeimage.svg'
import image2 from "./image2.jpeg"
import image3 from "./image3.webp"
import {useNavigate} from 'react-router-dom'



export default function Preview() {

    let navigate=useNavigate()
    let templates=[
        {name:"PRO",component:"template1",image:image1},
        {name:"classic",component:"template2",image:image2},
        {name:"proffesional",component:"template3",image:image3},
        
      
       

    ]
  return (
    <div className='preview'>
    
       
        {
            templates.map((item,index)=>{
                return(
                    <div onClick={()=>navigate(`/preview/${item.component}`)} key={index}>
                    
                    <img src={item.image} className='prev-image'/>
                    <h3>{item.name}</h3>
                 </div>
                )
                
            })
        }
    </div>
    
  )
}


