export type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	stock: number;
	quantity: number;
	cover: string;
	categories?: any[];
	createdAt?: Date;
	updatedAt?: Date;
};

export const list: Product[] = [
	{
		id: '1',
		name: 'Keychron Gaming Keyboard',
		description: '',
		price: 3000,
		stock: 10,
		cover: '/images/keyboard.png',
		quantity: 1,
	},
	{
		id: '2',
		name: 'Laptop and tablet stand',
		description: '',
		price: 750,
		stock: 7,
		cover: '/images/laptop-and-tablet-stand.png',
		quantity: 1,
	},
	{
		id: '3',
		name: 'ZZ plant',
		description: '',
		price: 35,
		stock: 9,
		cover: '/images/zz-plant.png',
		quantity: 1,
	},
	{
		id: '4',
		name: 'Monstera',
		description: '',
		price: 235,
		stock: 20,
		cover: '/images/monstera.png',
		quantity: 1,
	},
];
