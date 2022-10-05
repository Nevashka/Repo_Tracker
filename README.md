# LAP 3 Code Challenge - Repo Tracker app
App allows you to get data from your GitHub and display an overview of your work.

## Requirements
The app should make use of React.
The repo tracker should have an input for users to give their GitHub username.
After submitting their username, use the [GitHub API](https://developer.github.com/v3/repos/#list-repositories-for-a-user) to retrieve that user's list of repos.
When selecting a repo, a User should be shown some data about that repo eg. issue count, stargazers, forks etc.

## Usage

- `git clone` the repo
- `cd` into folder 
- Run `npm install` to install required node modules

- Create a **Token** accessing this [link](https://github.com/settings/tokens) or go to your `Account Settings` -> `Developer settings` -> `Personal access tokens` -> `Generate new token`
Check the read repo and read user options.
- Create a file named `token.js` inside the .secret folder
- Add the following:

```js
const token = 'YOUR TOKEN COMES HERE'

export default token
```

After creating token:

- Run `npm start` to start the app

The page will open automatically in your browser

For use in production mode:

- run `npm build`

## Challenges

- Implement tolken to unlimit number of requests
- Implement Redux


## Wins

- Achieve what was planned


