import amountInterests from "./ex00/amountInterests";
import { findLessInterests, findLessInterestsByAmounts } from "./ex02/lessInterests";

console.log("------------------------------");
console.log("- Tests for ex00\n");

console.log("First test based on the file in ../docs folder\n");

console.log("Client want a loan of 500000€ by 1.1% rate on 30 years");
console.log("The interests of the loan is :", amountInterests(1.1, 360, 500000), "€\n");

console.log("Same thing with a rate of 4.9");
console.log("The interests of the loan is :", amountInterests(4.9, 360, 500000), "€\n");

console.log("Some errors case :\n");

console.log("Invalid rate:");
amountInterests(-1, 300, 500000);

console.log("\nInvalid duration:");
amountInterests(1.1, 0, 500000);

console.log("\nNot enough amount");
amountInterests(1.1, 300, 9999);

console.log("\n------------------------------\n");

console.log("- Tests for ex01\n");

console.log(".....");

console.log("\n------------------------------\n");
console.log("- Tests for ex02\n");

let bestInterests;

console.log("For this tests, if you want to change the array containing the rates and duration possible for loans, please go to the file srcs/ex02/flessInterests.ts");
console.log("The array is at the top of the file as const, once modified, don't forget to save and recompile with ./compileFiles.sh\n");

console.log("For this exercice, please check the file srcs/ex02/walkthrough.txt, it explains the results of the functions\n");

console.log("For a loan of 300000€ on 25 years, let's find the lowest interests possible by finding the amount of both loans ranging from 1000 to the amount of the loan\n");

bestInterests = findLessInterests(25, 300000)!;
console.log("First loan", bestInterests.first);
console.log("Second loan", bestInterests.second);
console.log("Total interests", bestInterests.interests.toFixed(2), "€\n");

console.log("We can see, as explained in the walkthrough, if we search without a limit on both loans, the values will be the limits possibles for both loans (1000 and 'amount - 1000')");
console.log("We can do the same by giving the value of both loans and the result will be the same, the duration of the first loan will be the duration where the rate is at the minimum\n");

bestInterests = findLessInterestsByAmounts(25, 160000, 140000)!;
console.log("First loan", bestInterests.first);
console.log("Second loan", bestInterests.second);
console.log("Total interests", bestInterests.interests.toFixed(2), "€\n");

console.log("------------------------------");
