const shortid = require("shortid");
const url = require("../models/url");

function isValidUrl(url){
    try{
        new URL(url);
        return true;
    }catch(error){
        return false;
    }
}

 async function shortUrl(req, res){
    const body = req.body;

    if(!body.url) return res.status(400).json({error:'original url is missing'});

    if(isValidUrl(body.url)==false)return res.status(401).json({error:'invalid url'});

    const shortId = shortid();
    await url.create({
        shortId: shortId,
        originalUrl: body.url,
        clicks:[]
    })

    return res.json({ id : shortId});
 }

 async function getClicks(req, res){

    const shortId = req.params.shortId;
    const result = await url.findOne({shortId});
    if(result.clicks.length != 0){
        return res.json({
            totalClicks: result.clicks.length,
            lastAccessed: result.clicks[result.clicks.length-1].timestamp
        })
    }else return res.json({
        totalClicks: result.clicks.length,
        lastAccessed: 0
    })
    
 }

 module.exports = {
    shortUrl,
    getClicks
 }