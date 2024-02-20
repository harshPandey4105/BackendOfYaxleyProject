const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    country:String,
    description:String,
    subHeading:String,
    p1:String,
    p2:String,
    p3:String,
    p4:String,
    avgCourseFee:String,
    partTime:String,
    avgLivingExpense:String,
    dependentsAllowed:String,
    languageRequirements:String,
    postStudyWorks:String,
    financialRequirements:String,
    englishLanguageWaiver:String,
    lt1:String,
    lt2:String,
    lt3:String,
    lt4:String,
    pu1:String,
    pu2:String,
    pu3:String,
    pu4:String,
    image:String
});
const CountryInfoModel=mongoose.model('faqsForCountryInfoDashboard',schema);

module.exports=CountryInfoModel;
