import React, { useRef, useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { auth } from '../Resources/Constants'

function Login() {

    const [type, setType] = useState("Sign Up")
    const [errorMessage, setErrorMessage] = useState()
    const emailInput = useRef()
    const passInput = useRef()
    const pass2Input = useRef()

    function toggleType(){
        if(type === "Sign In")
            setType("Sign Up")
        else
            setType("Sign In")
        
        // Reset the error message on new sign in attempt        
        setErrorMessage()
    }
    function loginButtonClicked(){
        if(type === "Sign In")
            signIn()
        else
            signUp()
        
        // Reset the error message on new sign in attempt
        setErrorMessage()
    }
    function signIn(){
        // Get the input values
        const email = emailInput.current.value
        const pass = passInput.current.value

        // Attempt to sign in
        signInWithEmailAndPassword(auth, email, pass).then(user =>{
            console.log("signed in user: ")
            console.log(user)
        }).catch(err => {
            setErrorMessage(err.message)
        })                
    }
    function signUp(){
        // Get the input values
        const email = emailInput.current.value
        const pass = passInput.current.value
        const pass2 = pass2Input.current.value

        // Make sure the password confirmation matches
        if(pass !== pass2)
            setErrorMessage("passwords do not match")

        // Attempt to create the user
        createUserWithEmailAndPassword(auth, email, pass).then( user =>{
            console.log("created user:")
            console.log(user)
        }).catch(err => {
            setErrorMessage(err.message)
        })
    }

  return (
    <div className='loginWindow'>
        <h1>
            {type}
        </h1>
        <div>
            <input placeholder='email' ref={emailInput }></input>
        </div>
        <div>
            <input placeholder='password' ref={passInput}></input>
        </div>
        {type === "Sign Up" && 
            <div>
                <input placeholder='re-enter password' ref={pass2Input}></input>
            </div>
        }
        <div className='loginErrorMessage'>
            {errorMessage}
        </div>
        <div>
            <button onClick={loginButtonClicked}>{type}</button>
        </div>
        <div className='loginBottomText'>
            {
                type === "Sign In" ?
                <div>
                    New to Netflix? 
                    <a onClick={toggleType}>
                        Sign Up now
                    </a>

                </div>
                :
                <div>
                    Already a member? 
                    <a onClick={toggleType}>
                        Sign In
                    </a>

                </div>
            }
        </div>
    </div>
  )
}

export default Login