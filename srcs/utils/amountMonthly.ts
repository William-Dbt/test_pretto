/**
 * Calculate the amount of a monthly payment for a given loan with a rate, a term and an amount
 * 
 * @param rate		in percent
 * @param duration	in months
 * @param amount	as number
 * @returns @number	the amount of a monthly payment
 */
export default function amountMonthly(rate: number, duration: number, amount: number) {
	rate = (rate / 100) / 12;

	return (amount * (rate / (1 - Math.pow(1 + rate, -duration))));
}
