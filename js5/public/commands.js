const express = require('express')
const app = express()
const { execFile } = require('child_process')

app.use(express.json())

const allowedCmds = ['ls', 'cat', 'pwd']


app.post('/commands', (req, res)=>{
  const { userInput } = req.body
  const inputArr = userInput.split(' ')
  const inputCmd = inputArr[0]
  let inputArg = []
  
  if(inputArr.length > 1){
    inputArg = inputArr.slice(1)
  }
  
  console.log(inputCmd, inputArg)

  if(!(allowedCmds.includes(inputCmd))) {
    console.log('not allowed')
    return res.status(400).json('not allowed')
  }

  const pwdCmd = execFile(inputCmd, inputArg, (err, stdout, stderr)=>{
    if(err){
      throw err
    }
    console.log(stdout)
    if(stdout){
      res.status(200).json(stdout)
    }
    console.log(stderr)
    if(stderr){
      res.status(400).json(stderr)
    }
  })

})

app.get('/', (req, res)=>{
  
  res.send(`
    <style>
      h2{
          cursor: pointer;
        }
    </style>
    <h1> Commands </h1>
    <p> These are the commands allowed: </p>
    <div class='commandContainer'>
    </div>
    <input type='text' class='userInput'> </input>
    <hr/>
    <div class='display'><display>

    <script>
      const commandContainer = document.querySelector('.commandContainer')
      const userInput = document.querySelector('.userInput')
      const display = document.querySelector('.display')
     
      commandContainer.innerHTML = '<h2 class="screenCmd">ls</h2><h2 class="screenCmd">cat</h2><h2 class="screenCmd">pwd</h2>'

      const render = (result)=>{
        display.innerText = result 
      }

      const sendCmd = (cmdData)=>{
        fetch('/commands', {
         method: 'POST',
         headers: {
          'content-type': 'application/json'
         },
         body: JSON.stringify({
          userInput: cmdData
          })
        })
          .then( async r => {
            try{
                const data = await r.json()
                render(data)
              } catch(error){
                  console.log(error)
                  render('please use allowed commands: ' + error)
                }
          })
      }

      const screenCmd = document.querySelectorAll('.screenCmd')
      screenCmd.forEach((e)=>{
        e.onclick = ()=>{
          const scnCmd = e.innerText
          sendCmd(scnCmd) 
          }
        })

      userInput.focus()

      userInput.addEventListener('keyup', (e)=>{
        if(e.key === 'Enter'){
          const userCmd = userInput.value
          
          sendCmd(userCmd) 
          userInput.value = ''
        }
      })
    </script>
    `)}
)

app.listen('3000', ()=>{
  console.log('listening on port 3000')}
)
