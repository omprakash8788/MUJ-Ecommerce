import mongoose from "mongoose";

const connectDB=async()=>{
    mongoose.connection.on("connected", ()=>{
        console.log("MonoDB connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/Muj`)
}

export default connectDB;