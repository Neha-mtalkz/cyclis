const express = require("express");
const app = express();

console.log("*******************************")
app.post("/karix-callback", (req, res) => {
    console.log(req, "******************")
    res.send(res.body)
})

app.listen(7000, (err) => {
    if(err) console.log(err)
    else console.log(`server is running on 7000`)
})