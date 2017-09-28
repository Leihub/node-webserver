const express = require('express')
const http = require('http')
const querystring = require('querystring')
var Url = require('url')
const router = express.Router()

const severApi = {
    protocol: 'http://',
    host: 'baike.baidu.com',
    route:'/api/openapi/BaikeLemmaCardApi'
   //port: '80'
}
var serverDominProtocol = severApi.protocol
var serverDominHost = severApi.host
var serverDominRoute = severApi.route
//var serverDominPort = severApi.port
var serverDomin = serverDominProtocol + serverDominHost + serverDominRoute
console.log(serverDomin)
router.get('*', (req, res) => {
    var url = Url.parse(req.url).query
    var reqUrl = serverDomin + '?' + url
    console.log(reqUrl)
    http.get(reqUrl, (sres) => {
        var statuscode = sres.statusCode
        var contenttype = sres.headers['content-type'];

        let error
        if (statuscode !== 200) {
            error = new Error(`Request Failed.\n` + `Status Code: ${statusCode}`)
        } else if (!/^application\/json/.test(contenttype)) {
            error = new Error(`Invalid content-type.\n` + `Expected application/json but received ${contenttype}`)
        }
        if (error) {
            sres.resume()
            res.status(500).end();
            return
        }

        sres.setEncoding('utf8')
        // console.log()
        let sdata = ''
        sres.on('data', (chunk) => sdata += chunk)
        sres.on('end',()=>{
            try{
                let parsedData = JSON.parse(sdata)
                console.log(parsedData)
                res.json(parsedData)
            }catch(e){
                res.status(500).send(e.message);
            }
        })
    }).on('error',(e) => {
        console.log(`Got error: ${e.message}`);
        res.status(500).end();
    });  
})
module.exports = router;