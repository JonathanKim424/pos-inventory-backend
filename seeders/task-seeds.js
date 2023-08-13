import Task from '../models/Task.js';

const taskData = [
    {
        text: 'Doctors Appointment',
        day: 'May 5th at 2:30pm',
        reminder: true
    },
    {
        text: 'Meeting at School',
        day: 'May 6th at 1:30pm',
        reminder: true
    },
    {
        text: 'Food Shopping',
        day: 'May 7th at 12:30pm',
        reminder: false
    }
];

const seedTasks = () => Task.bulkCreate(taskData);

export default seedTasks;