import React from 'react'
import { useState } from 'react'

const UsernameForm = () => {
    const [username, setUsername] = useState("");
    const handleSubmit = (evt) => {
        setUsername(evt.target.value)
    }
  return (
    <div>
        <label htmlFor="username"></label>
      <input 
      type="text" 
      placeholder='Username' 
      value={username} 
      id='username' 
      onChange={handleSubmit}/>
      <button>Submit</button>
    </div>
  )
}

export default UsernameForm
