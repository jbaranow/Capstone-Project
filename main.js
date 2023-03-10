const express = require('express')
const app = express()

app.use(express.json())
app.listen(5500, () => console.log('Server running on 5500'))

app.get("/meals", (req, res) => {
    res.send("New Page")
});