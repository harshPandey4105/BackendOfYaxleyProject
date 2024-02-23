const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    P1:String,
    P2:String,
    P3:String,
    P4:String,
    batchName:String,
    IELTS:String,
    description:String,
    date:String,
    LtL1:String,
    LtL2:String,
    PUL1:String,
    PUL2:String,
    image:String
});
const schema2=new mongoose.Schema({
    selectedState:String,
    inputValue:String,
    textAreaValue:String,
});
const TestPrepDashboardModel=mongoose.model('TestPrepDashboard',schema);
const faqsForTestPrepDashboardModel=mongoose.model('faqsForTestPrepDashboard',schema2);

module.exports = { TestPrepDashboardModel, faqsForTestPrepDashboardModel };





















