const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const con = await mongoose.connect("mongodb+srv://admin:admin1234@cluster0.fglied8.mongodb.net/users?retryWrites=true&w=majority", { 
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch(err) {
        console.log(err.message);
    }
}

module.exports = connectDB;
