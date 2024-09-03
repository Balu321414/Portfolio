import React from "react";
import './skills.css';
import skills1 from '../../assects/skills1.jpg';
import skills2 from '../../assects/skills2.jpg';
 

const firstPercentageArray=['97%', '95%','97%']
  
const secondPercentageArray=['85%', '85%','97%']

const Skills = () =>{
    return(
        <section id="skills">
             <h1 className="row1"> <span id="aa">S</span>kills Set</h1>
           <div className="skillspage">
           <div className="skill">
                <img src={skills1} alt="skills"/>
                <div style={{display: 'grid'}}>
               {
                firstPercentageArray&&firstPercentageArray.map((item,index)=>{
                    return(
                    <div style={{backgroundColor:'white',height: 10,borderRadius:'5px',width:'25rem',marginTop:index===0?60:75}}>
                    <div style={{backgroundColor:'green',height: 10,borderRadius:'5px',width:`${item}`,paddingLeft:`${item}`}}><p style={{paddingTop:'10px'}}>{item}</p></div>
                    </div>
                )})
               }
            </div>
            </div>
            <div className="skill">
                <img src={skills2} alt="skills"/>
                <div style={{display: 'grid'}}>
               {
                secondPercentageArray&&secondPercentageArray.map((item,index)=>{
                    return(
                    <div style={{backgroundColor:'white',height: 10,borderRadius:'5px',width:'25rem',marginTop:index===0?60:75}}>
                    <div style={{backgroundColor:'green',height: 10,borderRadius:'5px',width:`${item}`,paddingLeft:`${item}`}}><p style={{paddingTop:'10px'}}>{item}</p></div>
                    </div>
                )})
               }
            </div>
            </div>
           </div>
        </section>
    )
}

export default Skills;