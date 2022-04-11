const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    name: { type: String, required: true },
    user: { type: String, required: true },
    status: { type: String, required: true, enum: ['Active', 'Inactive'] },
    recurrenceType: { type: String, required: true, enum: ['Interval', 'Fixed time'] },
    recurrenceValue: { type: Number, required: true },
    interval: { type: Number },
    time: { type: String },
    createdAt: { type: String, required: true },
});

const jobModel = mongoose.model('job', jobSchema);

module.exports = jobModel;