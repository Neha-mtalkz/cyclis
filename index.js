const express = require("express");
const app = express();

app.use(express.json())
console.log("*******************************")
app.post("/karix-callback", (req, res) => {
    console.log(req.data, req.body, req, "******************")
    res.send(res.body)
})

app.listen(7000, (err) => {
    if(err) console.log(err)
    else console.log(`server is running on 7000`)
})
