import React, { useState } from 'react'
import "../Styles/Login.css"
import Nav from './Nav'
import Login from './Login'

function LoginPage() {

    const [showLogin, setShowLogin] = useState(false)

  return (
    <div className='loginScreenBackground'>
        <Nav></Nav>
        <div className='loginScreen'>
            {showLogin ?
                <Login></Login>
                :
                <div className='loginContainer'>
                    <h1>
                        Unlimited films, TV programmes and more.
                    </h1>
                    <h2>
                        Watch anywhere. Cancel any time.
                    </h2>
                    <h3>
                        Ready to watch? 
                        <a onClick={()=>setShowLogin(true)}>
                            Enter your email to create or restart your membership.
                        </a>
                    </h3>
                    <div className='loginSearch'>
                        <input></input>
                        <button>Search</button>
                    </div>
                </div>
            }
            
        </div>        
    </div>
  )
}

export default LoginPage