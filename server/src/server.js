const express = require("express")
const app = express()
const port = process.env.PORT || 8000
app.use("/static", express.static("public"))

app.get("/", (req, res) => {
    res.send("Bomberman, link start!")
})

app.listen(port, () => {
    console.log('Port ' + port)
})