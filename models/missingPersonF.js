
const mongoose=require("mongoose")


const personSchema=mongoose.Schema({
    Name:{
        type:String,
        required:[true,"userName"]
    },
    fatherName:{
        type:String,
        required:[true,"fatherName"]

    },
    motherName:{
        type:String,
        required:[true, "motherName"]

    },
     yearOfBirth:{
         type:Number,
         required:[true,"yearOfBirth"],
         min:[1950,"minYear"],
         max:[ new Date().getFullYear(),"maxYear"]
         

     }
     ,
     gender:{
         type:String,
         required:[true,"gender"],
         enum:{
        values:["male","female"],
        message:"male&female"
            }
        
            
     },
     nationality:{
         type:String,
         
     },
     height:{
         type:Number,
         min:[5,"height"]
     },
     weight:{
         type:Number,
         min:[1,"weight"]
     },
     
     characteristics:{
         type:String

     },
     photo:{
         type:String,
        },

     date:{
         type:Date,
         required:[true,"date"]
     },
     country:{
         type:String,
         required:[true,"country"]
     },
     state:{
         type:String,
         required:[true,"state"]

     },
     city:{
         type:String,
         required:[true,"city"]
     },
     circumstances:{
        type:String,
        required:[true,"circumstances"]
     },
     phone:{
         type:String,
         required:[true,"phone"]
     },
     caseN:{
         type:Date,
         
     }
     ,currentUser:{
         type:String
     },
     whatsApp:String,
     messangerUserName:String,
     Accept:{
         type:Boolean,
         default:false
     },
     stateType:{
        type:String,
        default:"he is serch for famile "
    },
    status: {
        type: String,
        default: "found"
    },
    latitude:String,
    longitude:String,
     
})

const reportFound=mongoose.model("reportFound",personSchema);
module.exports=reportFound;