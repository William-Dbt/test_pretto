# 🖱 Technical Test | Pretto - Software Engineer

## Description

This repository will be only used to show my answers to managers of Pretto for an internship offer.  

## Usage

Be sure to have installed node.js on your computer. Then, launch the compileFiles.sh script to compile my files from typescript to javascript (please be sure you have typescript package installed)  
The script will execute the main.ts(js) file to print some tests that I did.  
If you want to execute a particular file, just type `node nameOfTheFile.js`  

## Content

Questions are sorted in folders in the order of the subject  
You can find the answers in srcs/ folder  
Each exXX/ folder contains a walkthrough.txt file, it explains what I thought when I was doing the exercices (or trying to do)  

***ex00***:  
	question: pour un prêt donné (taux, durée et montant), calculer le molntant des intérêts  
	file: amountInterests.ts

***ex01***:  
	question: chercher la formule déterminant la part maximale du montant emprunté pouvant être mis sur la ligne courte (on admettra que le montant max est atteint quand la mensualité de la ligne longue pendant la Période 1 ne permet que de rembourser ses intérêts); Pour la suite de l'exercice on peut appeler cette fonction ratio(taux1, durée1, taux2, durée2)  
	file: //

***ex01***:  
	question: chercher les intérêts les plus faibles parmi toutes les combinaisons possibles pour une durée du prêt total fixé  
	file: lessInterests.ts

***utils folder***:
	You'll find in this folder a file that contains the formulas given by the subject that are usefull to do the exercices.  
	file: formulas.ts
