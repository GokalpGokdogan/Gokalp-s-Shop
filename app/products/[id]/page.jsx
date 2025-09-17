import { api } from '@/lib/api';
import { notFound } from 'next/navigation';
import ProductActions from './ProductActions';

export default async function ProductPage({ params: paramsPromise }) {
  try {
    const params = await paramsPromise;
    const { data: product } = await api.get(`/products/${params.id}`);
    if (!product) {
      notFound();
    }

    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <span className="px-3 py-1 text-sm font-medium text-white bg-[#06b6b6] rounded-full">
              {product.category}
            </span>
            
            <h1 className="text-3xl font-bold text-gray-900 mt-4">
              {product.title}
            </h1>
            
            <p className="text-4xl font-bold text-[#06b6b6] mt-4">
              ${product.price.toFixed(2)}
            </p>
            
            <p className="text-gray-600 mt-6 leading-relaxed">
              {product.description}
            </p>

            <ProductActions product={product} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    // console.error('Error fetching product:', error);
    notFound();
  }
}