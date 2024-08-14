import React from 'react'

function SearchBar({ setSearchTerm }) {
    const handleChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    }

    return (
        <input
            type="text"
            placeholder="Search for an emoji..."
            onChange={handleChange}
        />
    )
}

export default SearchBar
