const express = require("express");
require("./db/conn");
const Student = require('./models/students');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

// created a new Student

// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);


//     user.save().then(() => {
//         res.status(201);
//         res.send(user);
//     }).catch((e) => {
//         res.status(400);
//         res.send(e);
//     })

// })



app.post("/students", async(req,res)=>{
   

    try {
         const user = new Student(req.body);
          const createUser = await user.save();
         res.status(201).send(createUser);

    } catch (e) { res.status(400).send(e); }
})


app.listen(port , () =>{
    console.log(`connection is established at port ${port}`);
})