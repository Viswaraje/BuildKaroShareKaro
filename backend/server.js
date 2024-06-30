import express from 'express'
import dotenv from "dotenv"
import cors from "cors"


dotenv.config()

const app=express()
app.use(cors());


app.get("/",(req,res)=>{

    res.send("Server is ready")
})

//middleware





//routes import
import userRoutes from './routes/user.route.js'
import exploreRoutes from './routes/explore.route.js'



//routes declaration
//app.use("/user",userRouter)
app.use("/api/users",userRoutes)
app.use("/api/explore",exploreRoutes)









app.listen(5000,()=>{

    console.log("Server started on http://localhost:5000")
})



export {app}