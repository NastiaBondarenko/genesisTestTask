"use strict"
const fs = require('fs/promises');

class Subscriber {
    constructor(){
        this.pathToFile = 'src/static/emails.txt'

    }
    async read(){
        try{
            let emails = await fs.readFile(this.pathToFile, {encoding: 'utf-8'});
            return emails;
        } catch (err) {
        return err;
      }
    }
    async write(email){
        let stringToAppend = ' '+email
        try {
            await fs.appendFile(this.pathToFile, stringToAppend);
          } catch (err) {
            return err;
          }
    }
}

module.exports = Subscriber