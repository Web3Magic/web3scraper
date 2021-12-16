const PORT = 8000
const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')

const app = express()

// Listining On Homepage & Response
app.get('/', (req,res) =>{
  res.json('Welcome to the Web3 News API')
})

//Get endpoint localhost 8000/news
app.get('/news', (req,res) => {
  axios.get('https://www.coindesk.com/')
  //Gets the Url endpoint of a website and outputs html response
    .then((response) => {
      const html = response.data
  //Initilized Cheerio 
      const $ = cheerio.load(html)
  // Looking for any a tag that has nft keyword
      $('a:contains("nft")')
  })
})

//PORT Listener and Console Log out the port
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))