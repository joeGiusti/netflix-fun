import './App.css';
import Homepage from './Components/Homepage';
import {Route, Routes} from "react-router-dom"
import LoginPage from './Components/LoginPage';
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './Resources/Constants';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    // Listen for auth change
    const unsub = onAuthStateChanged(auth, user => {
      if(user){
        console.log("user logged in")
        console.log(user)
        //window.location.href = "http://localhost:3000" +"/Home"
        // Before I would set a state variable here and display components based on the state
        // but this app is using redux and router so I'll try it that way
      }
      else{
        console.log("user logged out")
      }
    })

    // Return the functions that should be unsubscribed
    return ()=>{unsub()}

  },[])


  return (
    <div className="App">
      <Routes>
        <Route 
          path='/' 
          element={
            <Homepage></Homepage>      
          }
        ></Route>
        <Route 
          path='/Login' 
          element={
            <LoginPage></LoginPage>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
