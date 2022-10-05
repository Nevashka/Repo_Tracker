import React, { useEffect , useState } from "react"
import { Octokit, App } from "https://cdn.skypack.dev/octokit?dts";
import { Avatar, Container, ThemeProvider, Box, Typography, Grid, Item } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import {default as token} from '../../secret/token'
import { useParams } from "react-router-dom";


const PrimaryMainTheme = createTheme({
    palette: {
      primary: {
        main: "#F3F3F3"
      },
      secondary: {
        main: '#eee'
      }
    }
  });
  
  export { PrimaryMainTheme };

const User = () => {
    const [userData, setUserData] = useState([])
    const params = useParams()
    const [ username, setUsername ] = useState(params.user)
    const [ repo, setRepo ] = useState([])
    // const user = useSelector (state => state.username)
    // console.log(user)
    
    console.log(params)
    console.log(username)
    

    useEffect(() => {
        const fetchUserInfo = async () => {

        console.log(`Use Effect is running`)
            
            const octokit = new Octokit({
                auth: token
              })

            try {
                console.log(`Retrieving from API`)
                const userData = await octokit.request('GET /users/{owner}', {
                    owner: username
                  })
                const data = userData.data
                setUserData(data)

                const repoData = await octokit.request('GET /users/{owner}/repos', {
                  owner: username
                })
                const repo = repoData.data
                setRepo(repo)
                console.log(repo)
            } catch (error) {
                console.log(error)
                
            }
        }
        fetchUserInfo();
    }, [])

    const renderRepos = repo.map((repo, index) => {
      return(
          <>
            <Box
              sx={{
              color: 'white',
              bgcolor: 'text.primary',
              borderRadius: '20px',
              mt: 2,
              p: 3
            }}
              
              key={index}
            >
              <Box sx={{display: 'flex', justifyContent: 'space-evenly', pt: 3, pb: 3}}>
                <Typography >{repo.name}</Typography>
                <Typography >{repo.visibility}</Typography>
              </Box>
              <Grid container sx={{pb: 2}}>
                <Grid item xs={5} sx={{pl: 2, mt: 2}}>
                  <Grid item>Description: {repo.description}</Grid>
                  <Grid item sx={{pt: 1}}>Forks: {repo.forks_count}</Grid>
                </Grid>
                <Grid item xs={5} sx={{pl: 2, mt: 2}}>
                  <Grid item>Language: {repo.language}</Grid>
                  <Grid item  sx={{pt: 1}}>Last update: {repo.updated_at}</Grid>
                </Grid>
              </Grid>

            </Box>
          </>

      )
    })


  return (
    <div>
    <Container sx={{display: 'flex' , justifyContent: 'space-between'}}>
        <ThemeProvider theme={PrimaryMainTheme}>
        <Container maxWidth='xs' sx={{m: 8}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                border: '1px solid lightgrey',
                borderRadius: '5px',
                p: 6,
                }}>
                
                <Avatar 
                    src={userData.avatar_url}
                    alt="GitHub avatar"
                    sx={{ width: 60, height: 60, mb: 1}}
                    />
                <Box >
                    {/* <Typography >{userData.login}</Typography> */}
                    <Typography >{username}</Typography>
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
    <ThemeProvider theme={PrimaryMainTheme}>
      <Container sx={{bgcolor: 'text.disabled', pt: 3}}>
        {renderRepos}
      </Container>
    </ThemeProvider>
    
    </div>
  )
};

export default User;
