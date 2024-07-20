import amountMonthly from "../utils/amountMonthly"

/**
 * find the total amount of interests on a loan
 * 
 * @param rate		in percent
 * @param duration	in months
 * @param amount	in euros
 * @returns @number	the rounded value of the total amount of interests
 */
export default function	amountInterests(rate: number, duration: number, amount: number) {
	let f_monthlyRate: number = (rate / 100) / 12;
	let i_monthlyPayment: number = amountMonthly(rate, duration, amount);
	let i_amountInterests: number = 0;
	let i_amountInterestsOnMonth: number = 0;

	while (duration-- > 0) {
		i_amountInterestsOnMonth = amount * f_monthlyRate;
		i_amountInterests += i_amountInterestsOnMonth;
		amount -= i_monthlyPayment - i_amountInterestsOnMonth;
	}
	return Math.round(i_amountInterests);
}
