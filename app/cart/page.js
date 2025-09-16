'use client';
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';
import OrderSummary from '@/components/OrderCheckout';


export default function CartPage() {
  const {cart} = useCart()
  return (
    <section className="space-y-6 px-10 py-5">
      <header className="bg-white rounded-xl text-gray-700 border border-gray-200 p-6">
        <h1 className="text-2xl font-bold">Cart</h1>
      </header>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 space-y-4">
          {cart?.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
        
        <div className="lg:col-span-1">
          <OrderSummary />
        </div>

      </div>
    </section>
  );
}
