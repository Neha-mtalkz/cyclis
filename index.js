const express = require("express");
const app = express();

app.use(express.json())
let result = [];
app.post("/karix-callback", (req, res) => {
    console.log(result)
    result = [...result, req.body];
    console.log(result, "*************8result(**************")
    return res.send(result)
})

app.get("/result", (req, res) => {
    console.log(result)
    return res.send(result);
});

app.listen(7000, (err) => {
    if(err) console.log(err)
    else console.log(`server is running on 7000`)
})
