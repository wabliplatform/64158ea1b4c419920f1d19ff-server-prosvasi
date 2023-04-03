
const { MunicipalityMimageSchema } =require('./MunicipalityMimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const consultantSchema = new Schema({
Underscoreid:String , 


consname:String , 


consimage:  
MunicipalityMimageSchema
 , 


consbio:String 



})

module.exports = {
  Consultant : mongoose.model('consultant', consultantSchema),
}

