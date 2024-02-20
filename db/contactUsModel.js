const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    selectedState:String,
    inputValue:String,
    textAreaValue:String,
});
const faqsContactUsModel=mongoose.model('faqsForContactUsDashboard',schema);

module.exports=faqsContactUsModel;