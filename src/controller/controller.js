const Subscriber = require("../middlewares/Subscriber");
const RequestToRate = require("../middlewares/RequestToRate");
const Mailer = require("../middlewares/Mailer");

class Controller {
    constructor(){
        this.subscriber = new Subscriber();
        this.rate = new RequestToRate();
        this.mailSender = new Mailer();
    }

    async subscribe(email){
        let emailsString = await this.getSubscribers();
        let emails = emailsString.split(' ');
        if(emails.includes(email)){
            throw new Error("the user with this mail is already subscribed")
        }
        let response = await this.subscriber.write(email);
        return response;
    }

    async getSubscribers(){
        let subscribers = await this.subscriber.read();
        return subscribers;
    }

    async getRate(){
        let rate = await this.rate.request();
        return rate;
    }

    async sendMails(){
        try{
        let rate = await this.getRate();
        let emails = await this.getSubscribers();
        await this.mailSender.send(emails, rate);
        return 'Done';
        }
        catch(err){
            return err;
        }

    }
}

module.exports  = Controller