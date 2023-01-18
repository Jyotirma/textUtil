import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1400);
  }

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled", "success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#1c0540'
      showAlert("Dark mode is enabled", "success")

    }
  }
  return (
    <div className="App">
      <Navbar title = "TextUtil" toggleMode ={toggleMode} mode = {mode} />
      <Alert alert={alert}/>
      <div>
      <Textarea showAlert={showAlert} heading = "Text Util - Word Counter, Character Counter" mode={mode}/>
      </div>
    </div>
  );
}

export default App;
