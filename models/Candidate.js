
const { MunicipalityMimageSchema } =require('./MunicipalityMimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
Underscoreid:String , 


cname:String , 


cbio:String , 


cimage:  
MunicipalityMimageSchema
 , 




 cconsultants: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'consultant'
  }

]



})

module.exports = {
  Candidate : mongoose.model('candidate', candidateSchema),
}

