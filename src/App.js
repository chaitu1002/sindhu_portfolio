import { Component } from 'react';
import Home from './component/Home'
import Aboutme from './component/Aboutme'
import Work from './component/Work'
import Contact from './component/Contact'
import './App.css';


class App extends Component{
  render(){
    return(
      <div className="main-container">
        <Home/>
          <Aboutme/>
          <Contact/>
          <Work/>
      </div>
    )
  }
} 
    
  


export default App;
