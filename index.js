const express = require('express');
const multer = require('multer');
const path = require('path');
const faqsHomeModel = require('./db/homeModel');
const faqsServicesModel = require('./db/servicesModel');
const faqsContactUsModel = require('./db/contactUsModel');
const CountryInfoModel = require('./db/countryInfoModel');
const cors = require('cors');
require("./db/config");

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

app.post('/dashboardHome', async (req, res) => {
    const data = new faqsHomeModel(req.body);
    let result = await data.save();
    res.send(result);
    console.log(result);
});

app.get('/dashboardHome', async (req, res) => {
    const data = await faqsHomeModel.find();
    res.send(data);
});

app.post('/dashboardServices', async (req, res) => {
    const data = new faqsServicesModel(req.body);
    let result = await data.save();
    res.send(result);
    console.log(result);
});

app.get('/dashboardServices', async (req, res) => {
    const data = await faqsServicesModel.find();
    res.send(data);
});

app.post('/dashboardContactUs', async (req, res) => {
    const data = new faqsContactUsModel(req.body);
    let result = await data.save();
    res.send(result);
    console.log(result);
});

app.get('/dashboardContactUs', async (req, res) => {
    const data = await faqsContactUsModel.find();
    res.send(data);
});

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        return cb(null,'./uploads');
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

app.post('/dashboardCountryInfo', upload.single('image'), async (req, res) => {
    const { country,description,subHeading,p1,p2,p3,p4,avgCourseFee,partTime,avgLivingExpense,dependentsAllowed,languageRequirements,postStudyWorks,financialRequirements,englishLanguageWaiver,lt1,lt2,lt3,lt4,pu1,pu2,pu3,pu4 } = req.body;
    const image = req.file ? req.file.filename : '';
    try {
        const newData = new CountryInfoModel({
          image,country,description,subHeading,p1,p2,p3,p4,avgCourseFee,partTime,avgLivingExpense,dependentsAllowed,languageRequirements,postStudyWorks,financialRequirements,englishLanguageWaiver,lt1,lt2,lt3,lt4,pu1,pu2,pu3,pu4
        });
        const result =await newData.save();
        console.log(result);
        res.status(201).send('Data saved successfully');
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
