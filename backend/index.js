const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
require('dotenv').config()

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json())

const email = process.env.USER_EMAIL

const auth = new google.auth.GoogleAuth({
    keyFile: 'service-account.json',
    scopes: ['https://www.googleapis.com/auth/calendar'],
});

const calendar = google.calendar({ version: 'v3', auth });

app.post('/checkAvailability', async (req, res) => {
    try {
        const { date } = req.body;

        const startOfDay = `${date}T09:00:00+03:00`;
        const endOfDay = `${date}T17:00:00+03:00`;
    
        let workHours = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"];
    
        const calendarRes = await calendar.freebusy.query({
            resource: {
                timeMin: new Date(startOfDay).toISOString(),
                timeMax: new Date(endOfDay).toISOString(),
                items: [{ id: email }],
            },
        });
    
        const busyTimes = calendarRes.data.calendars[email].busy;
    
        const availableSlots = workHours.filter(time => {
            const slotStart = new Date(`${date}T${time}:00+03:00`);
            const slotEnd = new Date(slotStart.getTime() + 60 * 60 * 1000);
    
            return !busyTimes.some(busy => {
                const busyStart = new Date(busy.start);
                const busyEnd = new Date(busy.end);
    
                return slotStart < busyEnd && slotEnd > busyStart;
            })
        })
        return res.json({
            data: availableSlots,
            message: "Data received successfuly"
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Error obtaining time slots."});
    }
});

app.post('/book', async (req, res) => {
    try {
        const { name, email, phone, date, time, service } = req.body;

        const startDateTime = new Date(`${date}T${time}`);
        const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

        const event = {
            summary: `${service} - ${name}`,
            description: `Phone: ${phone}\nEmail: ${email}`,
            start: {
                dateTime: startDateTime.toISOString(),
            },
            end: {
                dateTime: endDateTime.toISOString(),
            },
        };

        await calendar.events.insert({
            calendarId: 'muthonihannahhailu@gmail.com',
            resource: event,
        });

        res.json({message: 'Your event was successfully created.'})
    } catch (err) {
        console.log(`An error occured: ${err}`);
        res.status(500).json({message: "Error obtaining time slots."});
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})