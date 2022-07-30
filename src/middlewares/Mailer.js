"use strict"
const nodemailer = require("nodemailer");
const config = require("../config/config")

class Mailer{
    constructor(){
        this.user = config.user;
        this.pass = config.pass;
        this.service = config.service;
        this.transporter = nodemailer.createTransport({
            service: this.service,
            auth: {
              user: this.user,
              pass: this.pass
            }
          });
    }

    async send(emails, rate){
        try{
            let info = await this.transporter.sendMail({
                from: this.user, 
                to: emails, 
                subject: "The BTS rate", 
                text: "exchange rate of bitcoin to hryvnia:" + rate, 
            });
        }catch(err){
            return err;
        }    
    }
}

module.exports = Mailer
