
'use client';

import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function ProductActions({ product }) {
  const { addToCart, removeFromCart, isInCart, updateQuantity } = useCart();
  const {addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id)

  const handleAddToCart = () => {
    if(!inCart){
      addToCart(product);
    }
    else{
      removeFromCart(product.id);
    } 

  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="mt-8 space-y-4">
      <button
        onClick={handleAddToCart}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition ${
          inCart 
            ? 'bg-green-500 text-white' 
            : 'bg-[#06b6b6] hover:bg-[#059999] text-white'
        }`}
      >
        {inCart ? '✓ Added to Cart!' : 'Add to Cart'}
      </button>

      <button
        onClick={handleWishlist}
        className={`w-full py-3 px-6 rounded-lg font-semibold border-2 transition ${
          inWishlist
            ? 'border-red-500 text-red-500 hover:bg-red-50'
            : 'border-[#06b6b6] text-[#06b6b6] hover:bg-[#06b6b6] hover:text-white'
        }`}
      >
        {inWishlist ? '💔 Remove from Wishlist' : '❤️ Add to Wishlist'}
      </button>
    </div>
  );
}