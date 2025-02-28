'use client';

import React from 'react';
import { list, Product } from '@/types/common';
import NextImage from 'next/image';
import { ShoppingBag, Minus, Plus } from 'lucide-react';

function CardContent() {
	const reduceQty = () => {
		console.log('reduce--');
	};

	const increaseQty = () => {
		console.log('increase++');
	};

	const addToCart = () => {
		console.log('add to cart');
	};

	return (
		<div className="container mx-auto py-8 px-24 lg:px-48">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{list.map((product: Product, index: number) => (
					<div key={`${product.name}-${index}`}>
						<div className="card-effect">
							<div className="frame"></div>
							<div className="price">
								{product.price}
								<span className="unit">฿</span>
							</div>
							<div className="product-name py-1 w-full absolute top-0 text-lg font-rubik font-700 text-center text-black drop-shadow-[0_2px_3px_white]">
								{product.name}
							</div>
							<NextImage
								src={product.cover}
								layout="fill" // Makes it responsive
								objectFit="cover"
								priority // Optimizes loading
								alt={product.name}
							/>
							<div className="flex items-center reduce-increase absolute transition">
								<button
									className="h-8 py-1 px-2 bg-red-600 text-white rounded-bl-lg cursor-pointer"
									onClick={() => reduceQty()}>
									<Minus size={20} />
								</button>
								<div className="py-1 px-4 font-600 bg-gray-200 h-8 text-black">{product.quantity}</div>
								<button
									className="bg-teal-600 text-white px-2 h-8 cursor-pointer"
									onClick={() => increaseQty()}>
									<Plus size={20} />
								</button>
								<button
									className="flex flex-1 items-center justify-center gap-1 px-1 py-1 bg-blue-600 text-white cursor-pointer rounded-br-lg hover:bg-blue-700 transition"
									onClick={() => addToCart()}>
									<ShoppingBag size={20} />
									เลือก
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default CardContent;
