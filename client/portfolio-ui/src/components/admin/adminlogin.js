import React, {useState} from 'react'
import './adminlogin.css';

export default function AdminLogin() {

    const label = ">"
    
    const [formProgress, setFormProgress] = useState(1);
    
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("submitted form")
    }

    const handleNext = (e) => {
        e.preventDefault();
        setFormProgress(2);
    }

    const usernameForm = <div id="login-form">
        <span>
            <label for="username">{label}</label>
            <input required name="username" type="text" placeholder="username"/>
        </span>
        <button onClick={handleNext} type="submit" >next</button>
    </div>

    const passwordForm = <div id="login-form">
        <span>
            <label for="password">{label}</label>
            <input required name="password" type="text" placeholder='password'/>
        </span>
            <button type="submit">login</button>
    </div>


    const renderForms = () => {
        if (formProgress === 1) {
            return usernameForm;
        }else if (formProgress === 2) {
            return passwordForm;
        }else {
            return <h1>somethings wrong</h1>
        }
    }

  return (
    <div id="admin-wrapper" className="page-container">
        {renderForms()}
    </div>
  )
}
