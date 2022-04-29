import { Component } from "react";
import { MdOutlineEmail,MdWifiCalling3 } from "react-icons/md";
import './index.css';

class Contact extends Component{
    state={name:"",number:"",email:"",message:""}

    nameInput = (event) => {
        this.setState({name:event.target.value})
    }

    emailInput = (event) => {
        this.setState({email:event.target.value})
    }

    numberInput = (event) => {
        this.setState({number:event.target.value})
    }

    messageInput = (event) => {
        this.setState({message:event.target.value})
    }

    formSubmitted = (event) => {
        const {name,number,email,message}=this.state
        event.preventDefault();
        window.open(`mailto:${email}?subject="I have seen your Portfolio"&body=mobile no:${number} 
        ${name}: ${message}`);
    }

    render(){
        const {name,number,email,message}=this.state
        return(
            <div className='contact-container'>
            <h1 className='aboutme'>GET IN <span className='span-me'>TOUCH</span></h1>
            <div className="mail-container">
                <MdOutlineEmail className="icon-contact"/>
                <div className="mail-inner">
                  <p className="mailme">Mail Me</p>
                  <p className="num">sindhujessie3@gmail.com</p>
                </div>
            </div>
            <div className="mail-container">
                <MdWifiCalling3 className="icon-contact"/>
                <div className="mail-inner">
                  <p className="mailme">Call Me</p>
                  <p className="num">9392786866</p>
                </div>
            </div>
            <form action="mailto:m.vinaychaitanya@gmail.com" method="post" encType="text/plain" onSubmit={this.formSubmitted}>
              <input className="inputElement" value={name} onChange={this.nameInput} type="text" placeholder="Enter Name"/>
              <input className="inputElement" value={email} onChange={this.emailInput}  type="email" placeholder="Enter Email"/>
              <input className="inputElement" value={number} onChange={this.numberInput} type="number"  size="10" placeholder="Phone Number"/>
              <input className="inputElement" value={message} onChange={this.messageInput} type="text" placeholder="Message"/>
              <button className="submitButton" type="submit">Send Message</button>
             </form>
      </div>
        )
    }
} 
   


export default Contact