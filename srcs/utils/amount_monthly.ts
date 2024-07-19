// On sait aussi que, pour calculer le montant d'une mensualité, nous pouvons utiliser la formule suivante :
// Montant * (taux / (1 - (1 + taux)^-durée))
// Où Montant correspond au montant total emprunté, le taux est exprimé en taux mensuel (taux annuel / 12) et la durée au nombre de mois total pour rembourser le prêt

export default function amountMonthly(taux: number, duree: number, montant: number) {
	taux = (taux / 100) / 12;

	return (montant * (taux / (1 - Math.pow(1 + taux, -duree))));
}
