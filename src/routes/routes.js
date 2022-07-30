"use strict"
const Controller = require('../controller/controller');
let controll = new Controller();


module.exports = function(app){
  
    app.get('/api/rate', async (req, res) => {
        try {
        let priceBTCInUah = await controll.getRate();
        res.statusCode = 200;
        res.send(priceBTCInUah.toString())
        }
        catch(err){
        res.statusCode = 400; 
        res.json(err);
        }
    
    })
  
    app.post('/api/subscribe', async (req, res) => {
        
      let email = req.body.email
      try {
        await controll.subscribe(email);
        res.statusCode = 200;
        res.send()
      }
      catch(err){
        res.statusCode = 409;
        res.message = err.message
        let erorr = err.message
        res.send(erorr);
      }
    })
  
    app.post('/api/sendEmails', async (req, res) => {
        try {
        let response = await controll.sendMails();
        res.statusCode = 200;
        res.send()
        }
        catch(err){
        res.send(err);
        }
    })  
}