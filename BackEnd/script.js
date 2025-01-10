const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const dotenv=require("dotenv")
let mongoose=require("mongoose")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()


app.get("/",(req,res)=>{
    res.send("Welcome Node")   
})


let CountrySchema = new mongoose.Schema({
    countryName:String,
   description:String,
   about:String,
   image:String
})

let CountryModel= mongoose.model("country",CountrySchema)



app.get("/country", async (req,res)=>{
   let country= await CountryModel.find()
   res.send(country)
})

app.get("/country/:id",async (req,res)=>{
   let id=req.params.id
   let mycountry= await CountryModel.findById(id)
   res.send({
       message:"Success GetById",
       data:mycountry
   })
})


app.delete("/country/:id", async  (req,res)=>{
   let {id}=req.params
  await CountryModel.findByIdAndDelete(id)
  res.send({
   message:"Success Delete",
})
})

app.post("/country", async (req,res)=>{
   let newCountry= CountryModel(req.body)
  await newCountry.save()
  res.send({
    message:"Success Post",
    data:req.body
  })
})


mongoose.connect(process.env.ConnectString)
.then(()=>{
    console.log("connected")
})

app.listen(3000,()=>{
    console.log("bu app 3000 portunda dinlenilir")
})


