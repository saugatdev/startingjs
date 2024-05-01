
require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

const githubData={
    "login": "Saugatify",
    "id": 68614843,
    "node_id": "MDQ6VXNlcjY4NjE0ODQz",
    "avatar_url": "https://avatars.githubusercontent.com/u/68614843?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Saugatify",
    "html_url": "https://github.com/Saugatify",
    "followers_url": "https://api.github.com/users/Saugatify/followers",
    "following_url": "https://api.github.com/users/Saugatify/following{/other_user}",
    "gists_url": "https://api.github.com/users/Saugatify/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Saugatify/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Saugatify/subscriptions",
    "organizations_url": "https://api.github.com/users/Saugatify/orgs",
    "repos_url": "https://api.github.com/users/Saugatify/repos",
    "events_url": "https://api.github.com/users/Saugatify/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Saugatify/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Saugat Ghimire",
    "company": null,
    "blog": "saugatghimire.vercel.app",
    "location": "Kathmandu, Nepal",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 1,
    "following": 3,
    "created_at": "2020-07-21T19:48:58Z",
    "updated_at": "2024-04-27T16:12:36Z"
  }
  
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('Hello this is Twitter!')
})


app.get('/login', (req, res) => {
    res.send('<h1>Hello User Login to Come Here !</h1>')
  })

app.get('/signup', (req, res) => {
    res.send('<h1>Hello User singup to Come Here !</h1>')
  }) 

app.get('/github', (req, res) => {

    res.json(githubData);

})

  
app.listen(process.env.PORT, () => {

  console.log(`Example app listening on port ${port}`)
})