import React, { useState } from "react"

const Search = ({getRepo}) => {

  const [ username, setUsername ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    getRepo(username);
  }

  const handleInput = (e) => {
    setUsername(e.target.value)
  }

  return (
    <>
    
      
        <form aria-label='form' onSubmit={handleSubmit}>
          <label htmlFor="username">Track your Repos</label>
          <input 
            aria-label='username' 
            placeholder='Type your GitHub username' 
            type="text" 
            value={ username }
            onChange={handleInput}
            required />
          <input type="submit"/>
        </form>
      
    
    </>  
  )
};

export default Search;
