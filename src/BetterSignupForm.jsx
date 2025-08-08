import React from 'react'
import { useState } from 'react'

const BetterSignupForm = () => {
    const [formData, setFormData] =
        useState(
            {
                firstName: "",
                lastName: "",
                password: ""
            }
        );

    const handleChange = (e) => {
        const changedField = e.target.name;
        const newValue = e.target.value;
        setFormData((currData) => {
            currData[changedField] = newValue;
            return { ...currData };
        })
    }

    const handleSubmit = () => {
        console.log(formData)
    }

    return (
        <div>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange}
                name='firstName'
                id='firstName' />

            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange}
                name='lastName'
                id='lastName' />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                name='password'
                id='password' />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default BetterSignupForm
