const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    LT1:String,
    PU1:String,
    PU2:String,
    PU3:String,
    PU4:String,
    P1:String,
    P2:String,
    P3:String,
    P4:String,
    image1:String,
    image2:String,
    image3:String,
    eventHeading:String,
    webAndEvent:String,
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
const EventsDashboardModel=mongoose.model('EventsDashboard',schema);
const faqsForEventsDashboardModel=mongoose.model('faqsForEventsDashboard',schema2);

module.exports = { EventsDashboardModel, faqsForEventsDashboardModel };





















