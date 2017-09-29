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
router.post('*',(req,res)=>{
    var reqUrl = serverDomain + req.url;
    var reqContentType = req.headers['content-type'];
    var reqBody = req.body;
    // 根据 请求的 content-type 判断用哪种格式化方式
    var reqData = reqContentType.indexOf('json') !== -1 ? JSON.stringify(reqBody) : querystring.stringify(reqBody);
    var postOpt = {
        host: serverDomainHost,
        port: serverDomainPort,
        path: req.url,
        method: 'POST',
        headers: {
            'Content-Type': reqContentType
        }
    };
    var sreq = http.request(postOpt, (sres) => {
        var body = '';
        var error;
        if (sres.statusCode !== 200) {
            error = new Error(`Request Failed.\n` + `Status Code: ${sres.statusCode}`)
        }
        if (error) {
            console.log(error.message);
            sres.resume();
            res.status(500).end();
            return;
        }
        sres.on('data', (data) => {
            body += data;
        })
        .on('end', () => {
            try {
                var parsedData = JSON.parse(body);
                res.json(parsedData);
            } catch (e) {
                console.log(e.message);
                res.status(500).send(e.message);
            }
        })
        .on('error', () => {
            console.log('[ERROR] when req url:', reqUrl, reqData);
            res.status(500).send('error');
        })
    })
    sreq.write(reqData);
    sreq.end();
})

module.exports = router;