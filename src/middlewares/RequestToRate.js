"use strict"
const {fetch} = require('undici'); 

class RequestToRate {
    constructor(){

    }
    async request(){
        try{
            let url = 'https://api.coingecko.com/api/v3/exchange_rates'
            const result = await fetch(url)
            const json = await result.json()
            let priceInUah = json['rates']['uah']['value']
            return priceInUah
        }catch(err){
            return err
        }
    }
}

module.exports = RequestToRate