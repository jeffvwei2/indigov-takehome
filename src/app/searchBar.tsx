"use client"
import { useState, FormEvent } from "react";

interface SearchBarProps {
  handleSearch: (query: string) => void
}

export default function SearchBar({handleSearch}: SearchBarProps){
  const [searchTerm, setSearchTerm] = useState("")

  const handleReset = () => {
    setSearchTerm("")
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleSearch(searchTerm)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2 m-2 justify-center">
        <input 
          className="w-full max-w-md px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search"
        />
        <button type='submit' className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 ">Search</button>
        <button onClick={handleReset} className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">Reset</button>
      </form>
    </div>
  )
}