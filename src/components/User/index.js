import React, { useEffect , useState } from "react"
import { Octokit, App } from "https://cdn.skypack.dev/octokit?dts";
import { Avatar, Container, ThemeProvider, Box, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles'
<<<<<<< HEAD
import {default as token} from '../.secret/token'
=======
import {default as token} from '../../secret/token'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
>>>>>>> 1d32d7584fb749812964e8fc059266cc5f0f5267

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
    const params = useParams()
    const [ username, setUsername ] = useState(params)
    // const user = useSelector (state => state.username)
    // console.log(user)
    
    console.log(params)
    

    useEffect(() => {
        const fetchUserInfo = async () => {

        console.log(`Use Effect is running`)
            
            const octokit = new Octokit({
                auth: token
              })

            try {
                console.log(`Retrieving from API`)
                // const userData = await axios.get(`https://api.github.com/users/matthewlohl/repos`)
                // const userData = await axios.get(`https://api.github.com/users/mtsolt`
                const userData = await octokit.request('GET /users/{owner}', {
                    owner: params.user
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
    <div>
      {params.user}
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
                    {/* <Typography >{userData.login}</Typography> */}
                    <Typography >{params.user}</Typography>
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
    </div>
  )
};

export default User;
