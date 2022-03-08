const axios = require("axios");

const bored = () => {
    console.log("I'm so bored");
    return axios.get(`${process.env.boredURL}`)
    .then(result => {return result.data})
}



module.exports = {
    bored
}