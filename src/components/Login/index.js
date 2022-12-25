import React,{useState,useEffect} from 'react'
import Board from '../Board'
import Signup from '../Signup'
import './index.css'

const Login = () => {
    const getUserDetails = JSON.parse(localStorage.getItem('details'))
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [address,setAddress] = useState('')
    const [error,setError] = useState(false)
    const [loginSuccessful,setLoginSuccessfull] = useState(false)
    const [signuppage,setSignupPage] = useState(false)
    
    const onSubmitLogin = event => {
        event.preventDefault()
        const filtered = getUserDetails.find(each=>each.email === email && each.phoneNumber === phoneNumber)
        if (filtered){
            setLoginSuccessfull(true)
            setError(false)
        }else{
            setError(true)
        }

    }
    console.log(error)
   
  return (
    <div>
        { signuppage ? <Signup/> : <>
        {loginSuccessful ? <Board/>:
      <div className='login-container'> 
      <h1 className='login-heading'>Login</h1>
      <form className='form-container' onSubmit={onSubmitLogin}>
        <label htmlFor='email' className='label'>Email</label>
        <input type='email' placeholder='Enter your email' id='email' className='input-box' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label htmlFor='phoneNumber' className='label'>Phone number</label>
        <input type='text' placeholder='Enter your phone number' id='phoneNumber' className='input-box' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
        <button type='submit' className='submit-btn'>Login</button>
        {error ? <p className='error'>Please Enter Valid Input</p>: ''}
        <button type='button' className='signup-btn' onClick={()=>setSignupPage(true)}>Signup/create account</button>
      </form>
      </div> }</>}
    </div>
  )
}

export default Login
