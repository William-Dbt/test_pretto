import amountMonthly from "../utils/amountMonthly"

/**
 * find the total amount of interests on a loan
 * 
 * @param loanRate		in percent
 * @param loanDuration	in months
 * @param loanAmount	in euros
 * @returns @number		the rounded value of the total amount of interests
 */
export default function	amountInterests(loanRate: number, loanDuration: number, loanAmount: number) {
	let f_monthlyRate: number = (loanRate / 100) / 12;
	let i_monthlyPayment: number = amountMonthly(loanRate, loanDuration, loanAmount);
	let i_amountInterests: number = 0;
	let i_amountInterestsOnMonth: number = 0;

	while (loanDuration-- > 0) {
		i_amountInterestsOnMonth = loanAmount * f_monthlyRate;
		i_amountInterests += i_amountInterestsOnMonth;
		loanAmount -= i_monthlyPayment - i_amountInterestsOnMonth;
	}
	return Math.round(i_amountInterests);
}
