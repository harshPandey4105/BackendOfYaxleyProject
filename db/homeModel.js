const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    selectedState:String,
    inputValue:String,
    textAreaValue:String,
});
const faqsHomeModel=mongoose.model('FqsHome',schema);

module.exports=faqsHomeModel;