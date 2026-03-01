export interface ProductCategory {
    id: number,
    name: string,
    description: string,
}

export const CPU: ProductCategory = {
	id: 1,
	name: "Processeur",
	description: "Le cerveau de l'ordinateur."
}

export const Motherboard: ProductCategory = {
	id: 2,
	name: "Carte mère",
	description: "Le coeur de tout ordinateur."
}

export const RAM: ProductCategory = {
	id: 3,
	name: "Mémoire vive",
	description: "Mémoire utilisée durant l'opération de l'ordinateur."
}

export const Storage: ProductCategory = {
	id: 4,
	name: "Stockage",
	description: "Emplacement de sauvegarde des fichiers."
}

export const GPU: ProductCategory = {
	id: 5,
	name: "Processeur graphique",
	description: "Gère tous les calculs en lien avec les graphismes."
}

export const PSU: ProductCategory = {
	id: 6,
	name: "Alimentation",
	description: "Fourni l'énergie nécessaire pour le fonctionnement de l'ordinateur."
}

export const CPUCooler: ProductCategory = {
	id: 7,
	name: "Refroidisseur de CPU",
	description: "Garde le processeur bien au frais."
}

export const productCategories = [
	CPU,
	Motherboard,
	RAM,
	Storage,
	GPU,
	PSU,
	CPUCooler
] as const;
