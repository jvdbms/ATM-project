"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answers = await inquirer_1.default.prompt([
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
        when(answers) {
            return answers.accountType;
        }
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
        when(answers) {
            return answers.TransactionType == 'Fast Cash';
        },
    },
    {
        type: "list",
        name: "Amount",
        message: "Kindly enter your Amount",
        when(answers) {
            return answers.TransactionType == "Withdraw";
        },
    },
]);
if (answers.userID && answers.userPIN) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.Amount;
    if (balance > EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Your Remaining Balance is:", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
