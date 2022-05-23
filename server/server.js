const express = require('express')
const session = require('express-session')
const cors = require('cors')
const app = express()
const PORT = 80
const body_parser = require('body-parser')
const json_parser = body_parser.json()

app.listen(PORT, ()=>{console.log(`E-Commerce Server running on port ${PORT}`)})
app.use(cors())



const items1 = [
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
]

const items2 = [
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

const item_details_popular = [
    {id: 0, title: 'Jacket', sizes: [3,12,15], price: '$100', primary_img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg'},
    {id: 1, title:'Jeans', price: '$90', primary_img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg'},
    {id: 1, title:'Jeans', price: '$90', primary_img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg'},
    {id: 1, title:'Jeans', price: '$90', primary_img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg'},
    {id: 1, title:'Jeans', price: '$90', primary_img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg'}
]

let registeredUsers = []

app.get('/popular', async(req,res)=>{
    console.log("Sending popular data")
    setTimeout(()=>{res.send(item_details_popular)}, 1500)
})
app.get('/new', async(req,res)=>{
    console.log("Sending new data")
    setTimeout(()=>{res.send(items2)}, 1500)
})


app.post('/registerUser',json_parser, async(req, res)=>{
    console.log("Received registration request")
    registeredUsers.push(req.body)
    console.log(registeredUsers)
})

//Item details test
app.get('/item/details/:id', async(req, res)=>{
    console.log(`Received request for item ${req.params.id} details`)
    setTimeout(()=>{res.send(item_details_popular[req.params.id])}, 10)
})

app.get('/featured', (req, res)=>{
    res.send(item_details_popular)
})