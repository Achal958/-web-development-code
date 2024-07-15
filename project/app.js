const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const reminders = [];

app.post('/api/reminders', (req, res) => {
    const { text, date } = req.body;

    if (text && date) {
        reminders.push({ text, date });
        res.json({ success: true, message: 'Reminder added successfully' });
    } else {
        res.status(400).json({ success: false, message: 'Invalid data' });
    }
});

app.get('/api/reminders', (req, res) => {
    res.json(reminders);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
