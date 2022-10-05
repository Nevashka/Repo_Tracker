import React, { useEffect , useState } from "react"
import { Octokit, App } from "https://cdn.skypack.dev/octokit?dts";
import { Avatar, Container, ThemeProvider, Box, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import {default as key} from '../../.secret/token'

const PrimaryMainTheme = createTheme({
    palette: {
      primary: {
        main: "#F3F3F3"
      }
    }
  });
  
  export { PrimaryMainTheme };

const User = () => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const fetchUserInfo = async () => {

        console.log(`Use Effect is running`)
            
            const octokit = new Octokit({
                auth: key
              })

            try {
                console.log(`Retrieving from API`)
                // const userData = await axios.get(`https://api.github.com/users/matthewlohl/repos`)
                // const userData = await axios.get(`https://api.github.com/users/mtsolt`
                const userData = await octokit.request('GET /users/{owner}', {
                    owner: 'mtsolt'
                  })
                // const data = userData.data[0].owner
                const data = userData.data
                setUserData(data)
                console.log(data)
            } catch (error) {
                console.log(error)
                
            }
        }
        fetchUserInfo();
    }, [])

    


  return (
    <Container sx={{display: 'flex' , justifyContent: 'space-between'}}>
        <ThemeProvider theme={PrimaryMainTheme}>
        <Container maxWidth='xs' sx={{m: 8}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                // backgroundColor: 'primary.main',
                border: '1px solid lightgrey',
                // boxShadow: 3,
                p: 6,
                }}>
                
                <Avatar 
                    src={userData.avatar_url}
                    alt="GitHub avatar"
                    sx={{ width: 60, height: 60, mb: 1}}
                    />
                <Box >
                    <Typography >{userData.login}</Typography>
                    <Typography sx={{pt: 1}}>Followers: {userData.followers}</Typography>
                    <Typography sx={{pt: 1}}>Following: {userData.following}</Typography>
                    {/* <Typography >matthewlohl</Typography>
                    <Typography sx={{pt: 1}}>Followers: 12</Typography>
                    <Typography sx={{pt: 1}}>Following: 20</Typography> */}
                </Box>
            </Box>
        </Container>
        </ThemeProvider>
       
        <img src="https://streak-stats.demolab.com?user=matthewlohl"/>

    </Container>
  )
};

export default User;
