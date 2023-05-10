"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

let courseCount = courses.length

function findCourseByCourseId(courses, courseIdToFind){
    for( let i = 0 ; i < courseCount ; i++ ){
        if(courses[i].CourseId == courseIdToFind) {
            return courses[i];

        }

    }
}
// When does the PROG200 course start?
let thecourse = findCourseByCourseId(courses, "PROG200");
console.log(`the courseId of PROG200 starts on ${thecourse.StartDate}`)

// What is the title of the PROJ500 course?
thecourse = findCourseByCourseId(courses, "PROJ500");
console.log(`the courseId of PROJ500 is titled ${thecourse.Title}`)

// What are the titles of the courses that cost $50 or less?
let coursesThatCost50OrLess = [];
for(let i = 0; i < courseCount ; i++ ){
    if(courses[i].Fee < 50){
        coursesThatCost50OrLess.push()
    }
    console.log(coursesThatCost50OrLess)
}

// What classes meet in "Classroom 1"?
let coursesThatMeetInC1 = [];