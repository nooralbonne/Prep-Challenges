"use strict";

// -------------------------------------------------------------------------------------------------------
//  Challenge 1:
//  Required:
//
//  Write a function that takes an object and returns the formatted text based on the provided object as the example:
// 
// Input:
 let obj = {
     firstName: 'Ellie',
     lastName: 'jon',
     age: 67,
     hobby: 'Gaming and Sleeping'
  }
//
//  Output: "my name is Ellie Jon I am 67 YO, and I love Gaming and Sleeping."

//  Note that:
//  1- The text template is "my name is ** ** I am ** YO, and I love **."
//  2- The first letters of the firstName and lastName should be capital letter

const objLat = (obj) => {
    const { firstName, lastName, age, hobby } = obj;
    
    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (str) => {
        return str[0].toUpperCase() + str.slice(1);
    };

    const formattedFirstName = capitalizeFirstLetter(firstName);
    const formattedLastName = capitalizeFirstLetter(lastName);
    
    return `My name is ${formattedFirstName} ${formattedLastName} I am ${age} YO, and I love ${hobby}.`;
};

console.log(objLat(obj));

// -------------------------------------------------------------------------------------------------------
//  Challenge 2:
//  Required:
//
//  Rekey is receiving info about applicants for his startup company (as array of objects), containing first name,
//  last name, age and technology they know.
//  Rekey only cares about the full name and the technology if the applicant has more than one year of Experience
//
//  Reformat the array of objects that you are receiving by returning a new array of objects that contains only
//  fullName and tech if the applicant has more than one year of Experience

// Input:
// let cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 7,
//         tech: "Java"
//     }
// ]
//
// Output:
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     },
//     {
//         fullName: "Shira",
//         tech: ".Net"
//     },
//     {
//         fullName: "Isabella",
//         tech: "Java"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

const cvFormatter = (arr) => {
    const formattedCvs = [];
    for (let i = 0; i < arr.length; i++) {
        const cv = arr[i];
        const { firstName, LastName, yearsOfExperience, tech } = cv;

        let fullName = '';
        if (firstName && LastName) {
            fullName = `${firstName} ${LastName}`;
        } else if (firstName) {
            fullName = firstName;
        } else if (LastName) {
            fullName = LastName;
        }

        if (yearsOfExperience > 1) {
            formattedCvs.push({
                fullName,
                tech
            });
        }
    }
    return formattedCvs;
};

// Test the function
let cvs = [
    {
        firstName: "Jason",
        LastName: "James",
        yearsOfExperience: 20,
        tech: "JS"
    },
    {
        firstName: "Shira",
        LastName: null,
        yearsOfExperience: 5,
        tech: ".Net"
    },
    {
        firstName: "Dmitri",
        LastName: "Akkerman",
        yearsOfExperience: 1,
        tech: "Python"
    },
    {
        firstName: "Isabella",
        LastName: null,
        yearsOfExperience: 7,
        tech: "Java"
    }
];

console.log(cvFormatter(cvs));

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Rekey wants to get statistics about the applicants
//  using the array of objects you will be getting, return an object that has the following properties
//
// let result = {
//     python_Devs: 0,
//     javaScript_Devs: 0,
//     dotNet_Devs: 0,
//     java_Devs: 0,
//     totalApplicants: 0,
//     rejectedApplicants: 0,
// }
//
// and fill it up based on the results

//  Note that:
//  1- rejectedApplicants are applications that has both the names empty or null and whoever have one year or less of Experience

const applicationsStatics = (arr) => {
    let result = {
        python_Devs: 0,
        javaScript_Devs: 0,
        dotNet_Devs: 0,
        java_Devs: 0,
        totalApplicants: 0,
        rejectedApplicants: 0,
    };

    // Iterate through the array using a traditional for loop
    for (let i = 0; i < arr.length; i++) {
        const applicant = arr[i];
        // Count total applicants
        result.totalApplicants++;

        // Check if both names are empty or null and experience is one year or less
        if ((!applicant.firstName && !applicant.lastName) && applicant.experience <= 1) {
            result.rejectedApplicants++;
        } else {
            // Check programming language and increment respective count
            switch (applicant.preferredLanguage) {
                case 'Python':
                    result.python_Devs++;
                    break;
                case 'JavaScript':
                    result.javaScript_Devs++;
                    break;
                case 'DotNet':
                    result.dotNet_Devs++;
                    break;
                case 'Java':
                    result.java_Devs++;
                    break;
                default:
                    break;
            }
        }
    }

    return result;
};

// Example usage:
const applicants = [
    { firstName: 'John', lastName: 'Doe', preferredLanguage: 'Python', experience: 2 },
    { firstName: 'Alice', lastName: 'Smith', preferredLanguage: 'JavaScript', experience: 1 },
    { firstName: '', lastName: '', preferredLanguage: 'Java', experience: 1 },
    { firstName: 'Bob', lastName: 'Johnson', preferredLanguage: 'DotNet', experience: 3 },
    { firstName: '', lastName: null, preferredLanguage: 'Python', experience: 1 },
    { firstName: 'Eve', lastName: 'Williams', preferredLanguage: 'JavaScript', experience: 2 }
];

const stats = applicationsStatics(applicants);
console.log(stats);

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 4:
//  Optional:
//
//  A Certain School principal wants to calculate the average score of each class in each grade in the school
//  so he requested a programmer to solve this issue for him instead of doing it again every time
//
//  given the school data, calculate the average score of the students of each class in each grade
//  then change the avg value for the class
//  Input:
let data = {
    SchoolName: "David Academy",
    Capacity: 1000,
    grades: [
        {
            grade: "First",
            numberOFClasses: 3,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        89, 87, 45, 48, 89, 65, 21, 54, 78, 62, 51, 54, 50, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        87, 54, 95, 45, 41, 51, 25, 63, 58, 47, 64, 51, 98, 100
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        74, 85, 20, 51, 59, 58, 62, 71, 74, 99, 84, 71, 38, 70
                    ]
                },
            ]
        },
        {
            grade: "Second",
            numberOFClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        71, 82, 86, 3, 1, 52, 91, 84, 44, 68, 64, 23, 80, 60,
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        86, 39, 71, 17, 61, 76, 60, 54, 42, 65, 49, 75, 96, 70
                    ]
                },
            ]
        },
        {
            grade: "Third",
            numberOFClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        11, 12, 28, 78, 57, 3, 54, 72, 14, 19, 88, 74, 68, 58
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        62, 8, 35, 43, 96, 9, 97, 73, 4, 32, 18, 81, 70, 42
                    ]
                },
            ]
        },
        {
            grade: "Forth",
            numberOFClasses: 4,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        63, 71, 93, 87, 83, 85, 67, 49, 62, 45, 38, 48, 58, 52
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        100, 45, 70, 75, 87, 63, 39, 46, 54, 68, 74, 96, 52, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        97, 54, 80, 95, 69, 31, 88, 84, 50, 81, 67, 34, 41, 87
                    ]
                },
                {
                    avg: 0,
                    classNumber: "04",
                    classScores: [
                        64, 96, 66, 38, 78, 58, 43, 100, 34, 56, 82, 53, 89, 72
                    ]
                },
            ]
        },
    ],
};

//  Note that:
//  1- This is not the exact data you will be getting every time and the solution should be dynamic
//  2- You need to round the average to the nearest lower number 

const classesAvg = (data) => {
    for (let i = 0; i < data.grades.length; i++) {
        const grade = data.grades[i];
        for (let j = 0; j < grade.classes.length; j++) {
            const classItem = grade.classes[j];
            let sum = 0;
            for (let k = 0; k < classItem.classScores.length; k++) {
                sum += classItem.classScores[k];
            }
            const avg = Math.floor(sum / classItem.classScores.length);
            classItem.avg = avg;
        }
    }
    return data;
};

const updatedData = classesAvg(data);
console.log(updatedData);
// -------------------------------------------------------------------------------------------------------

