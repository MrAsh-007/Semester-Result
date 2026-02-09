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




let semesterVar = 0;

function getSubjectsMark2 () {
    for(let j = 0; j < semesterVar.length; j++){
    console.log(semesterVar[j])
    }
}



function getSubjectsMark1() {
    for (let i = 0; i < studentsData[0].semesters.length; i++) {

        semesterVar = studentsData[0].semesters[i].semesterObtainedMarks;
        if (semesterVar == studentsData[0].semesters[i].semesterObtainedMarks) {
            getSubjectsMark2()
            // for (let key in semesterVar) {
            //     studentsData[0].semesterResult[0].semesterTotalMarks += semesterVar[key];
            // }
        }
        // if (semesterVar == studentsData[0].semesters[1].semesterObtainedMarks) {
        //     for (let key in semesterVar) {
        //         studentsData[0].semesterResult[1].semesterTotalMarks += semesterVar[key];
        //     }
        // }
        // if (semesterVar == studentsData[0].semesters[2].semesterObtainedMarks) {
        //     for (let key in semesterVar) {
        //         studentsData[0].semesterResult[2].semesterTotalMarks += semesterVar[key];
        //     }
        // }
        // if (semesterVar == studentsData[0].semesters[3].semesterObtainedMarks) {
        //     for (let key in semesterVar) {
        //         studentsData[0].semesterResult[3].semesterTotalMarks += semesterVar[key];
        //     }
        // }
        // if (semesterVar == studentsData[0].semesters[4].semesterObtainedMarks) {
        //     for (let key in semesterVar) {
        //         studentsData[0].semesterResult[4].semesterTotalMarks += semesterVar[key];
        //     }
        // }
    }
}
getSubjectsMark1()

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


let rightContainer = document.getElementById("rightContainer");

const createSemesterReportCardHTMLThroughMap = () => {
    let studentsDataMapReturn = studentsData.map((data) => {
        return `<h3 class="semester-heading">${data.semesterResult.semesterName}</h3>
                <div class="report-card">
                    <table>
                        <tr>
                            <th>Subjects</th>
                            <th>Obtained Mark</th>
                            <th>Total Marks</th>
                        </tr>
                        <tr>
                            <th>English</th>
                            <td>${data.semesters[0].semesterObtainedMarks.calculus}</td>
                            <td>${totalMarks}</td>
                        </tr>
                        <tr>
                            <th>Urdu</th>
                            <td>${data.semesters[0].semesterObtainedMarks.computerBasics}</td>
                            <td>${totalMarks}</td>
                        </tr>
                        <tr>
                            <th>Math</th>
                            <td>${data.semesters[0].semesterObtainedMarks.discreteMath}</td>
                            <td>${totalMarks}</td>
                        </tr>
                        <tr>
                            <th>Islamiat</th>
                            <td>${data.semesters[0].semesterObtainedMarks.ict}</td>
                            <td>${totalMarks}</td>
                        </tr>
                            <th>Computer</th>
                            <td>${data.semesters[0].semesterObtainedMarks.programmingFundamentals}</td>
                            <td>${totalMarks}</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>Total Obtained Marks</th>
                            <td>${data.semesterResult[0].semesterTotalMarks} / ${sumOfTotalMarks}</td>
                        </tr>
                        <tr>
                            <th>Percentage</th>
                            <td>${data.semesterResult[0].semesterPercentage}%</td>
                        </tr>
                        <tr>
                            <th>Grade</th>
                            <td>${data.semesterResult[0].grade}</td>
                        </tr>
                    </table>
                </div>`
    });

    rightContainer.innerHTML = studentsDataMapReturn;
}

createSemesterReportCardHTMLThroughMap();