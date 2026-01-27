// // console.log(5 & 2);
// // console.log(9 & 3);

// // let Data = null ?? "Optimal_Solution";
// // console.log(Data);
// // L = 3;
// // if (L == 2) {
// //   console.log("Dont trouble the Troble");
// // } else if (L == 1) {
// //   console.log("if trouble Troubles You");
// // } else {
// //   console.log("I am Not the Trouble i am The Truth");
// // }

// // var Age = 45;
// // if (Age>=18 && Age<=70) {
// //   console.log("Entry Allowed");
// //   if (Age>=40 && Age<=60) {
// //     console.log("Only Soft Drinks Allowed");
// //   }

// // }

// // if (Age < 18) {
// //   console.log("No Entry");
// // }

// let Day = 1;
// switch (Day) {
//   case 1:
//     console.log("Dont Trouble The trouble");
//   case 2:
//     console.log("If You Trouble the Trouble");
//   case 3:
//     console.log("Trouble Troubles You");
//   case 4:
//     console.log("I am Not The Trouble ");
//   case 6:
//     console.log("whdden sisiisis");
// }
// // Eligibility if it is Marks >35 and attendence >80
// Grade section 90 to 100 a+ 75 89 A 60 74 B 35 59 c
// Third Section ScolorShip Only if Grade A+ OR A  Famil inCome Should be Less than 200000 then Fully Internship
// Ebven tgough he has A+ a if Family Income less than 400000 half Scolorship
//
let Income = 10000000;
let Marks = 70;
let Attendence = 98;
if (Marks >= 35 && Attendence >= 80) {
  if (Marks >= 90 || (Marks < 90 && Marks > 74)) {
    if (Marks >= 90) {
      console.log("Print HE GOT A+");
    }
    if (Marks < 90 && Marks > 74) {
      console.log("He got A");
    }
    if (Income <= 200000) {
      console.log("HE gOt Scolorship");
    } else if (Income > 200000 && Income < 400000) {
      console.log("He Will get Half Inership");
    } else if (Income > 400000) {
      console.log("No Scoloshipo");
    }
  } else if (Marks < 74 && Marks > 35) {
    console.log("He will Get B");
  } else {
    console.log("He Will get C");
  }
} else {
  console.log("He Is Fail");
}
