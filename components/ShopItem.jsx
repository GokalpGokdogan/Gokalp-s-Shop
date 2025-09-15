'use client';
import Link from "next/link";

export default function ShopItem({ product }) {

  return (
    <Link href={`/products/${product.id}`}>
        <div
        className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-[#06b6b6] hover:ring-[#06b6b6] hover:ring-6 hover:ring-offset-0 transition pb-2">
        <div className="relative overflow-hidden">
            <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
            />
            <span
            className="absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white bg-[#06b6b6] rounded-2xl"
            >
            {product.category}
            </span>


            <div className="flex flex-row flex-grow my-2 justify-between mx-3">
                <h3 className="text-lg font-semibold truncate text-gray-700">
                {product.title}
                </h3>

                <p className="text-[#06b6b6] font-bold text-xl">
                ${product.price.toFixed(2)}
                </p>
            </div>

            <p className="text-gray-500 text-sm mt-1 line-clamp-2 mx-3">
            {product.description}
            </p>

        </div>
        </div>
    </Link>
  );
}
