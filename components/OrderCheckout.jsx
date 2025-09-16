'use client';

import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { api } from '@/lib/api';

export default function OrderSummary() {
 	
	const router = useRouter();
  const { cart, getCartTotal, getCartCount, clearCart } = useCart();
  const [submitting, setSubmitting] = useState();
  const { user, isAuthenticated } = useAuth();
  
  const total = getCartTotal();

  async function handleCheckout() {

    if (!cart || cart.length === 0 || submitting) 
        return; 


			console.log(user, isAuthenticated)
    if (!isAuthenticated) {
      router.push(`/auth`);
      return;
    }

    try {
      setSubmitting(true);

      const orderPayload = {
        userId: user?.id,
        date: new Date().toISOString(),
        items: cart.map(({ id, title, price, quantity, image }) => ({
          id, title, price, quantity, image,
        })),
        total: Number(total.toFixed(2)),
        status: 'created',
      };

      await api.post('/orders', orderPayload);

      clearCart();

      router.push('/profile');
    } catch (err) {
      console.error('Checkout failed:', err);
      alert('Something went wrong while placing your order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }
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
      
      <button
        onClick={handleCheckout}
        disabled={submitting || cart.length === 0}
        className="w-full mt-6 bg-[#06b6b6] hover:bg-[#059999] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition flex items-center justify-center gap-2"
      >
        {submitting ? 'Processing…' : 'Proceed to Checkout'}
      </button>
    </div>
  );
}