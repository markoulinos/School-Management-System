
class Course {
    constructor(Courses_ID, Title, Stream, Type, Start_Date, End_Date) {
        this.Courses_ID = Courses_ID;
        this.Title = Title;
        this.Stream = Stream;
        this.Type = Type;
        this.Start_Date = Start_Date;
        this.End_Date = End_Date;
    }
}

module.exports = Course;