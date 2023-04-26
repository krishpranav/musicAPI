const express =  require("express");

const app = express();
const listenPort = 8080;

app.listen(8080, function() {
    console.log(`Server started: http://localhost:8080`)
})

app.get("/", (req, res) => {
    
})