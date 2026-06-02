const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors')
const PORT=process.env.PORT || 5000;
const app=express();
const MONGODB_URL=process.env.MONGODB_URL|| "mongodb+srv://dbUserform:nfdjdDhjRbhT@cluster0.nj0efhf.mongodb.net/?appName=Cluster0";

//middleware
app.use(cors({
    origin: "https://willowy-syrniki-ccfa63.netlify.app",
    method: ["POST", "GET"],
    credentials:true
}));
app.use(express.json());

mongoose.connect(MONGODB_URL)
.then(()=> console.log('Mongodb is connected'))
.catch((err)=>console.log("Mongodb connection error :",err));

const db = mongoose.connection;
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    city:String,
    state:String,
    message:String
});

const User=mongoose.model('User',userSchema);

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
app.get("/",(req,res)=>{
 res.send("Backend is working correctly");
});

app.listen(PORT);