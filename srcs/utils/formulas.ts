/**
 * Calculate the rate of a loan as monthly rate
 * 
 * @param rate 
 * @returns 
 */
function rateToMonthlyRate(rate: number) {
	return ((rate / 100) / 12);
}

/**
 * Calculate the amount of a monthly payment for a given loan with a rate, a term and an amount
 * Thanks to the formula : loanAmount * (loanRate / (1 - (1 + loanRate)^-loanDuration))
 * 
 * @param loanRate		in percent
 * @param loanDuration	in months
 * @param loanAmount	as number
 * @returns @number	the amount of a monthly payment
 */
export function amountMonthly(loanRate: number, loanDuration: number, loanAmount: number) {
	loanRate = rateToMonthlyRate(loanRate);

	return (loanAmount * (loanRate / (1 - Math.pow(1 + loanRate, -loanDuration))));
}

/**
 * Calculate the amount of a smooth monthly payment thanks to the formula :
 * m = (amount2 + (monthlyPayment1 / rho(rate2, duration1))) * rho(rate2, duration2)
 * 
 * @param rate1 	first loan rate in percent
 * @param duration1 first loan duration in month
 * @param amount2 	second loan amount
 * @param duration2 second loan duration in month
 * @param rate2 	second loan rate in percent
 * @returns @number	the amount of a smooth monthly payment rounded by two decimal
 */
export function amountSmoothMonthly(amount1: number, rate1: number, duration1: number,
										amount2: number, rate2: number, duration2: number)
{
	return ((amount2 + (amountMonthly(rate1, duration1, amount1) / rho(rate2, duration1))) * rho(rate2, duration2));
}

/**
 * Calculate the annuity coefficient thanks by the rate and the duration of the loan given by the formula rho(rate, duration) = rate / (1 - (1 + rate)^-duration)
 * 
 * @param rate		loan rate
 * @param duration	loan duration
 */
export function rho(rate: number, duration: number) {
	rate = rateToMonthlyRate(rate);

	return (rate / (1 - Math.pow(1 + rate, -duration)));
}
