var axios = require('axios')

const Utils = {
    get:()=>{
        axios.defaults.baseURL = '/api'
        axios.get('/list').then(()=>console.log('success')).catch(()=>console.log('err'))
    }

}
module.exports = Utils