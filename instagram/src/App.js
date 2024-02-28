import {useState} from 'react';
import './App.css';
import logo from './image/instagram.png'

function App() {
  const [signup,setSignup] = useState(true);

  const isSignUp=()=>{
        setSignup(!signup)
  }
  function click(event){
    event.preventDefault()
  }
  return (
  
      <form className='form'>
        <div className='inputs'>
          <img src={logo} alt='instagram img'/>
          <input hidden={signup} type='text' placeholder='Mobile Number or Email'/>
          <input hidden={signup} type='text' placeholder='Full name'/>
          <input type='email' placeholder='Phone no., User name or Password'/>
          <input type='text' placeholder='Password'/>
          <button onClick={click}>{signup ? "signin": "signup"}</button>
          </div>
          <div className='footer'>{signup?"don't have account?":"have an account?"} <span onClick={isSignUp}>{signup?'sign up':"sign in"}</span>
          </div>
      </form> 
   
  );
}

export default App;
