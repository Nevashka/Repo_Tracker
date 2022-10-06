import React, { useState } from "react"
import getRepo from '../../actions/index'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { Card, Avatar, Container, ThemeProvider, Box, Typography, flexbox } from '@mui/material'
import { sizing, shadows } from '@mui/system';
import { createTheme } from '@mui/material/styles'

const Search = () => {

  const [ username, setUsername ] = useState('')

  // const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(getRepo(username));
    console.log(username)
    console.log(setUsername)
    
  }

  const handleInput = (e) => {
    setUsername(e.target.value)
  }

  return (
    <>
    <Container maxWidth="sm">
      <Card variant="outlined" sx={{m: 8, p:5, boxShadow: 2} }>
        <form aria-label='form' onSubmit={handleSubmit}>
        <Box sx={{display: "flex", flexDirection: 'column', justifyContent: 'space-between', alignItems: 'space-between'}}>
          <label htmlFor="username">Track your Repo:</label>
          <input 
            aria-label='username' 
            placeholder='Type your GitHub username' 
            type="text" 
            value={ username }
            onChange={handleInput}
            required />
         
          <Link to={username}><input type="submit" id='submit' /></Link>
        </Box>
        </form>
       
      </Card>
    </Container>
    </>  
  )
};

export default Search;
