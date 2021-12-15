const PORT = 8000
const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')

const app = express()

// Listing On Homepage & Response
app.get('/', (req,res) =>{
  res.json('Welcome to the Web3 News API')
})

//This Grabs the URL of a Website
app.get('/news', (req,res) => {
  axios.get()
})

//PORT Listener and Console Log out the port
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))