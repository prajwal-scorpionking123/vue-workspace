var express = require("express")
const app= express()

const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))


app.get("/",(req,res)=>{
    res.sendFile("index.html");
})

app.listen(3000,()=>{
  console.log("serving on port:3000")
})