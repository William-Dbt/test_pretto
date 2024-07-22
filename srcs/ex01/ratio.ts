import { rho } from "../utils/formulas";

const f_sharePrecision: number = 0.001;

/**
 * Get the value of a mensuality for a classic loan
 * 
 * @param m			mensuality of the loan
 * @param rate		rate of the loan in percent
 * @param duration	duration in month
 * @returns			result of the formula (m = m / rho(rate, duration))
 */
function	getFirstLoanAmount(m: number, rate: number, duration: number) {
	return (m / rho(rate, duration));
}

/**
 * Get the value of a mensuality for a double line loan
 * 
 * @param m1		mensuality of first loan
 * @param duration1	duration of first loan in months
 * @param m2 		mensuality of second loan
 * @param rate2		rate of second loan in percent
 * @param duration2	duration of second loan in months
 * @returns			result of the formula (m = m2 / rho(rate2, duration2) - m1 / rho(rate2, duration1))
 */
function	getSecondLoanAmount(m1: number, duration1: number, m2: number, rate2: number, duration2: number) {
	return ((m2 / rho(rate2, duration2)) - (m1 / rho(rate2, duration1)));
}

/**
 * 
 * @param M1	amount of first loan
 * @param M2	amount of second loan
 * @returns 	ratio of both loans where M1 is part of the second loan where M2 will be minimize at the minimum
 */
function	getRatio(M1: number, M2: number) {
	return (M1 / (M1 + M2));
}

export function	ratio(rate1: number, duration1: number, rate2: number, duration2: number) {
	let f_firstMonthlyShareAmount: number = f_sharePrecision,
		f_firstLoanAmount: number;

	let f_secondMonthlyShareAmount: number,
		f_secondLoanAmount: number;

	let	f_bestRatio: number = 0.0,
		f_bufferRatio: number = 0.0;

	while (f_firstMonthlyShareAmount < 1) {
		f_secondMonthlyShareAmount = 1 - f_firstMonthlyShareAmount;
		f_firstLoanAmount = getFirstLoanAmount(f_firstMonthlyShareAmount, rate1, duration1);
		f_secondLoanAmount = getSecondLoanAmount(f_firstMonthlyShareAmount,
												 duration1,
												 f_secondMonthlyShareAmount,
												 rate2,
												 duration2);

		f_bufferRatio = getRatio(f_firstLoanAmount, f_secondLoanAmount);
		if (f_bufferRatio > f_bestRatio)
			f_bestRatio = f_bufferRatio;

		f_firstMonthlyShareAmount += f_sharePrecision;
	}
	return f_bestRatio;
}

console.log(ratio(1.15, 180, 1.8, 300));
