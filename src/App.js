import React, {useState} from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null)
  const [mode, setmode] = useState('light');//Whether dark mode is enabled or not

  const showAlert = (message, type, typeMessage)=>{
    setalert({
      msg: message,
      type: type,
      typemsg: typeMessage
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }
const removeBodyClasses = () =>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')

}
  const toggleMode = (cls)=>{
    
    if(cls===null)
    {
      removeBodyClasses();
      if(mode === 'light')
      {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark Mode has been enabled", "success", "SUCCESS");
      document.title = 'TextUtils-Dark';
      }
      else
      {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been enabled", "success", "SUCCESS")
      document.title = 'TextUtils-Light';
      // setInterval(()=> {
      //   document.title = 'Text Utils is Amazing'
      // },2000);
      // setInterval(()=> {
      //  document.title = 'Install Text Utils Now'
      // }, 1500)
      }
    }
    else{
      removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    }
    
 }





  // const toggleMode = ()=>{
  //    if(mode === 'light')
  //    {
  //    setmode('dark');
  //    document.body.style.backgroundColor = '#042743';
  //    showAlert(" Dark Mode has been enabled", "success", "SUCCESS");
  //    }
  //    else
  //    {
  //    setmode('light');
  //    document.body.style.backgroundColor = 'white';
  //    showAlert(" Light Mode has been enabled", "success", "SUCCESS")
  //    }
  // }
  return (
    
    <div className="App">
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className = "container my-3">
<Switch>
          <Route exact path="/about">
            <AboutUs mode = {mode}/>
          </Route>
         
         
          <Route exact path="/">
          <TextForm showAlert={showAlert} title="Enter text to analyze below" mode = {mode}/>
          </Route>
        </Switch>
      
     
       
       {/* <AboutUs/> */}

     </div>
     </Router>
    </div>
    
  );
}

export default App;
