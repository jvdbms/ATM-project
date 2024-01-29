import inquirer from "inquirer";
const answers1 = await inquirer.prompt([
    {
        type: "input",
        name: "UserID",
        message: "Kindly enter your UserID",
    },
    {
        type: "input",
        name: "UserPIN",
        message: "Kindly enter your UserPIN",
    },
    {
        type: "list",
        name: "TransactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Kindly enter your TransactionType",
    },
    {
        type: "list",
        name: "AcountType",
        choices: ["Saving", "Current"],
        message: "Kindly enter your AccountType",
    },
    {
        type: "list",
        name: "Amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Kindly enter your Amount",
    },
    {
        type: "list",
        name: "Amount",
        message: "Kindly enter your Amount",
    },
]);
if (answers1.userID && answers1.userPIN) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers1.Amount;
    if (balance > EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Your Remaining Balance is:", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
// interface ansType{
//     userID: string,
//     userPIN: number,
//     TransactionType: string,
//     AcountType: string,
//     Amount: number
// }
// const answers : ansType = await inquirer.prompt([
//     {
//         type: "input",
//         name: "UserID",
//         choices: ["Abeera","Abeera Javaid", "Abeera  Ramla Javaid"],
//         message: "Kindly enter your UserID",
//     },
//     {
//         type: "input",
//         name: "UserPIN",
//         choices: [7 , 1 , 2012],
//         message: "Kindly select your UserPIN",
//     },
//     {
//       type: "list",
//       name: "TransactionType",
//       choices: ["Fast Cash", "Withdraw"],
//       message: "Kindly selecy  your TransactionType",
//       when (answers) {
//           return answers.accountType
//       }
//     },
//     {
//         type: "list",
//         name: "AcountType",
//         choices: ["Saving", "Current"],
//         message: "Kindly select your AccountType",
//     },
//     {
//         type: "list",
//         name: "Amount",
//         choices: [1000000,20000000,300000000,4000000000,500000000,600000000,700000000,800000000,900000000,1000000000],
//         message: "Kindly select your Amount",
//         when (answers) {
//             return answers.TransactionType == 'Fast Cash'
//         },
//     },
//     {
//       type: "list",
//       name: "Amount",
//       message: "Kindly enter your Amount",
//       when (answers) {
//           return answers.TransactionType == "Withdraw"
//       },
//     }
// ])
// if(answers.userID && answers.userPIN) {
// const balance = Math.floor(Math.random() *1000000000);
// console.log(balance);
// const EnteredAmount = answers.Amount;
// if(balance > EnteredAmount) {
//     const remaining = balance - EnteredAmount;
//     console.log("Your Remaining Balance is:",  remaining);
// }else{
//     console.log("Insufficient Balance");
// }
// };
