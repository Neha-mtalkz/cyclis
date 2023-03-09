const express = require("express");
const app = express();

console.log("*******************************")
app.post("/karix-callback", (req, res) => {
    console.log(req.body, "******************")
    res.send(res.body)
})

console.log("*******************************")

app.listen(7000, (err) => {
    if(err) console.log(err)
    else console.log(`server is running on 7000`)
})
