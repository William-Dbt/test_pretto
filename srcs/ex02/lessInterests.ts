import { amountSmoothMonthly } from "../utils/formulas";

// This variable is used to search the best amount of the loans by decreasing and inscreasing the search
const i_differenceAmount: number = 1000;

// This array is used to store the duration and the rates for the loans like a database
const arr_rates: Map<number, number> = new Map<number, number>([
	[10, 4.4],
	[12, 3.2],
	[15, 3.5],
	[20, 3.8],
	[22, 3.8],
	[25, 2.9]
]);

/**
 * This function is used to find the combination of two loan where the client will pay the least interest
 * We'll based our research on the array of rates by duration given below
 * 
 * @param loanDuration	the duration of the loan in year
 * @param loanAmount	the loan amount
 * @returns 
 */
function findLessInterests(loanDuration: number, loanAmount: number) {
	// - Error conditions
	if (!loanDuration || !loanAmount) {
		console.error("[findLessInterests] ERROR: at least one parameter is invalid");
		return undefined;
	}
	if (!arr_rates.get(loanDuration)) {
		console.error("[findLessInterests] ERROR: can't find a rate for this loan duration (", loanDuration, "years)");
		return undefined;
	}
	if (loanAmount < 50000) {
		console.error("[findLessInterests] ERROR: the bank cannot accept a loan for less than 50k€");
		return undefined;
	}
	// --------------------


	// - Variables declaration
	let	bestLoans = {
		first: {
			duration: 0,
			rate: 0,
			amount: 0
		},
		second: {
			duration: loanDuration * 12,
			rate: arr_rates.get(loanDuration)!,
			amount: 0
		},
		interests: 0
	};
	let i_lastBestInterest: number = -1;

	let i_amountFirstLoan: number,
		i_amountSecondLoan: number;
	let	i_amountInterest: number;
	// --------------------

	for (let [duration, rate] of arr_rates) {
		if (duration == loanDuration)
			continue ;

		// change du duration in years to months
		duration *= 12;
		i_amountFirstLoan = loanAmount / 2;
		i_amountSecondLoan = i_amountFirstLoan;
		while (i_amountFirstLoan < loanAmount && i_amountSecondLoan > 0) {
			// To calculate the amount of interest, we calculate the smoothly amount of the loans, multiply them by the duration in months of the loan and substract the result by the amount of the initial loan
			// I = smoothAmount * loanDuration - loanAmount
			i_amountInterest =
				amountSmoothMonthly(
					i_amountFirstLoan, rate, duration,
					i_amountSecondLoan, bestLoans.second.rate, bestLoans.second.duration
				) * (loanDuration * 12) - loanAmount;

			if (i_lastBestInterest == -1 || i_amountInterest < i_lastBestInterest) {
				// We find a better interest for the client, let's save the informations that we need in our object
				bestLoans.first.duration = duration;
				bestLoans.first.rate = rate;
				bestLoans.first.amount = i_amountFirstLoan;

				bestLoans.second.amount = i_amountSecondLoan;

				bestLoans.interests = i_amountInterest;
				i_lastBestInterest = i_amountInterest;
			}
			i_amountFirstLoan += i_differenceAmount;
			i_amountSecondLoan -= i_differenceAmount;
		}
	}
	return bestLoans;
}
