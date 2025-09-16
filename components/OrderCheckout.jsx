'use client';

import { useCart } from '@/context/CartContext';

export default function OrderSummary() {
  const { cart, getCartTotal, getCartCount } = useCart();
  
  const total = getCartTotal();

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({getCartCount()} items)</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        
        
        <hr className="border-gray-200" />
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">Total</span>
          <span className="text-xl font-bold text-[#06b6b6]">${total.toFixed(2)}</span>
        </div>
      </div>
      
      <button className="w-full mt-6 bg-[#06b6b6] hover:bg-[#059999] text-white py-3 px-6 rounded-lg font-semibold transition flex items-center justify-center gap-2">
        Proceed to Checkout
      </button>
    </div>
  );
}