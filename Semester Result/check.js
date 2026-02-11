let studentsData = [
    {
        name: "Ali",
        id: "SE-101",
        semesters: [
            {
                semesterObtainedMarks: [
                    { programmingFundamentals: 78 },
                    { ict: 72 },
                    { calculus: 70 },
                    { discreteMath: 75 },
                    { computerBasics: 80 },
                ]
            },
            {
                semesterObtainedMarks: [
                    { oop: 82 },
                    { dataStructures: 76 },
                    { linearAlgebra: 68 },
                    { digitalLogicDesign: 74 },
                    { softwareEngineeringIntro: 79 }
                ]
            },
            {
                semesterObtainedMarks: [
                    { databaseSystems: 85 },
                    { operatingSystems: 77 },
                    { algorithms: 73 },
                    { webEngineering: 81 },
                    { probabilityStats: 70 }
                ]
            },
            {
                semesterObtainedMarks: [
                    { softwareArchitecture: 80 },
                    { computerNetworks: 75 },
                    { artificialIntelligence: 72 },
                    { hci: 78 },
                    { informationSecurity: 74 }
                ]
            },
            {
                semesterObtainedMarks: [
                    { softwareProjectManagement: 83 },
                    { sqa: 79 },
                    { mobileAppDevelopment: 86 },
                    { cloudComputing: 81 },
                    { finalYearProject: 90 }
                ]
            }
        ],
        semesterResult: [
            {
                semesterName: "Semester 1",
                semesterTotalMarks: 0,
                semesterPercentage: 0,
                grade: ""
            },
            {
                semesterName: "Semester 2",
                semesterTotalMarks: 0,
                semesterPercentage: 0,
                grade: ""
            },
            {
                semesterName: "Semester 3",
                semesterTotalMarks: 0,
                semesterPercentage: 0,
                grade: ""
            },
            {
                semesterName: "Semester 4",
                semesterTotalMarks: 0,
                semesterPercentage: 0,
                grade: ""
            },
            {
                semesterName: "Semester 5",
                semesterTotalMarks: 0,
                semesterPercentage: 0,
                grade: ""
            },
        ]
    },
    // {
    //     name: "Ali",
    //     id: "SE-101",
    //     semesters: [
    //         {
    //             semesterObtainedMarks: [
    //                 { programmingFundamentals: 78 },
    //                 { ict: 72 },
    //                 { calculus: 70 },
    //                 { discreteMath: 75 },
    //                 { computerBasics: 80 },
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { oop: 82 },
    //                 { dataStructures: 76 },
    //                 { linearAlgebra: 68 },
    //                 { digitalLogicDesign: 74 },
    //                 { softwareEngineeringIntro: 79 }
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { databaseSystems: 85 },
    //                 { operatingSystems: 77 },
    //                 { algorithms: 73 },
    //                 { webEngineering: 81 },
    //                 { probabilityStats: 70 }
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { softwareArchitecture: 80 },
    //                 { computerNetworks: 75 },
    //                 { artificialIntelligence: 72 },
    //                 { hci: 78 },
    //                 { informationSecurity: 74 }
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { softwareProjectManagement: 83 },
    //                 { sqa: 79 },
    //                 { mobileAppDevelopment: 86 },
    //                 { cloudComputing: 81 },
    //                 { finalYearProject: 90 }
    //             ]
    //         }
    //     ],
    //     semesterResult: [
    //         {
    //             semesterName: "Semester 1",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 2",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 3",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 4",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 5",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //     ]
    // },
    // {
    //     name: "Ali",
    //     id: "SE-101",
    //     semesters: [
    //         {
    //             semesterObtainedMarks: [
    //                 { programmingFundamentals: 78 },
    //                 { ict: 72 },
    //                 { calculus: 70 },
    //                 { discreteMath: 75 },
    //                 { computerBasics: 80 },
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { oop: 82 },
    //                 { dataStructures: 76 },
    //                 { linearAlgebra: 68 },
    //                 { digitalLogicDesign: 74 },
    //                 { softwareEngineeringIntro: 79 }
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { databaseSystems: 85 },
    //                 { operatingSystems: 77 },
    //                 { algorithms: 73 },
    //                 { webEngineering: 81 },
    //                 { probabilityStats: 70 }
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { softwareArchitecture: 80 },
    //                 { computerNetworks: 75 },
    //                 { artificialIntelligence: 72 },
    //                 { hci: 78 },
    //                 { informationSecurity: 74 }
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { softwareProjectManagement: 83 },
    //                 { sqa: 79 },
    //                 { mobileAppDevelopment: 86 },
    //                 { cloudComputing: 81 },
    //                 { finalYearProject: 90 }
    //             ]
    //         }
    //     ],
    //     semesterResult: [
    //         {
    //             semesterName: "Semester 1",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 2",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 3",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 4",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 5",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //     ]
    // },
    // {
    //     name: "Ali",
    //     id: "SE-101",
    //     semesters: [
    //         {
    //             semesterObtainedMarks: [
    //                 { programmingFundamentals: 78 },
    //                 { ict: 72 },
    //                 { calculus: 70 },
    //                 { discreteMath: 75 },
    //                 { computerBasics: 80 },
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { oop: 82 },
    //                 { dataStructures: 76 },
    //                 { linearAlgebra: 68 },
    //                 { digitalLogicDesign: 74 },
    //                 { softwareEngineeringIntro: 79 }
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { databaseSystems: 85 },
    //                 { operatingSystems: 77 },
    //                 { algorithms: 73 },
    //                 { webEngineering: 81 },
    //                 { probabilityStats: 70 }
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { softwareArchitecture: 80 },
    //                 { computerNetworks: 75 },
    //                 { artificialIntelligence: 72 },
    //                 { hci: 78 },
    //                 { informationSecurity: 74 }
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { softwareProjectManagement: 83 },
    //                 { sqa: 79 },
    //                 { mobileAppDevelopment: 86 },
    //                 { cloudComputing: 81 },
    //                 { finalYearProject: 90 }
    //             ]
    //         }
    //     ],
    //     semesterResult: [
    //         {
    //             semesterName: "Semester 1",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 2",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 3",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 4",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 5",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //     ]
    // },
    // {
    //     name: "Ali",
    //     id: "SE-101",
    //     semesters: [
    //         {
    //             semesterObtainedMarks: [
    //                 { programmingFundamentals: 78 },
    //                 { ict: 72 },
    //                 { calculus: 70 },
    //                 { discreteMath: 75 },
    //                 { computerBasics: 80 },
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { oop: 82 },
    //                 { dataStructures: 76 },
    //                 { linearAlgebra: 68 },
    //                 { digitalLogicDesign: 74 },
    //                 { softwareEngineeringIntro: 79 }
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { databaseSystems: 85 },
    //                 { operatingSystems: 77 },
    //                 { algorithms: 73 },
    //                 { webEngineering: 81 },
    //                 { probabilityStats: 70 }
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { softwareArchitecture: 80 },
    //                 { computerNetworks: 75 },
    //                 { artificialIntelligence: 72 },
    //                 { hci: 78 },
    //                 { informationSecurity: 74 }
    //             ]
    //         },
    //         {
    //             semesterObtainedMarks: [
    //                 { softwareProjectManagement: 83 },
    //                 { sqa: 79 },
    //                 { mobileAppDevelopment: 86 },
    //                 { cloudComputing: 81 },
    //                 { finalYearProject: 90 }
    //             ]
    //         }
    //     ],
    //     semesterResult: [
    //         {
    //             semesterName: "Semester 1",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 2",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 3",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 4",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //         {
    //             semesterName: "Semester 5",
    //             semesterTotalMarks: 0,
    //             semesterPercentage: 0,
    //             grade: ""
    //         },
    //     ]
    // },
];








// let semestersDefaultData = {
//     semester1 : {},
// }

let defaultvar1 = JSON.parse(JSON.stringify(studentsData[0].semesters[0].semesterObtainedMarks));
// semestersDefaultData.semester1 = defaultvar1;

let sumOfTotalMarks = 0;

for (let key in defaultvar1) {
    defaultvar1[key] = 100;
    sumOfTotalMarks += defaultvar1[key];
}







// function getSubjectsMark1() {
//     for (let i = 0; i < studentsData[0].semesters.length; i++) {

//         semesterVar = studentsData[0].semesters[i].semesterObtainedMarks;

//         studentsData[0].semesterResult[i].semesterTotalMarks = 0;


//         if (semesterVar == studentsData[0].semesters[0].semesterObtainedMarks) {
//             for (let key1 in semesterVar) {
//                 for (let key2 in semesterVar[key1]) {
//                     studentsData[0].semesterResult[0].semesterTotalMarks += semesterVar[key1][key2];
//                 }
//             }
//         }

//         if (semesterVar == studentsData[0].semesters[1].semesterObtainedMarks) {
//             for (let key1 in semesterVar) {
//                 for (let key2 in semesterVar[key1]) {
//                     studentsData[0].semesterResult[1].semesterTotalMarks += semesterVar[key1][key2];
//                 }
//             }
//         }

//         if (semesterVar == studentsData[0].semesters[2].semesterObtainedMarks) {
//             for (let key1 in semesterVar) {
//                 for (let key2 in semesterVar[key1]) {
//                     studentsData[0].semesterResult[2].semesterTotalMarks += semesterVar[key1][key2];
//                 }
//             }
//         }

//         if (semesterVar == studentsData[0].semesters[3].semesterObtainedMarks) {
//             for (let key1 in semesterVar) {
//                 for (let key2 in semesterVar[key1]) {
//                     studentsData[0].semesterResult[3].semesterTotalMarks += semesterVar[key1][key2];
//                 }
//             }
//         }

//         if (semesterVar == studentsData[0].semesters[4].semesterObtainedMarks) {
//             for (let key1 in semesterVar) {
//                 for (let key2 in semesterVar[key1]) {
//                     studentsData[0].semesterResult[4].semesterTotalMarks += semesterVar[key1][key2];
//                 }
//             }
//         }
//     }
// }
// getSubjectsMark1()


let semesterVar;

let semArr;





function getSubjectsTotalMarks(index, semester) {
    for (let i = 0; i < studentsData[0].semesters.length; i++) {

        studentsData[0].semesterResult[i].semesterTotalMarks = 0;

        semesterVar = studentsData[0].semesters[i].semesterObtainedMarks;

        if (semesterVar == studentsData[0].semesters[i].semesterObtainedMarks) {
            for (let key1 in semesterVar) {
                for (let key2 in semesterVar[key1]) {
                    studentsData[0].semesterResult[i].semesterTotalMarks += semesterVar[key1][key2];
                }
            }
        }





        semArr = studentsData[0].semesters[i];

        if(semArr == studentsData[0].semesters[0]){
            for (let key1 in semArr.semesterObtainedMarks[index]) {
                return semArr.semesterObtainedMarks[index][key1]
            }
        }


    }
}
getSubjectsTotalMarks()





let totalMarks = 100;





let semesterTotalMarksVar = [
    studentsData[0].semesterResult[0].semesterTotalMarks,
    studentsData[0].semesterResult[1].semesterTotalMarks,
    studentsData[0].semesterResult[2].semesterTotalMarks,
    studentsData[0].semesterResult[3].semesterTotalMarks,
    studentsData[0].semesterResult[4].semesterTotalMarks,
]

for (let i = 0; i < studentsData[0].semesterResult.length; i++) {
    studentsData[0].semesterResult[i].semesterPercentage = semesterTotalMarksVar[i] / sumOfTotalMarks * 100;
}


let semesterPercentageVar = [
    studentsData[0].semesterResult[0].semesterPercentage,
    studentsData[0].semesterResult[1].semesterPercentage,
    studentsData[0].semesterResult[2].semesterPercentage,
    studentsData[0].semesterResult[3].semesterPercentage,
    studentsData[0].semesterResult[4].semesterPercentage,
]

console.log(studentsData);
console.log(semesterTotalMarksVar);
console.log(semesterPercentageVar);


function gradeMarker() {
    for (let i = 0; i < semesterPercentageVar.length; i++) {

        if (semesterPercentageVar[i] >= 90) {
            studentsData[0].semesterResult[i].grade = "A+";
        }
        else if (semesterPercentageVar[i] >= 80) {
            studentsData[0].semesterResult[i].grade = "A";
        }
        else if (semesterPercentageVar[i] >= 70) {
            studentsData[0].semesterResult[i].grade = "B";
        }
        else if (semesterPercentageVar[i] >= 60) {
            studentsData[0].semesterResult[i].grade = "C";
        }
        else if (semesterPercentageVar[i] >= 50) {
            studentsData[0].semesterResult[i].grade = "D";
        }
        else {
            studentsData[0].semesterResult[i].grade = "Fail";
        }

    }
}
gradeMarker()

for (let i = 0; i < studentsData[0].semesterResult.length; i++) {
    console.log(studentsData[0].semesterResult[i].grade)
}


let reportCard = document.getElementById("reportCard");

const createSemesterReportCardHTMLThroughMap = () => {
    let studentsDataMapReturn = studentsData.map((data, index) => {
        return `
                <h3 class="semester-heading">${data.semesterResult[index].semesterName}</h3>
                    <table>
                        <tr>
                            <th>Subjects</th>
                            <th>Obtained Mark</th>
                            <th>Total Marks</th>
                        </tr>
                        <tr>
                            <th>English</th>
                            <td>${getSubjectsTotalMarks(0, data.semesterResult[index].semesterName)}</td>
                            <td>${totalMarks}</td>
                        </tr>
                        <tr>
                            <th>Urdu</th>
                            <td>${getSubjectsTotalMarks(1, data.semesterResult[index].semesterName)}</td>
                            <td>${totalMarks}</td>
                        </tr>
                        <tr>
                            <th>Math</th>
                            <td>${getSubjectsTotalMarks(2, data.semesterResult[index].semesterName)}</td>
                            <td>${totalMarks}</td>
                        </tr>
                        <tr>
                            <th>Islamiat</th>
                            <td>${getSubjectsTotalMarks(3, data.semesterResult[index].semesterName)}</td>
                            <td>${totalMarks}</td>
                        </tr>
                            <th>Computer</th>
                            <td>${getSubjectsTotalMarks(4, data.semesterResult[index].semesterName)}</td>
                            <td>${totalMarks}</td>
                        </tr>
                    </table>
                    <table>
                        <tr class="last-table">
                            <th>Total Obtained Marks</th>
                            <td>${data.semesterResult[index].semesterTotalMarks} / ${sumOfTotalMarks}</td>
                        </tr>
                        <tr class="last-table">
                            <th>Percentage</th>
                            <td>${data.semesterResult[index].semesterPercentage}%</td>
                        </tr>
                        <tr class="last-table">
                            <th>Grade</th>
                            <td>${data.semesterResult[index].grade}</td>
                        </tr>
                    </table>`
    });


    reportCard.innerHTML = studentsDataMapReturn.join("");
}

createSemesterReportCardHTMLThroughMap();