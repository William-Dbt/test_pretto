/**
 * Calculate the amount of a monthly payment for a given loan with a rate, a term and an amount
 * Thanks to the formula : loanAmount * (loanRate / (1 - (1 + loanRate)^-loanDuration))
 * 
 * @param loanRate		in percent
 * @param loanDuration	in months
 * @param loanAmount	as number
 * @returns @number	the amount of a monthly payment
 */
export default function amountMonthly(loanRate: number, loanDuration: number, loanAmount: number) {
	loanRate = (loanRate / 100) / 12;

	return (loanAmount * (loanRate / (1 - Math.pow(1 + loanRate, -loanDuration))));
}
