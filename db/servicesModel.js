const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    selectedState:String,
    inputValue:String,
    textAreaValue:String,
});
const faqsServicesModel=mongoose.model('FaqsService',schema);

module.exports=faqsServicesModel;