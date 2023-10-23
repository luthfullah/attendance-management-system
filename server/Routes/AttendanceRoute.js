const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');
const  StatusCodes = require('http-status-codes')


// get api
router.get('/', async (req, res) => {
    try {
        const AllStudents = await Attendance.find();
  
        if (AllStudents.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        } else {
            return res.status(200).json({AllStudents });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
  });

//   post api
router.post('/', async (req, res) => {
    try {
        const { studentId, date, status } = req.body;

        // Check if the attendance record already exists for the given student and date
        const existingRecord = await Attendance.findOne({ studentId, date });
        

        if (existingRecord) {
            // If a record already exists, you might want to handle this case
            return res.status(400).json({ message: 'Attendance already marked for this date' });
        }

        // If the record does not exist, create a new attendance record
        const newAttendance = new Attendance({ studentId, date, status });
        await newAttendance.save();

        res.status(200).json({ message: 'Attendance marked successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// delete api
router.delete('/:id', async (req, res, next) => {
    let id = req.params.id;
    let students;
    try {
        students = await Attendance.findByIdAndRemove(id);
    } catch (error) {
        console.log(error, "error occurred in delete API");
        return res.status(500).json({ message: "Internal Server Error" });
    }

    if (!students) {
        return res.status(404).json({ message: "Medicine not found." });
    } else {
        return res.status(200).json({ message: "Medicine is deleted successfully." });
    }
});


module.exports = router;

// router.post('/', async (req, res) => {
//     try {
//         const { studentId, date, status } = req.body;

//         // Check if the attendance record already exists
//         let attendanceRecord = await Attendance.findOne({ studentId, date });

//         // If the record exists, update the status; otherwise, create a new record
//         if (attendanceRecord) {
//             attendanceRecord.status = status;
//             await attendanceRecord.save();
//         } else {
//             attendanceRecord = new Attendance({ studentId, date, status });
//             await attendanceRecord.save();
//         }

//         res.status(200).json({ message: 'Attendance marked successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// module.exports = router;
