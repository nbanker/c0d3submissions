const express = require('express')
const app = express()
const Jimp = require('jimp')

app.use(express.json())

const storedBuffer = {}

app.post('/meme/api', (req, res)=>{
  const { message, category, blurLev, textCol, url } = req.body
  console.log( message, category, blurLev, textCol, url )
  
  let storeNewImage = false

  const baseURL = 'https://placeimg.com/640/480'
  const totalURL = new URL(`${baseURL}/${category}`)

  const checkBuffer = (reqUrl)=>{

    if(Object.keys(storedBuffer).includes(reqUrl)){
      console.log(storedBuffer[reqUrl])
      return storedBuffer[reqUrl]
    }

    console.log('not in storedBuffer')
    storeNewImage = true
    return reqUrl
  }

  const checkMaxBufferSize = ()=>{
    if(Object.keys(storedBuffer).length >= 10){
      Object.entries(storedBuffer).shift()}
  }

  const applyOptions = async (img)=>{
    let font
    if(textCol === 'BLACK'){
      font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
    } else {
      font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE)
    }
      if(parseInt(blurLev) > 0) img.blur(parseInt(blurLev))
      img.print(font, 50, 50, message)
      return img
  } 

  const getImg = async (reqUrl)=>{ 
    const imgObj = await Jimp.read(checkBuffer(reqUrl))
    
    if(storeNewImage === true){
      console.log('storing new img')
      console.log(storedBuffer)
      checkMaxBufferSize()
      storedBuffer[reqUrl] = imgObj
      console.log(storedBuffer)
      storeNewImage = false
    }

    await applyOptions(imgObj)
    const imgBase64 = imgObj.getBase64Async(Jimp.AUTO)
  
    return imgBase64
  }

  const gotImg = async ()=>{
    res.setHeader('content-type', 'image/jpeg')

    if(!url){
      console.log('no url')
      const result = await getImg(`${totalURL}`)
      res.json({ image: result }) 
      return 

    } else {
      console.log(url)
      const result = await getImg(url)
      res.json({ image: result })
      return
    }
  }
  gotImg()

})

app.get('/', (req, res)=>{
  
  res.send(`
  <h1> Meme Creator </h1>
    <p>create a meme from a random image with the text and settings of your choice!</p>

  <form>
    <label for='userMessage'>Enter your message here!:</label>
    <input class='userMessage' type='text'></input>
    <br>
    
    <label for='inputUrl'> Input your own url image </label>
    <input type='inputUrl' class='inputUrl' placeholder='https://example.com/cat.jpeg' pattern='https://*'></input>
    <br>

    <h4> Or choose a random image from placeimg provider </h4>

    <label for='imgCategory'>Image Category:</label>
    <select class='imgCategory'>
      <option value="any"> Any </option>
      <option value="animals"> Animals </option>
      <option value="arch"> Architecture </option>
      <option value="nature"> Nature </option>
      <option value="people"> People </option>
      <option value="tech"> Tech </option>
    </select>
    <br>

    <label for='blurLevel'>Enter a number for blur level between 0-9</label>
    <input class='blurLevel' type='number' min='0' max='9' value='0'></input>
    <br>

    <label for='textColour'>Select the colour for your text</label>
    <select class='textColour'>
      <option value="BLACK"> Black </option>
      <option value="WHITE"> White </option>
    </select>
    <br>

    <button class='generateBtn'>Generate Meme!</button>
  </form>
  <hr/>
  <img class='imgContainer' src=''></img>

  <script>
    const imgContainer = document.querySelector('.imgContainer')
    const generateBtn = document.querySelector('.generateBtn')
    const userMessage = document.querySelector('.userMessage')
    const blurLevel = document.querySelector('.blurLevel')
    const textColour = document.querySelector('.textColour')
    const imgCategory = document.querySelector('.imgCategory')
    const inputUrl = document.querySelector('.inputUrl')

    const makeImg = async (data)=>{
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      await fetch('/meme/api', options)
        .then(r => r.json())
        .then(res => {
          console.log(res.image)
          imgContainer.src = res.image 
          })
    }

    generateBtn.addEventListener('click', (e)=>{
      
      // comment out -- remove this when finished
      // if(userMessage.value === ''){
        // return alert('please provide a message')
      // }

      e.preventDefault()
      
      const userData = {
        url : inputUrl.value,
        message: userMessage.value,
        category: imgCategory.value,
        blurLev: blurLevel.value,
        textCol: textColour.value
        }
      makeImg(userData)
      console.log(userMessage.value, imgCategory.value, blurLevel.value, textColour.value, userData.url)
    }) 

  </script>
  `)
})


app.listen('3000', ()=>{
  console.log('listening on port 3000')
})
