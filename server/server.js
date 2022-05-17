const express = require('express')
const session = require('express-session')
const cors = require('cors')
const app = express()
const PORT = 80
const body_parser = require('body-parser')
const json_parser = body_parser.json()

app.listen(PORT, ()=>{console.log(`E-Commerce Server running on port ${PORT}`)})
app.use(cors())



const items = [
    {
        title: "Jacket",
        id: "0",
        img_url: "https://www.na-kd.com/globalassets/nakd_cut_out_detail_midi_skirt-1748-000012-4082_05.jpg?ref=55AC55242C"
    },
    {
        title: "Jeans",
        id: "1",
        img_url: "https://www.na-kd.com/resize/globalassets/nakd_shiny_high_cut_bikini_panty_1000-100823-0001_04.jpg?ref=B53DCBC292&quality=80&sharpen=0.3&width=714"
    },
    {
        title: "Name",
        id: '3',
        img_url: "https://media.nastygal.com/i/nastygal/agg14959_gold_xl?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto"
    },
    {
        title: "Name",
        id: '4',
        img_url: "https://media.nastygal.com/i/nastygal/bgg04886_multi_xl?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto"
    },
    {
        title: 'Name',
        id: '5',
        img_url: 'https://media.nastygal.com/i/nastygal/agg17099_black_xl?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto'
    }
]

let registeredUsers = []

app.get('/test', async(req,res)=>{
    console.log("Sending test data")
    setTimeout(()=>{res.send(items)}, 1500)
})


app.post('/registerUser',json_parser, async(req, res)=>{
    console.log("Received registration request")
    registeredUsers.push(req.body)
    console.log(registeredUsers)
})