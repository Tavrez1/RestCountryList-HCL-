import React from 'react'
import { useState } from 'react';

const SearchBar = ({onSearch}) => {
    const [name, setName] = useState(null);
    const [continent, setContinent] = useState(null);

    const handleSearch = () => {
        onSearch({ name, continent });
    };


    return (
        <div className="mt-5 m-auto flex flex-col mb-3 text-center">
            <input
                className="form-control mb-2 p-3 bg-gray-600 rounded w-70"
                placeholder="Search by Country Name"
                onChange={e => setName(e.target.value)}
            />
            <input
                className="form-control mb-2 p-3 bg-gray-600 rounded w-70"
                placeholder="Search by Continent (Asia, Europe...)"
                onChange={e => setContinent(e.target.value)}
            />
            <button className="hover:cursor-pointer active:bg-amber-400 bg-green-500 font-bold text-[18px] text-black rounded border-2 p-3 " onClick={handleSearch}>
                Search
            </button>
        </div>
    )
}

export default SearchBar
