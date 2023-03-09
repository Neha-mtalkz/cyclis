const express = require("express");
const app = express();

app.use(express.json())
let result = [];
app.post("/karix-callback", (req, res) => {
    return result = [...result, req.body];
})

app.get("/result", (req, res) => {
    res.send(result);
});

app.listen(7000, (err) => {
    if(err) console.log(err)
    else console.log(`server is running on 7000`)
})
