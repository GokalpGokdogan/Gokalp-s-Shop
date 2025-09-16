'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useState } from 'react';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();


  const [ mouseOver, setMouseOver ] = useState(false);


  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromCart(item.id);
  };

	const decreaseCount = (e) => {
		e.preventDefault();
    e.stopPropagation();
		updateQuantity(item.id, item.quantity - 1)
	}

	const increaseCount = (e) => {
		e.preventDefault();
    e.stopPropagation();
		updateQuantity(item.id, item.quantity + 1)
	}

  return (
		<Link href={"products/"+item.id}>
			<div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200"
					onMouseEnter={() => setMouseOver(true)}
					onMouseLeave={() => setMouseOver(false)}>
				<div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
					<img
						src={item.image}
						alt={item.title}
						className="w-full h-full object-cover"
						/>
				</div>

				<div className="flex-1">
					<h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
					<p className="text-[#06b6b6] text-sm font-medium">{item.category}</p>
					<p className="text-gray-600 text-sm mt-1 line-clamp-1">
						{item.description}
					</p>
				</div>

				{mouseOver && (
					<div className="relative w-8 h-8 bg-[#06b6b6] rounded-full flex items-center justify-center">
						<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</div>
				)}

				<div className="flex items-center border border-gray-300 rounded-lg">
					<button
						onClick={decreaseCount}
						className="px-3 py-2 hover:bg-gray-100 text-gray-600"
						>
						-
					</button>
					<span className="px-4 py-2 min-w-[50px] text-center text-gray-500">{item.quantity}</span>
					<button
						onClick={increaseCount}
						className="px-3 py-2 hover:bg-gray-100 text-gray-600"
						>
						+
					</button>
				</div>

				<div className="text-right">
					<p className="text-xl font-bold text-gray-900">
						${(item.price * item.quantity).toFixed(2)}
					</p>
					<p className="text-sm text-gray-500">
						${item.price.toFixed(2)} each
					</p>
				</div>

				<button
					onClick={handleRemove}
					className="ml-2 p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
					>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
					</svg>
				</button>
			</div>
		</Link>
  );
}