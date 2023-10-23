// models/attendanceModel.js

const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['present', 'absent'],
        default: 'absent', // Set 'present' as the default value
        required: true,

    },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
