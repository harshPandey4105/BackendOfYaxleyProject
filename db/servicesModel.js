const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    selectedState:String,
    inputValue:String,
    textAreaValue:String,
});
const faqsServicesModel=mongoose.model('faqsForServiceDashboard',schema);

module.exports=faqsServicesModel;