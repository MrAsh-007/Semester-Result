



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
            semester2ObtainedMarks: {
                oop: 82,
                dataStructures: 76,
                linearAlgebra: 68,
                digitalLogicDesign: 74,
                softwareEngineeringIntro: 79,
            },
            semester3ObtainedMarks: {
                databaseSystems: 85,
                operatingSystems: 77,
                algorithms: 73,
                webEngineering: 81,
                probabilityStats: 70,
            },
            semester4ObtainedMarks: {
                softwareArchitecture: 80,
                computerNetworks: 75,
                artificialIntelligence: 72,
                hci: 78,
                informationSecurity: 74,
            },
            semester5ObtainedMarks: {
                softwareProjectManagement: 83,
                sqa: 79,
                mobileAppDevelopment: 86,
                cloudComputing: 81,
                finalYearProject: 90,
            },
        },
        semester1result: {
            semester1TotalMarks : 0,
            semester1Percentage : 0
        },
        semester2result: {
            semester2TotalMarks : 0,
            semester2Percentage : 0
        },
        semester3result: {
            semester3TotalMarks : 0,
            semester3Percentage : 0
        },
        semester4result: {
            semester4TotalMarks : 0,
            semester4Percentage : 0
        },
        semester5result: {
            semester5TotalMarks : 0,
            semester5Percentage : 0
        },
    },
];




let semestersDefaultData = {
    semester1 : {},
//     semester2 : {},
//     semester3 : {},
//     semester4 : {},
//     semester5 : {},
}

let defaultvar1 = studentsData[0].semesters.semester1ObtainedMarks;
semestersDefaultData.semester1 = defaultvar1
// semestersDefaultData.semester1 = studentsData[0].semesters.semester1ObtainedMarks;
// semestersDefaultData.semester2 = studentsData[0].semesters.semester2ObtainedMarks;
// semestersDefaultData.semester3 = studentsData[0].semesters.semester3ObtainedMarks;
// semestersDefaultData.semester4 = studentsData[0].semesters.semester4ObtainedMarks;
// semestersDefaultData.semester5 = studentsData[0].semesters.semester5ObtainedMarks;


for(let key in semestersDefaultData.semester1){
    semestersDefaultData.semester1[key] = 100
}

// for(let key in semestersDefaultData.semester2){
//     semestersDefaultData.semester2[key] = 100
// }

// for(let key in semestersDefaultData.semester3){
//     semestersDefaultData.semester3[key] = 100
// }

// for(let key in semestersDefaultData.semester4){
//     semestersDefaultData.semester4[key] = 100
// }

// for(let key in semestersDefaultData.semester5){
//     semestersDefaultData.semester5[key] = 100
// }



// let semester1var = studentsData[0].semesters.semester1ObtainedMarks;
// let semester1TotalMarks = studentsData[0].semester1TotalMarks;
// let total1 = 0;

// for(let key in semester1var){
//     total1 += semester1var[key];
//     semester1TotalMarks = total1;
// }





// let semester2var = studentsData[0].semesters.semester2ObtainedMarks;
// let semester2TotalMarks = studentsData[0].semester2TotalMarks;
// let total2 = 0;

// for(let key in semester2var){
//     total2 += semester2var[key];
//     semester2TotalMarks = total2;
// }




// let semester3var = studentsData[0].semesters.semester3ObtainedMarks;
// let semester3TotalMarks = studentsData[0].semester3TotalMarks;
// let total3 = 0;

// for(let key in semester3var){
//     total3 += semester3var[key];
//     semester3TotalMarks = total3;
// }





// let semester4var = studentsData[0].semesters.semester4ObtainedMarks;
// let semester4TotalMarks = studentsData[0].semester4TotalMarks;
// let total4 = 0;

// for(let key in semester4var){
//     total4 += semester4var[key];
//     semester4TotalMarks = total4;
// }



// let semester5var = studentsData[0].semesters.semester5ObtainedMarks;
// let semester5TotalMarks = studentsData[0].semester5TotalMarks;
// let total5 = 0;

// for(let key in semester5var){
//     total5 += semester5var[key];
//     semester5TotalMarks = total5;
// }





console.log(studentsData)
// console.log(semestersDefaultData)

//   {
//     name: "Ahmed",
//     id: "SE-102",
//     semesters: {
//       semester1: {
//         programmingFundamentals: 65,
//         ict: 68,
//         calculus: 62,
//         discreteMath: 66,
//         computerBasics: 70,
//       },
//       semester2: {
//         oop: 72,
//         dataStructures: 69,
//         linearAlgebra: 64,
//         digitalLogicDesign: 67,
//         softwareEngineeringIntro: 71,
//       },
//       semester3: {
//         databaseSystems: 74,
//         operatingSystems: 70,
//         algorithms: 66,
//         webEngineering: 73,
//         probabilityStats: 68,
//       },
//       semester4: {
//         softwareArchitecture: 72,
//         computerNetworks: 69,
//         artificialIntelligence: 67,
//         hci: 71,
//         informationSecurity: 70,
//       },
//       semester5: {
//         softwareProjectManagement: 75,
//         sqa: 72,
//         mobileAppDevelopment: 78,
//         cloudComputing: 74,
//         finalYearProject: 82,
//       },
//     },
//   },

//   {
//     name: "Usman",
//     id: "SE-103",
//     semesters: {
//       semester1: {
//         programmingFundamentals: 88,
//         ict: 80,
//         calculus: 78,
//         discreteMath: 82,
//         computerBasics: 85,
//       },
//       semester2: {
//         oop: 86,
//         dataStructures: 84,
//         linearAlgebra: 76,
//         digitalLogicDesign: 81,
//         softwareEngineeringIntro: 83,
//       },
//       semester3: {
//         databaseSystems: 88,
//         operatingSystems: 82,
//         algorithms: 80,
//         webEngineering: 85,
//         probabilityStats: 78,
//       },
//       semester4: {
//         softwareArchitecture: 84,
//         computerNetworks: 81,
//         artificialIntelligence: 79,
//         hci: 83,
//         informationSecurity: 80,
//       },
//       semester5: {
//         softwareProjectManagement: 87,
//         sqa: 85,
//         mobileAppDevelopment: 90,
//         cloudComputing: 88,
//         finalYearProject: 92,
//       },
//     },
//   },

//   {
//     name: "Hamza",
//     id: "SE-104",
//     semesters: {
//       semester1: {
//         programmingFundamentals: 70,
//         ict: 66,
//         calculus: 64,
//         discreteMath: 68,
//         computerBasics: 72,
//       },
//       semester2: {
//         oop: 74,
//         dataStructures: 71,
//         linearAlgebra: 67,
//         digitalLogicDesign: 70,
//         softwareEngineeringIntro: 73,
//       },
//       semester3: {
//         databaseSystems: 76,
//         operatingSystems: 72,
//         algorithms: 70,
//         webEngineering: 74,
//         probabilityStats: 69,
//       },
//       semester4: {
//         softwareArchitecture: 73,
//         computerNetworks: 71,
//         artificialIntelligence: 68,
//         hci: 72,
//         informationSecurity: 70,
//       },
//       semester5: {
//         softwareProjectManagement: 76,
//         sqa: 74,
//         mobileAppDevelopment: 78,
//         cloudComputing: 75,
//         finalYearProject: 80,
//       },
//     },
//   },

//   {
//     name: "Bilal",
//     id: "SE-105",
//     semesters: {
//       semester1: {
//         programmingFundamentals: 60,
//         ict: 62,
//         calculus: 58,
//         discreteMath: 61,
//         computerBasics: 64,
//       },
//       semester2: {
//         oop: 65,
//         dataStructures: 63,
//         linearAlgebra: 60,
//         digitalLogicDesign: 62,
//         softwareEngineeringIntro: 66,
//       },
//       semester3: {
//         databaseSystems: 68,
//         operatingSystems: 65,
//         algorithms: 63,
//         webEngineering: 67,
//         probabilityStats: 62,
//       },
//       semester4: {
//         softwareArchitecture: 66,
//         computerNetworks: 64,
//         artificialIntelligence: 61,
//         hci: 65,
//         informationSecurity: 63,
//       },
//       semester5: {
//         softwareProjectManagement: 69,
//         sqa: 67,
//         mobileAppDevelopment: 71,
//         cloudComputing: 68,
//         finalYearProject: 75,
//       },
//     },
//   },
// ];

