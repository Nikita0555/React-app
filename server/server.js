const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors')
const PORT=5000;
const app=express();
const MONGODB_URL="mongodb://localhost:27017/ClinicLogin";

//middleware
app.use(cors());
app.use(express.json());
mongoose.connect(MONGODB_URL);
const db=mongoose.connection;
db.on('error',(err)=>{
    console.error("Mongodb connection error" ,err);
});
db.once('open',()=>{
    console.log("Mongodb is connected ");
});
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    city:String,
    state:String,
    message:String
})

const User=mongoose.model('User',userSchema)
app.post('/submit',async(req,res)=> {
    try{
    const newUser =new User({
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        message:req.body.message,
    });
    const savedUser= await newUser.save()
    res.status(201).json(savedUser)
}catch(error){
 console.error("Error during submitting",error);
 res.status(500).json({error:"Internal server error"});
}
});

app.listen(PORT);