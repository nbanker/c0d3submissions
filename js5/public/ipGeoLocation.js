const express = require('express')
const app = express()
const expressip = require('express-ip')

app.use(expressip().getIpInfoMiddleware)

app.use(express.json())


app.get('/', (req, res)=>{
  res.send(req.ipInfo)
})

app.get('/visitors', (req, res)=>{
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress  
  console.log(ip)
  res.send('ok')
}
)

app.listen('3000', ()=>{
  console.log('being served on port 3000')
})
