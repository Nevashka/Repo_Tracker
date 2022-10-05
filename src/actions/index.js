import { Octokit, App } from "https://cdn.skypack.dev/octokit?dts";
import {default as token} from '../components/.secret/token'

const loadResult = ({ results: {login, avatar_url, followers, following}}, username ) => ({
    type: 'LOAD_REPO',
    payload: {login, },
    username: username
})
const loadUser = ({ results: { login, avatar_url, followers, following }}, username ) => ({
    type: 'LOAD_USER',
    payload: { login, avatar_url, followers, following},
    username: username
})


const getRepo = username => {
    return async dispatch => {
        try {
            console.log('running getRepo')
            
            const data = await fetchUser(username)
            dispatch (loadUser(data.data))
            console.log(data)
            console.log(`Yeah, successfully fetch user`)
            
            const repoData = await fetchRepo(username);
            console.log(repoData)
            
            // dispatch (loadResult(data))

        } catch (error) {
            console.warn(error)
        }
    }
}

const fetchUser = async(username) => {
    const octokit = new Octokit({
        auth: token
      })
    try {
        console.log('Running Fetch User')
        
        const  data  = await octokit.request('GET /users/{owner}', {
            owner: username
          })

        return data
        console.log(data)
        
    } catch (error) {
        throw new Error(error.message)
    }
}

const fetchRepo = async(username) => {
    const octokit = new Octokit({
        auth: token
      })
    try {
        console.log('Running Fetch Repo')
        
        const repoData = await octokit.request('GET /users/{owner}/repos', {
            owner: username
          })
        return repoData
        console.log(repoData)
        
    } catch (error) {
        throw new Error(error.message)
    }
}

export default getRepo;
