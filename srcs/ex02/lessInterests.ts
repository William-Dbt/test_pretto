import amountInterets from "../ex00/amountInterests"

let arr_rates = new Map<number, number>([
	[10, 2.9],
	[12, 3.2],
	[15, 3.5],
	[20, 3.8],
	[22, 3.8],
	[25, 4.4]
]);

function findLessInterests(loanDuration: number, loanAmount: number) {
	if (!loanDuration || !loanAmount) {
		console.error("[findLessInterests] ERROR: at least one parameter is invalid");
		return ;
	}
	if (!arr_rates.get(loanDuration)) {
		console.error("[findLessInterests] ERROR: can't find a rate for this loan duration (", loanDuration, ')');
		return ;
	}
}

findLessInterests(30, 300000);
