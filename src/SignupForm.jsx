import React from 'react'
import { useState } from 'react'
const SignupForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const updateFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const updateLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleSubmit = () => {
        console.log(firstName, lastName)
    }

  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input 
        type="text"
        placeholder='First Name'
        value={firstName}
        id='firstName' 
        onChange={updateFirstName}/>

        <label htmlFor="lastName">Last Name</label>
      <input 
        type="text"
        placeholder='Last Name'
        value={lastName}
        id='lastName' 
        onChange={updateLastName}/>

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SignupForm
