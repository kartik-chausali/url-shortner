const express = require('express')
const app = express();
const rateLimit = require('express-rate-limit')
const urlRoute = require('./routes/urlRoute')
const url = require('./models/url');
require('dotenv').config()

const limit = rateLimit({
    windowMs:1 * 60 * 1000,
    max:100,
    message:"Too many requests , please try again after 60 seconds",
    standardHeaders:true,
    legacyHeaders:false
})

app.use(limit)
app.use(express.json())

const {connectDB} = require('./dbconnect')


connectDB(process.env.DB_URL).then(()=> console.log("connected to db"));
app.use('/url', urlRoute)

app.get('/:shortId', async(req, res)=>{
    const shortId = req.params.shortId;
    const result = await url.findOneAndUpdate({
        shortId
    }, { $push : {
        clicks : {
            timestamp: Date.now()
        }
    } });

    res.redirect(result.originalUrl)
})


app.listen(process.env.PORT, ()=> console.log("server connected"));