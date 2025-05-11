"use client";

import { useEffect, useState } from "react";
import { Constituent } from "./types";
import SearchBar from "./searchBar";
import ConstituentTable from "./constituentTable";
import AddConstituent from "./addConstituent";

export default function Home() {
  const [constituents, setConstituents] = useState([]);
  const [filteredConstituents, setFilteredConstituents] = useState([]);

  useEffect(() => {
    handleInitialFetch()
  }, []);

  const handleInitialFetch = async () => {
    try {
      const response = await fetch("/api/constituents")
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      const { data } = await response.json()

      setConstituents(data)
      setFilteredConstituents(data)
    } catch (err) {
      console.log('handleInitialFetch',err)
    }
  }

  const handleSearch =  async (searchTerm: string) => {
    if(!searchTerm) {
      setFilteredConstituents(constituents)
      return
    }
    
    console.log("filtering constituents...", searchTerm);
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchTerm })
      })
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      const { data } = await response.json()
      
      setFilteredConstituents(data);
    } catch (err) {
      console.log('handleSearch',err)
    }
  };

  const handleAddConstituent = async (formData: Partial<Constituent>) => {
    console.log('add constituent', formData)
    try {
      const response = await fetch("/api/constituents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      const { data: newData } = await response.json()

      setFilteredConstituents((data) => data.concat(newData))
    } catch (err) {
      console.log('handleAddConstituent',err)
    }
  }

  const handleCsvDownload = () => {
    window.open('/api/files', '_blank');
  }

  return (
    <main className="m-2">
      <h1 className="m-4 text-4xl text-gray-900 md:text-5xl lg:text-6xl text-center">Constituent List</h1>
      <AddConstituent handleAddConstituent={handleAddConstituent}/>
      <SearchBar handleSearch={handleSearch} />
      <div className="w-full flex justify-center">
        <div className="md:col-span-10 items-center justify-center my-4">
          <button type="submit" onClick={handleCsvDownload} className="w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Download CSV
          </button>
        </div>
      </div>
      <ConstituentTable constituents={filteredConstituents} />
    </main>
  );
}
