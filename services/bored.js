const axios = require("axios");
require("dotenv").config();

const bored = () => {
    console.log("I'm so bored real");
    return axios.get(`${process.env.boredURL}`).then(result => result.data)
}



module.exports = {
    bored
   
}