const express = require('express')
const session = require('express-session')
const cors = require('cors')
const app = express()
const PORT = 80

app.listen(PORT, ()=>{console.log(`E-Commerce Server running on port ${PORT}`)})
app.use(cors())

const items = [
    {
        title: "Jacket",
        id: "0",
        img_url: ""
    },
    {
        title: "Jeans",
        id: "1",
        img_url: ""
    },
    {
        title: "Jeans",
        id: "1",
        img_url: ""
    },
    {
        title: "Jeans",
        id: "1",
        img_url: ""
    },
    {
        title: "Jeans",
        id: "1",
        img_url: ""
    }
]

app.get('/test', async(req,res)=>{
    console.log("Sending test data")
    setTimeout(()=>{res.send(items)}, 1500)
})
