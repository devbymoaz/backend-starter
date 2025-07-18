import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
     path: './env'
})

connectDB()
.then(() =>{
app.listen(process.env.PORT || 8000, () => {
     console.log(`Server is Running at Port: ${process.env.PORT}`)
})
})
.catch((err) =>{
     console.log("Mongo DB Connection failed", err)
})