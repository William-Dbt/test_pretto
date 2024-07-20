import amountMonthly from "../utils/amountMonthly"
import amountInterests from "../ex00/amountInterests"

// Cette partie fait part de ma refléxion que vous pouvez retrouver dans le fichier "walkthrough.txt"
console.log("Monthly Payment of 1st loan in 15 years:", amountMonthly(1.15, 180, 140000));
console.log("Monthly Payment of 2nd loan in 30 years:", amountMonthly(1.8, 300, 160000));
console.log("----------");
console.log("Amount of interests of 2nd loan in 30 years:", amountInterests(1.8, 300, 160000));