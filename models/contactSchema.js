const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    firstName: String,
    lastName : String,
    email : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    adresse : 
        {
            city : String,
            postCode : number,
        },
});

module.exports = mongoose.model("contact" , ContactSchema)