'use client';
import WishlistItem from '@/components/WishlistItem'
import { useWishlist } from '@/context/WishlistContext';



export default function WishlistPage() {
  const {wishlist} = useWishlist()
  return (
    <section className="space-y-6 px-10 py-5">
      <header className="bg-white rounded-xl text-gray-700 border border-gray-200 p-6">
        <h1 className="text-2xl font-bold">Wishlist</h1>
      </header>


      <div className="lg:col-span-2 space-y-4">
        {wishlist?.map((item) => <WishlistItem key={item.id} item={item} />)}
      </div>
    </section>
  );
}
