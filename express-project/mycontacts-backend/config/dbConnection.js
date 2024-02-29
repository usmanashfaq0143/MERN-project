const mongoose = require( 'mongoose' );

const connectDB = async()=>{
    try {
        const connect= await  mongoose.connect("mongodb+srv://admin:admin@cluster0.gnnpgzz.mongodb.net/mycontacts_backend?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to DB", connect.connection.name, connect.connection.host);
    } catch (error) {
        console.log("Error connection to database", error);
        process.exitCode = 1;
    }
}

module.exports =  connectDB;