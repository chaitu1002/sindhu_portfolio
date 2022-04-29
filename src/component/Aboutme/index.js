import { Component } from "react";
import './index.css'



const details = [
    {
        title:"Name",
        description:"Sindhu Pakalapati"
    },
    {
        title:"Age",
        description:"23 Years"
    },
    {
        title:"Nationality",
        description:"India"
    },
    {
        title:"Address",
        description:"Nizampet, Hyderabad"
    },
    {
        title:"Phone",
        description:"9392786866"
    },
    {
        title:"Email",
        description:"sindhujessie3@gmail.com"
    },
    {
        title:"Languages",
        description:"Telugu, Hindi, English"
    }
]



class Aboutme  extends Component{
    render(){
        return(
            
            <div className='aboutme-page'>
                <h1 className='aboutme'>ABOUT <span className='span-me'>ME</span></h1>
                <h1 className='info'>Personal Info</h1>
                <p className='para'>To be an asset to the organization I work with,grow with the organization by being creative
                and innovative in accomplishing the assigned tasks, intend to build career with leading
                corporate people which will help me to reach the pinnacle of my potential and march from
                strength to strength.
                </p>
                {details.map(eachItem => (
                    <p key={eachItem.title} className='twospan'><span className='title'>{eachItem.title}: </span><span className='description'>{eachItem.description}</span></p>
                ))}
                 <h1 className='info1'>Education</h1>
                 <div className="education-card">
                    <div className="color-bar"></div>
                    <div className="college-container">
                        <p className="grey">Apparel Training & Design Centre</p>
                        <p className="white">Graduation, BVOC</p>
                        <p className="white">2021</p>
                    </div>
                 </div>
                 <div className="education-card">
                    <div className="color-bar"></div>
                    <div className="college-container">
                        <p className="grey">Sri Gayathri Junior College</p>
                        <p className="white">Intermediate, MPC</p>
                        <p className="white">2017</p>
                    </div>
                 </div>
                 <div className="education-card">
                    <div className="color-bar"></div>
                    <div className="college-container">
                        <p className="grey">SR Digi</p>
                        <p className="white">Secondary School Of Certificate</p>
                        <p className="white">2015</p>
                    </div>
                 </div>
            
                 <h1 className='info1'>Internship</h1>
                 <div className="internship-card">
                    <p className="white1">Shahi Export Pvt, Ltd</p>
                    <p className="white">Fabric Retailers in Hyderabad</p>
                    <p className="white">2021</p>
                 </div>
                 <h1 className='info1'>Experience</h1>
                 <div className="internship-card">
                    <p className="white1">Brand Mandir, Jubilee Hills</p>
                    <p className="white">Assistant Stylist</p>
                    <p className="white">2022</p>
                 </div>
                <h1 className='aboutme1'>MY <span className='span-me'>SKILLS</span></h1>
                  <div className="skills-container">
                        <p className="skills-text">Good Communication Skills</p>
                        <p className="skills-text">85%</p>
                    </div>
                    <div className="show-container">
                        <div className="inner-container">
                        </div>
                    </div>
                    <div className="skills-container">
                        <p className="skills-text">Good Business Sense</p>
                        <p className="skills-text">90%</p>
                    </div>
                    <div className="show-container">
                        <div className="inner-container1">
                        </div>
                    </div>
                    <div className="skills-container">
                        <p className="skills-text">Creativity</p>
                        <p className="skills-text">80%</p>
                    </div>
                    <div className="show-container">
                        <div className="inner-container2">
                        </div>
                    </div>
                    <div className="skills-container">
                        <p className="skills-text">Sense of Style</p>
                        <p className="skills-text">90%</p>
                    </div>
                    <div className="show-container">
                        <div className="inner-container1">
                        </div>
                    </div>
                    <div className="skills-container">
                        <p className="skills-text">Team Player</p>
                        <p className="skills-text">88%</p>
                    </div>
                    <div className="show-container">
                        <div className="inner-container3">
                        </div>
                    </div>
                    <div className="skills-container">
                        <p className="skills-text">Knowledge of Current Fashion Trends</p>
                        <p className="skills-text">95%</p>
                    </div>
                    <div className="show-container">
                        <div className="inner-container5">
                        </div>
                    </div>
            </div>
        )
    }
}
        
    

export default Aboutme