const filterModules = require('./modules/filterModules');
const assignmentModules = require('./modules/assignmentModules');
const courseModules = require('./modules/courseModules');
const studentModules = require('./modules/studentModules');
const trainerModules = require('./modules/trainerModules');
const studentsPerCourseModules = require('./modules/studentsPerCourseModules');
const trainersPerCourseModules = require('./modules/trainersPerCourseModules');
const assignmentsPerCourseModules = require('./modules/assignmentsPerCourseModules');
const assignmentsPerCoursePerStudentModules = require('./modules/assignmentsPerCoursePerStudentModules');
const prompt = require('prompt-sync')();
const mysql = require('mysql2');
const menu = require('./menu');
const UI = require('./ui');


module.exports.EntryMenu = function () {

  var task = prompt("Welcome to our Private School!!Would you like to see the menu?(Yes or No) ")

  while ((task.toLowerCase() === "yes")) {
    console.log("----------------------------------------------------------------------------------------------------")
    console.log("1.Simple Lists")
    console.log("2.Filtered Lists")
    console.log("3.Add")
    console.log("----------------------------------------------------------------------------------------------------")
    var task = prompt("Give a choice from 1 to 3: ")
    switch (task) {
      case "1":
        menu.seeList();
        break;
      case "2":
        menu.filteredLists();
        break;
      case "3":
        menu.addList();
        break;
      default:
        console.log('An unknown value')
        menu.EntryMenu();
    }
  }
}

function seeList() {
  console.log("----------------------------------------------------------------------------------------------------")
  console.log("1.View Students");
  console.log("2.View Trainers");
  console.log("3.View Assignments");
  console.log("4.View Courses");
  console.log("5.Back to Menu");
  console.log("----------------------------------------------------------------------------------------------------")
  var task = prompt("Give a choice from 1 to 5: ")

  switch (task) {
    case "1":
      studentModules.getAllFromStudents();
      break;
    case "2":
      trainerModules.getAllFromTrainers();
      break;
    case "3":
      assignmentModules.getAllFromAssignments();
      break;
    case "4":
      courseModules.getAllFromCourses();
      break;
    case "5":
      menu.EntryMenu();
      break;
    default:
      console.log('An unknown value')
      menu.seeList();
  }
}

function filteredLists() {
  console.log("----------------------------------------------------------------------------------------------------")
  console.log("1.Student Per course");
  console.log("2.Trainer Per Course");
  console.log("3.Assignment Per Course");
  console.log("4.Assignment Per Course Per Student");
  console.log("5.Students With More than one courses");
  console.log("6.Back to Menu");
  console.log("----------------------------------------------------------------------------------------------------")
  var task = prompt("Give a choice from 1 to 6: ")

  switch (task) {
    case "1":
      filterModules.printAllFromStudentsPerCourse();
      break;
    case "2":
      filterModules.printAllFromTrainersPerCourse();
      break;
    case "3":
      filterModules.printAllFromAssignmentsPerCourse();
      break;
    case "4":
      filterModules.printAllAssignmentsPerCoursePerStudent();
      break;
    case "5":
      filterModules.printAllStudentsWithMoreThanOneCourses();
      break;
    case "6":
      menu.EntryMenu();
      break;
    default:
      console.log('An unknown value')
      menu.filteredLists();
  }
}

function addList() {
  console.log("----------------------------------------------------------------------------------------------------")
  console.log("1.Add Student");
  console.log("2.Add Trainer");
  console.log("3.Add Assignment");
  console.log("4.Add Course");
  console.log("5.Add Student Per Course");
  console.log("6.Add Trainer Per Course");
  console.log("7.Add Assignment Per Course");
  console.log("8.Add Assignment Per Course Per Student");
  console.log("9.Back to Menu");
  console.log("----------------------------------------------------------------------------------------------------")
  var task = prompt("Give a choice from 1 to 9: ")

  switch (task) {
    case "1":
      const student = UI.getStudentFromUser();
      studentModules.createStudent(student);
      break;
    case "2":
      const trainer = UI.getTrainerFromUser();
      trainerModules.createTrainer(trainer);
      break;
    case "3":
      const assignment = UI.getAssignmentFromUser();
      assignmentModules.createAssignment(assignment);
      break;
    case "4":
      const course = UI.getCourseFromUser();
      courseModules.createCourse(course);
      break;
    case "5":
      const studentsPerCourse = UI.getStudentsPerCourseFromUser();
      studentsPerCourseModules.createStudentsPerCourse(studentsPerCourse);
      break;
    case "6":
      const trainersPerCourse = UI.getTrainersPerCourseFromUser();
      trainersPerCourseModules.createTrainersPerCourse(trainersPerCourse);
      break;
    case "7":
      const assignmentsPerCourse = UI.getAssignmentsPerCourseFromUser();
      assignmentsPerCourseModules.createAssignmentsPerCourse(assignmentsPerCourse);
      break;
    case "8":
      const assignmentsPerCoursePerStudent = UI.getAssignmentsPerCoursePerStudentFromUser()
      assignmentsPerCoursePerStudentModules.createAssignmentsPerCoursePerStudent(assignmentsPerCoursePerStudent);
      break;
    case "9":
      menu.EntryMenu();
    default:
      console.log('An unknown value');
  }
}

module.exports.seeList = seeList;
module.exports.filteredLists = filteredLists;
module.exports.addList = addList;
