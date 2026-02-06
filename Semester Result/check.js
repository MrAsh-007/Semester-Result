let studentsData = [
    {
        name: "Ali",
        id: "SE-101",
        semesters: {
            semester1ObtainedMarks: {
                programmingFundamentals: 78,
                ict: 72,
                calculus: 70,
                discreteMath: 75,
                computerBasics: 80,
            },
        },
        semester1result: {
            semester1TotalMarks : 0,
            semester1Percentage : 0,
            grade : ""
        },
    },
];

let sumOfTotalMarks = 0;


let totalMarks = 100;

let semestersDefaultData = {
    semester1 : {},
}

let defaultvar1 = JSON.parse(JSON.stringify(studentsData[0].semesters.semester1ObtainedMarks));
semestersDefaultData.semester1 = defaultvar1;


for(let key in defaultvar1){
    defaultvar1[key] = 100;
    sumOfTotalMarks += defaultvar1[key];
}


let semester1var = studentsData[0].semesters.semester1ObtainedMarks;

for(let key in semester1var){
    studentsData[0].semester1result.semester1TotalMarks += semester1var[key];
}

let semester1TotalMarksVar = studentsData[0].semester1result.semester1TotalMarks;

studentsData[0].semester1result.semester1Percentage = semester1TotalMarksVar / sumOfTotalMarks * 100;


let semester1PercentageVar = studentsData[0].semester1result.semester1Percentage;

console.log(studentsData);
console.log(semestersDefaultData);
console.log(semester1TotalMarksVar);
console.log(semester1PercentageVar);


function gradeMarker (){
    if(semester1PercentageVar >= 90){
        return studentsData[0].semester1result.grade = "A+";
    }else if(semester1PercentageVar < 90 && semester1PercentageVar >= 80){
        return studentsData[0].semester1result.grade = "A";
    }else if(semester1PercentageVar < 80 && semester1PercentageVar >= 70){
        return studentsData[0].semester1result.grade = "B";
    }else if(semester1PercentageVar < 70 && semester1PercentageVar >= 60){
        return studentsData[0].semester1result.grade = "C";
    }else if(semester1PercentageVar < 60 && semester1PercentageVar >= 50){
        return studentsData[0].semester1result.grade = "D";
    }else if(semester1PercentageVar < 50 ){
        return studentsData[0].semester1result.grade = "Fail";
    }

}

gradeMarker ()





let rightContainer = document.getElementById("rightContainer");

const createSemesterReportCardHTMLThroughMap = () => {
    const studentsDataMapReturn = studentsData.map((data) => {
        return `<h3 class="semester-heading">Semester 1</h3>
                <div class="report-card">
                    <table>
                        <tr>
                            <th>Subjects</th>
                            <th>Obtained Mark</th>
                            <th>Total Marks</th>
                        </tr>
                        <tr>
                            <th>English</th>
                            <td>${data.semesters.semester1ObtainedMarks.calculus}</td>
                            <td>${totalMarks}</td>
                        </tr>
                        <tr>
                            <th>Urdu</th>
                            <td>${data.semesters.semester1ObtainedMarks.computerBasics}</td>
                            <td>${totalMarks}</td>
                        </tr>
                        <tr>
                            <th>Math</th>
                            <td>${data.semesters.semester1ObtainedMarks.discreteMath}</td>
                            <td>${totalMarks}</td>
                        </tr>
                        <tr>
                            <th>Islamiat</th>
                            <td>${data.semesters.semester1ObtainedMarks.ict}</td>
                            <td>${totalMarks}</td>
                        </tr>
                            <th>Computer</th>
                            <td>${data.semesters.semester1ObtainedMarks.programmingFundamentals}</td>
                            <td>${totalMarks}</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <th>Total Obtained Marks</th>
                            <td>${data.semester1result.semester1TotalMarks} / ${sumOfTotalMarks}</td>
                        </tr>
                        <tr>
                            <th>Percentage</th>
                            <td>${data.semester1result.semester1Percentage}%</td>
                        </tr>
                        <tr>
                            <th>Grade</th>
                            <td>${data.semester1result.grade}</td>
                        </tr>
                    </table>
                </div>`
    });

    rightContainer.innerHTML = studentsDataMapReturn;
}

createSemesterReportCardHTMLThroughMap();