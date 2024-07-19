import amountMonthly from "./utils/amountMonthly"
import amountInterests from "./ex00_amountInterests"

console.log(amountMonthly(1.15, 180, 140000));
console.log(amountMonthly(1.8, 300, 160000));
console.log(amountInterests(1.15, 180, 140000));
console.log(amountInterests(1.8, 180, 160000));