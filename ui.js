const prompt = require('prompt-sync')();
const Student = require('./models/student');
const Trainer = require('./models/trainer');
const Assignment = require('./models/assignment');
const Course = require('./models/course');
const StudentsPerCourse = require('./models/studentsPerCourse');
const TrainersPerCourse = require('./models/trainersPerCourse');
const AssignmentsPerCourse = require('./models/assignmentsPerCourse');
const AssignmentsPerCoursePerStudent = require('./models/assignmentsPerCoursePerStudent');


module.exports.getStudentFromUser = function () {
    const Students_ID = prompt('id: ');
    const First_Name = prompt('First Name: ');
    const Last_Name = prompt('Last Name: ');
    const Date_Of_Birth = prompt('Date Of Birth (yyyy-mm-dd): ');
    const Tuition_Fees = prompt('Tuition Fees: ');

    return new Student(Students_ID, First_Name, Last_Name, Date_Of_Birth, Tuition_Fees);
};

module.exports.getTrainerFromUser = function () {
    const Trainers_ID = prompt('id: ');
    const First_Name = prompt('First Name: ');
    const Last_Name = prompt('Last Name: ');
    const Subject = prompt('Subject: ');

    return new Trainer(Trainers_ID, First_Name, Last_Name, Subject);
};

module.exports.getAssignmentFromUser = function () {
    const Assignments_ID = prompt('id: ');
    const Title = prompt('Title: ');
    const Description = prompt('Description: ');
    const Sub_Date_Time = prompt('Sub Date (yyyy-mm-dd): ');
    const Oral_Mark = prompt('Oral Mark: ');
    const Total_Mark = prompt('Total Mark: ');

    return new Assignment(Assignments_ID, Title, Description, Sub_Date_Time, Oral_Mark, Total_Mark);
};

module.exports.getCourseFromUser = function () {
    const Courses_ID = prompt('id: ');
    const Title = prompt('Title: ');
    const Stream = prompt('Stream: ');
    const Type = prompt('Type: ');
    const Start_Date = prompt('Start Date (yyyy-mm-dd): ');
    const End_Date = prompt('End Date (yyyy-mm-dd): ');

    return new Course(Courses_ID, Title, Stream, Type, Start_Date, End_Date);
};

module.exports.getStudentsPerCourseFromUser = function () {
    const StudentsPerCourse_id = prompt('Student Per Course id: ');
    const Students_ID = prompt('Student ID: ');
    const Courses_ID = prompt('Course ID: ');

    return new StudentsPerCourse(StudentsPerCourse_id, Students_ID, Courses_ID);
};

module.exports.getTrainersPerCourseFromUser = function () {
    const TrainersPerCourse_ID = prompt('Trainer Per Course ID: ');
    const Trainers_ID = prompt('Trainer ID: ');
    const Courses_ID = prompt('Course ID: ');

    return new TrainersPerCourse(TrainersPerCourse_ID, Trainers_ID, Courses_ID);
};

module.exports.getAssignmentsPerCourseFromUser = function () {
    const AssignmentsPerCourse_ID = prompt('Assignment Per Course ID: ');
    const Assignments_ID = prompt('Assignments ID: ');
    const Courses_ID = prompt('Course ID: ');

    return new AssignmentsPerCourse(AssignmentsPerCourse_ID, Assignments_ID, Courses_ID);
};

module.exports.getAssignmentsPerCoursePerStudentFromUser = function () {
    const AssignmentsPerCoursePerStudent_ID = prompt('Assignment Per Course Per Student ID: ');
    const Assignments_ID = prompt('Assignments ID: ');
    const Courses_ID = prompt('Course ID: ');
    const Students_ID = prompt('Students ID: ');

    return new AssignmentsPerCoursePerStudent(AssignmentsPerCoursePerStudent_ID, Assignments_ID, Courses_ID, Students_ID);
};