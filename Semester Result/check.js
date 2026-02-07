let studentsData = [
    {
        name: "Ali",
        id: "SE-101",
        semesters: [
            {
                semesterObtainedMarks: {
                    programmingFundamentals: 78,
                    ict: 72,
                    calculus: 70,
                    discreteMath: 75,
                    computerBasics: 80,
                }
            },
            {
                semesterObtainedMarks: {
                    oop: 82,
                    dataStructures: 76,
                    linearAlgebra: 68,
                    digitalLogicDesign: 74,
                    softwareEngineeringIntro: 79,
                }
            },
            {
                semesterObtainedMarks: {
                    databaseSystems: 85,
                    operatingSystems: 77,
                    algorithms: 73,
                    webEngineering: 81,
                    probabilityStats: 70,
                }
            },
            {
                semesterObtainedMarks: {
                    softwareArchitecture: 80,
                    computerNetworks: 75,
                    artificialIntelligence: 72,
                    hci: 78,
                    informationSecurity: 74,
                }
            },
            {
                semesterObtainedMarks: {
                    softwareProjectManagement: 83,
                    sqa: 79,
                    mobileAppDevelopment: 86,
                    cloudComputing: 81,
                    finalYearProject: 90,
                }
            }
        ],
        semesterresult: [
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








let semestervar = 0;

function randomone() {
    for (let i = 0; i < studentsData[0].semesters.length; i++) {

        semestervar = studentsData[0].semesters[i].semesterObtainedMarks;

        if (semestervar == studentsData[0].semesters[0].semesterObtainedMarks) {
            for (let key in semestervar) {
                studentsData[0].semesterresult[0].semesterTotalMarks += semestervar[key];
            }
        }
        if (semestervar == studentsData[0].semesters[1].semesterObtainedMarks) {
            for (let key in semestervar) {
                studentsData[0].semesterresult[1].semesterTotalMarks += semestervar[key];
            }
        }
        if (semestervar == studentsData[0].semesters[2].semesterObtainedMarks) {
            for (let key in semestervar) {
                studentsData[0].semesterresult[2].semesterTotalMarks += semestervar[key];
            }
        }
        if (semestervar == studentsData[0].semesters[3].semesterObtainedMarks) {
            for (let key in semestervar) {
                studentsData[0].semesterresult[3].semesterTotalMarks += semestervar[key];
            }
        }
        if (semestervar == studentsData[0].semesters[4].semesterObtainedMarks) {
            for (let key in semestervar) {
                studentsData[0].semesterresult[4].semesterTotalMarks += semestervar[key];
            }
        }
    }
}
randomone()

let totalMarks = 100;





let semesterTotalMarksVar = [
    studentsData[0].semesterresult[0].semesterTotalMarks,
    studentsData[0].semesterresult[1].semesterTotalMarks,
    studentsData[0].semesterresult[2].semesterTotalMarks,
    studentsData[0].semesterresult[3].semesterTotalMarks,
    studentsData[0].semesterresult[4].semesterTotalMarks,
]

for (let i = 0; i < studentsData[0].semesterresult.length; i++) {
    studentsData[0].semesterresult[i].semesterPercentage = semesterTotalMarksVar[i] / sumOfTotalMarks * 100;
}


let semesterPercentageVar = [
    studentsData[0].semesterresult[0].semesterPercentage,
    studentsData[0].semesterresult[1].semesterPercentage,
    studentsData[0].semesterresult[2].semesterPercentage,
    studentsData[0].semesterresult[3].semesterPercentage,
    studentsData[0].semesterresult[4].semesterPercentage,
]

console.log(studentsData);
console.log(semesterTotalMarksVar);
console.log(semesterPercentageVar);


function gradeMarker() {
  for (let i = 0; i < semesterPercentageVar.length; i++) {

    if (semesterPercentageVar[i] >= 90) {
      studentsData[0].semesterresult[i].grade = "A+";
    } 
    else if (semesterPercentageVar[i] >= 80) {
      studentsData[0].semesterresult[i].grade = "A";
    } 
    else if (semesterPercentageVar[i] >= 70) {
      studentsData[0].semesterresult[i].grade = "B";
    } 
    else if (semesterPercentageVar[i] >= 60) {
      studentsData[0].semesterresult[i].grade = "C";
    } 
    else if (semesterPercentageVar[i] >= 50) {
      studentsData[0].semesterresult[i].grade = "D";
    } 
    else {
      studentsData[0].semesterresult[i].grade = "Fail";
    }

  }
}
gradeMarker()

for(let i = 0; i < studentsData[0].semesterresult.length; i++){
    console.log(studentsData[0].semesterresult[i].grade)
}


let rightContainer = document.getElementById("rightContainer");

const createSemesterReportCardHTMLThroughMap = () => {
    let studentsDataMapReturn = studentsData.map((data) => {
        return `<h3 class="semester-heading">${data.semesterresult.semesterName}</h3>
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
                            <td>${data.semesterresult[0].semesterTotalMarks} / ${sumOfTotalMarks}</td>
                        </tr>
                        <tr>
                            <th>Percentage</th>
                            <td>${data.semesterresult[0].semesterPercentage}%</td>
                        </tr>
                        <tr>
                            <th>Grade</th>
                            <td>${data.semesterresult[0].grade}</td>
                        </tr>
                    </table>
                </div>`
    });

    rightContainer.innerHTML = studentsDataMapReturn;
}

createSemesterReportCardHTMLThroughMap();