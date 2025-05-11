"use client"
import { useState, FormEvent } from "react";
import { Constituent } from "./types";

interface AddConstituentProps {
  handleAddConstituent: (query: Partial<Constituent>) => void
}


export default function AddConstituent({handleAddConstituent}: AddConstituentProps){
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [invalidEmail, setInvalidEmail] = useState('');

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement; 
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit =  (e: FormEvent) => {
    e.preventDefault()
    const emailPattern = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setInvalidEmail('Please enter a valid email address');
    } else {
      setInvalidEmail('');
      handleAddConstituent(formData)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
      })
    }
  }
  
  return (
    <form onSubmit={handleSubmit}  className="flex flex-col items-center space-x-2 justify-center mb-4">
      <h2 className="text-base/7 font-semibold text-gray-900">Add Constituent</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="sm:col-span-4">
          <label className="block text-sm/6 font-medium text-gray-900">First name</label>
          <div className="mt-2">
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full max-w-md px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label  className="block text-sm/6 font-medium text-gray-900">Last name</label>
          <div className="mt-2">
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full max-w-md px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label className="block text-sm/6 font-medium text-gray-900">Email address</label>
          <div className="mt-2">
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              className="w-full max-w-xs px-4 py-2 text-sm border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
            {invalidEmail && <p className="mt-1 text-sm text-red-600">{invalidEmail}</p>}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <div className="md:col-span-10 items-center justify-center">
          <button type="submit" onClick={handleSubmit} className="w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
