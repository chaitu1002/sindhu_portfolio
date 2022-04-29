import { Component } from "react";
import { FaBars } from "react-icons/fa";
import './index.css'

class Header extends Component{
    state={condition:false}

    buttonClicked = () => {
        this.setState(prevState => ({condition:!prevState.condition}))
    }

    render(){
        const {condition}=this.state
        return(
            <>
                <div className="header-container">
                <h1 className="name">sindhu</h1>
                <FaBars onClick={this.buttonClicked} className="icon"/>
             </div>
               {condition &&  
                <div className="transition-container">
                    <p>Home</p>
                    <p>About</p>
                    <p>Portfolio</p>
                    <p>Contact</p>
                </div>}
            </>
        )
    }
} 

export default Header