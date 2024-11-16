function sendEmail(from, to, message) {}

class User{
    constructor({name,surname, email,role}){
        this.name =  name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = {}
        this.messages = []
    }
    
    addCourse(course_name, course_level){
        this.courses[course_name] = course_level;
    }
    removeCourse(course_name){
        delete this.courses[course_name];
    }
    editCourse(course_name, course_level){
        this.courses[course_name] = course_level;
    }

    sendMessage(from, message) {
        this.messages.push({from: from.email, to: this.email, content: message});
        sendEmail(from.email, this.email, message);
    }

    showMessagesHistory() {
        if(this.messages.length){
            for(let message of this.messages) {
                console.log(`${message.from} -> ${message.to}: ${message.content}`)
            }
        }
    
    }

}

class ExtendedUser extends User{
    constructor({name,surname, email,role}){
      super({name,surname, email,role});
    }
    
    set fullName(fullNameToChange){
        let resultFullName = fullNameToChange.split(" ");
        this.name = resultFullName[0];
        this.surname = resultFullName[1];
    }
    get fullName(){
        return this.name + " " + this.surname;
    }
    static match(teacher_param, estudent_param, course = null){
        let matchedCourses = [];
        if(course == null){
            let teacherCourses = Object.keys(teacher_param.courses);
            for(let courseName of teacherCourses){
                if( (estudent_param.courses[courseName] != undefined) && (estudent_param.courses[courseName] <= teacher_param.courses[courseName])){
                    let auxObj = {};
                    auxObj.course = courseName;
                    auxObj.level = estudent_param.courses[courseName];
                    matchedCourses.push(auxObj);
                };
            };
        }else{
            
            if((estudent_param.courses[course] != undefined) && (estudent_param.courses[course] <= teacher_param.courses[course])){
               
                let auxObj = {};
                auxObj.course = course;
                auxObj.level = estudent_param.courses[course];
                matchedCourses.push(auxObj); 
            };
        };
        return matchedCourses
    }
}

class Teacher extends ExtendedUser {
    constructor({name,surname, email}){
        super({name,surname, email, role: "Teacher"});
      }
}

class Student  extends ExtendedUser {
    constructor({name,surname, email}){
        super({name,surname, email, role: "Student"});
      }
}

class Tutoring{
    constructor(){
        this.listStudents = [];
        this.listTeachers = [];
    }
    getStudentByName(name, surname){
        for(let student of this.listStudents){
            if(student.name === name && student.surname === surname){
                return student;
            }
        }
        return undefined;
    }
    getTeacherByName(name, surname){
        for(let teacher of this.listTeachers){
            if(teacher.name === name && teacher.surname === surname){
                return teacher;
            }
        }
        return undefined;
    }
    getStudentsForTeacher(teacher){
        let studentList = [];
        for(let student of this.listStudents){
            if(ExtendedUser.match(teacher,student) != []){
                studentList.push(student);
            }
        }
        return studentList;
    }
    getTeacherForStudent(student){
        let teacherList = [];
        for(let teacher of this.listTeachers){
            if(ExtendedUser.match(teacher,student).length){
                teacherList.push(teacher);
            }
        }
        return teacherList;
    }
    addStudent(name, surname, email){
        this.listStudents.push(new Student({name,surname,email}));
    }
    addTeacher(name, surname, email){
        this.listTeachers.push(new Teacher({name,surname,email}));
    }
}

class ExtendedTutoring extends Tutoring{
    constructor(){
        super();
    }
    sendMessages(from, to, message){
        for(let toUser of to){
            toUser.sendMessage(from, message);
        }
    }
}


let tutoring = new ExtendedTutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let to = [];
to.push(tutoring.getStudentByName('Rafael', 'Fife'));
to.push(tutoring.getStudentByName('Kelly', 'Estes'));
tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');
for(let user of to) {
    user.showMessagesHistory();
}


// Lab 4
/* let tutoring = new Tutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);
let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);
let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ... */

// Lab 3
/* let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);
let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]
teacher1.editCourse('maths', 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []
teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match); // -> {course: 'physics', level: 4}
 */

// Lab 2
/* let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4);
console.log(`${student1.fullName}: ${Object.entries(student1.courses).length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${Object.entries(teacher1.courses).length} courses`); // -> Paula Thompkins: 2 courses
student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${Object.entries(student1.courses).length} courses`); // -> Rafael Fifer: 1 courses
undefined && 2 ? console.log("true"): console.log("false");
 */

// Lab 1 input test examples
/* let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);
console.log(`${student1.name}: ${Object.entries(student1.courses).length} courses`); // -> Rafael: 1 courses
console.log(`${teacher1.name}: ${Object.entries(teacher1.courses).length} courses`); // -> Paula: 1 courses
teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
teacher1.showMessagesHistory(); */
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: test message
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: another message


