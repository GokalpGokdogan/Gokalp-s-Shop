'use client';

import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <div className="px-2 bg-[#06b6b6] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">Gokalp's</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Store</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/products" className="text-gray-700 hover:text-[#06b6b6] font-medium">
            Products
          </Link>
          
          <Link href="/wishlist" className="text-gray-700 hover:text-[#06b6b6] font-medium">
            Wishlist
          </Link>  
          <Link href="/profile" className="text-gray-700 hover:text-[#06b6b6] font-medium">
            Profile
          </Link>  
          <Link href="/cart" className="relative text-gray-700 hover:text-[#06b6b6] font-medium">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}