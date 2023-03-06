const express = require("express");
const app = express();
const port =8000;

app.get('/',(req,res)=>{

    res.send({
        status: 200,
        message: "Successfully message sent",
        data: {}
    });
})


app.listen(port,()=>{
    console.log("Server Successfully started at the Port :",port)
})
