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
        img_url: "https://www.na-kd.com/globalassets/nakd_cut_out_detail_midi_skirt-1748-000012-4082_05.jpg?ref=55AC55242C"
    },
    {
        title: "Jeans",
        id: "1",
        img_url: "https://www.na-kd.com/resize/globalassets/nakd_shiny_high_cut_bikini_panty_1000-100823-0001_04.jpg?ref=B53DCBC292&quality=80&sharpen=0.3&width=714"
    },
]

app.get('/test', async(req,res)=>{
    console.log("Sending test data")
    setTimeout(()=>{res.send(items)}, 1500)
})
