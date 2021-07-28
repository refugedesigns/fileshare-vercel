import mongoose from "mongoose"


const connectDB = async() => {
    
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
                useCreateIndex: true,
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: true
            })
        }catch(err) {
            console.log("Could not connect to server", err.message)
        }
    
        const connection = mongoose.connection
        if(connection.readyState >= 1) {
            console.log("connected to database")
        }
        connection.on("error", () => console.log("connection failed!"))
    
}

export default connectDB;