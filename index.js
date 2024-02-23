const express = require('express');
const multer = require('multer');
const path = require('path');
const faqsHomeModel = require('./db/homeModel');
const faqsServicesModel = require('./db/servicesModel');
const faqsContactUsModel = require('./db/contactUsModel');
const { CountryInfoModel, CountryInfoFaqsModel } = require('./db/countryInfoModel');
const { EventsDashboardModel, faqsForEventsDashboardModel } = require('./db/eventsModel')
const { TestPrepDashboardModel, faqsForTestPrepDashboardModel } = require('./db/testPrepModel')
const cors = require('cors');
require("./db/config");

const app = express();
const PORT = process.env.PORT || 4000;
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
    destination: function (req, file, cb) {
        return cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

app.post('/dashboardCountryInfo', upload.single('image'), async (req, res) => {
    const { country, description, subHeading, p1, p2, p3, p4, avgCourseFee, partTime, avgLivingExpense, dependentsAllowed, languageRequirements, postStudyWorks, financialRequirements, englishLanguageWaiver, lt1, lt2, lt3, lt4, pu1, pu2, pu3, pu4 } = req.body;
    const image = req.file ? req.file.filename : '';
    try {
        const newData = new CountryInfoModel({
            image, country, description, subHeading, p1, p2, p3, p4, avgCourseFee, partTime, avgLivingExpense, dependentsAllowed, languageRequirements, postStudyWorks, financialRequirements, englishLanguageWaiver, lt1, lt2, lt3, lt4, pu1, pu2, pu3, pu4
        });
        const result = await newData.save();
        console.log(result);
        res.status(201).send('Data saved successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/dashboardCountryInfo', async (req, res) => {
    const data = await CountryInfoModel.find();
    res.send(data);
})


app.post('/dashboardCountryInfoFaqs', async (req, res) => {
    const data = new CountryInfoFaqsModel(req.body);
    let result = await data.save();
    res.send(result);
    console.log(result);
})
app.get('/dashboardCountryInfoFaqs', async (req, res) => {
    const data = await CountryInfoFaqsModel.find();
    res.send(data);
})


app.post('/dashboardEvents', upload.array('images', 4), async (req, res) => {
    const { LT1, PU1, PU2, PU3, PU4, P1, P2, P3, P4, eventHeading, webAndEvent, description, date, LtL1, LtL2, PUL1, PUL2 } = req.body;
    const image1 = req.files[0].filename;
    const image2 = req.files[1].filename;
    const image3 = req.files[2].filename;
    const image = req.files[3].filename;
    try {
        const newData = new EventsDashboardModel({
           image1,image2,image3,image, LT1, PU1, PU2, PU3, PU4, P1, P2, P3, P4, eventHeading, webAndEvent, description, date, LtL1, LtL2, PUL1, PUL2
        });
        const result = await newData.save();
        console.log(result);
        res.status(201).send('Data saved successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})
app.get('/dashboardEvents', async (req, res) => {
    const data = await EventsDashboardModel.find();
    res.send(data);
})

app.post('/faqsdashboardEvents', async (req, res) => {
    const data = new faqsForEventsDashboardModel(req.body);
    let result = await data.save();
    res.send(result);
    console.log(result)
})
app.get('/faqsdashboardEvents', async (req, res) => {
    const data = await faqsForEventsDashboardModel.find();
    res.send(data);
})

app.post('/dashboardTestPrep',upload.single('image'), async (req, res) => {
    const { P1, P2, P3, P4, IELTS, batchName, description, date, LtL1, LtL2, PUL1, PUL2 } = req.body;
    const image = req.file ? req.file.filename : '';
    try {
        const newData = new TestPrepDashboardModel({
            image,P1, P2, P3, P4, IELTS, batchName, description, date, LtL1, LtL2, PUL1, PUL2 
        });
        const result = await newData.save();
        console.log(result);
        res.status(201).send('Data saved successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/dashboardTestPrep', async (req, res) => {
    const data = await TestPrepDashboardModel.find();
    res.send(data);
})

app.post('/faqsdashboardTestPrep', async (req, res) => {
    const data = new faqsForTestPrepDashboardModel(req.body);
    let result = await data.save();
    res.send(result);
    console.log(result)
})
app.get('/faqsdashboardTestPrep', async (req, res) => {
    const data = await faqsForTestPrepDashboardModel.find();
    res.send(data);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
