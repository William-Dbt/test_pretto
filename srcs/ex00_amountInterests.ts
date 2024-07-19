// Question :
// Pour un prêt donné (taux, durée et montant), calculer le montant des intérêts

// On sait que, pour calculer le montant des intérêts on doit utiliser la formule suivante :
// Montant Emprunté * Taux annuel / 12

// À partir de là, nous pouvons créer un algorithme où, à chaque itération, nous réduirons une mensualité (qui est fixe) de montant total emprunté
// De sorte que, à chaque n + 1, le montant emprunté sera égal à MontantEmprunté - mensualité
// Cela nous permettra de calculer les intérêts de la banque pour chaque mois, et donc, pour la durée total de l'emprunt
// Additionnons le montant des intérêts calculé à chaque mois avec le précédent pour le revoyer en retour de fonction

import amountMonthly from "./utils/amountMonthly"

function	amountInterests(taux: number, duree: number, montant: number) {
	let f_monthlyRate: number = (taux / 100) / 12;
	let i_monthlyPayment: number = amountMonthly(taux, duree, montant);
	let i_amountInterests: number = 0;
	let i_amountInterestsOnMonth: number = 0;

	while (duree-- > 0) {
		i_amountInterestsOnMonth = montant * f_monthlyRate;
		i_amountInterests += i_amountInterestsOnMonth;
		montant -= i_monthlyPayment - i_amountInterestsOnMonth;
	}
	return Math.round(i_amountInterests);
}
