class Person {
    constructor(profile) {
        this.name = profile.name;
        this.age = profile.age;
        this.location = profile.location;
        this.gender = profile.gender;
    }
    speak() {
        return `Hello, my name is ${this.name} and I'm from ${this.location}`
    }

}

class Instructor extends Person {
    constructor(talents) {
        super(talents);
        this.specialty = talents.specialty;
        this.favLanguage = talents.favLanguage;
        this.catchPhrase = talents.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(Student, subject) {
        return `${Student.name} receives a perfect score on ${subject}`
    }
    points(Student) {
        if (Math.random() > .6) {
            Student.grade = Student.grade - 10
        } else {
            Student.grade = Student.grade + 10
        }
    }
    graduate(Student) {
        if (Student.grade > 70) {
            console.log(`You did it ${Student.name}! Find a job yo`)
        } else {
            console.log(`Not so fast, ${Student.name}. Study ur array methods more.`)
        }
    }
}

class Student extends Person {
    constructor(studies) {
        super(studies);
        this.previousBackground = studies.previousBackground;
        this.className = studies.className;
        this.favSubjects = studies.favSubjects;
        this.grade = studies.grade;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignments(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(details) {
        super(details);
        this.gradClass = details.gradClass;
        this.favInstructor = details.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}: "@channel standy times!​​​​​"`;
    }
    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}


const Twinkle = new Instructor ({
    "name": "Twinkle",
    "location": "Canada"
})

const Bub = new Student ({
    "name": "Bubbba",
    "favSubjects": ["CSS", "Cats"],
    "grade": 60
})

const TwinkleJunior = new ProjectManager ({
    "name": "TwinkleJunior"
})

console.log(Twinkle.demo("JS"));
console.log(Twinkle.grade(Bub, "HTML"));
console.log(Bub.listsSubjects());
console.log(Bub.PRAssignments("CSS"));
console.log(Bub.sprintChallenge("JS IV"));
console.log(TwinkleJunior.standUp("CS100"));
console.log(TwinkleJunior.debugsCode(Bub, "Bootstrap"));


// console.log(Bub.grade);
// Twinkle.points(Bub);
// console.log(Bub.grade);
// TwinkleJunior.graduate(Bub);
// Twinkle.points(Bub);
// console.log(Bub.grade);
// TwinkleJunior.graduate(Bub);


