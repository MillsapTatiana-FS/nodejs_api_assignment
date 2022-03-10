const bored = () => {
    console.log("These are mocks");
    return Promise.resolve({
         "activity":"Write a short story",
         "type":"recreational",
         "participants":1,
         "price":0,
         "link":"",
         "key":"6301585",
         "accessibility":0.1
    });
}

module.exports = {bored}