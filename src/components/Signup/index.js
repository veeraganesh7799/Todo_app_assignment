import React,{useState,useEffect} from 'react'
import Login from '../Login'
import './index.css'

const Signup = () => {
    const getUserDetails = JSON.parse(localStorage.getItem('details'))
    const [email,setEmail] = useState('')
    const [dateOfBirth,setDateOfBirth] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [address,setAddress] = useState('')
    const [loginPage, setLoginPage] = useState(false)
    const [userDetails, setUserDetails] = useState(getUserDetails !== null ? getUserDetails : [])
    

    const onSubmitHandler = event => {
        event.preventDefault()
        const details = {
            email,
            dateOfBirth,
            phoneNumber,
            address
        }
        if (email.length !== 0 && dateOfBirth.length !== 0 && phoneNumber.length !== 0 && address.length !==0) setUserDetails([...userDetails,details])
        setEmail('')
        setAddress('')
        setDateOfBirth('')
        setPhoneNumber('')
    }

    useEffect(()=>{
        localStorage.setItem('details',JSON.stringify(userDetails))
    },[userDetails])

  return (
    <div>
    {loginPage ? <Login/> :
      <div className='signup-container'> 
      <h1 className='signu-up-heading'>Signup</h1>
      <form className='form-container' onSubmit={onSubmitHandler}>
        <label htmlFor='email' className='label'>Email</label>
        <input type='email' id='email' placeholder='Enter Email' className='input-box' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor='dateOfBirth' placeholder='Enter Date of Birth' className='label'>Date of Birth</label>
        <input type='date' id='dateOfBirth' className='input-box' value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)}/>
        <label htmlFor='phoneNumber' className='label'>Phone number</label>
        <input type='text' id='phoneNumber' placeholder='Enter Phone number' className='input-box' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
        <label htmlFor='address' className='label' placeholder='Enter Address'>Address</label>
        <textarea rows='2' id='address'  className='input-box-text-area' value={address} onChange={(e)=>setAddress(e.target.value)}/>
        <button type='submit' className='submit-btn'>Submit</button>
        <button type='button' className='back-to-login-page' onClick={()=>setLoginPage(true)}>Back to Login</button>
      </form>
      </div> } 
    </div> 
  )
}

export default Signup
