const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
const app =express();
app.use(express.json());


const PORT = process.env.PORT || 5000;


app.get('/', (req,res)=>{
    res.json({mess: "This is Varun Saini!!"})
})
app.listen(PORT, ()=>{
    console.log("Server is running on " + PORT);
})

//routes
app.use('/user',require('./routes/useRouter'))

//connect mongoDB

const URI = process.env.MONGODB_URL;
mongoose.connect(URI).then(()=>{
    console.log("MongoDB Connected");
}).catch(err=>{
    console.log(err);
})
