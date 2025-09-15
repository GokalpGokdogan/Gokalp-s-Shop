import ShopItem from '@/components/ShopItem';
import { api } from '@/lib/api';

export const metadata = { title: 'Products' };

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const { data: products } = await api.get('/products'); 

  return (
    <section className="space-y-6 px-10 py-5">
      <header className="bg-white rounded-xl text-gray-700 border border-gray-200 p-6">
        <h1 className="text-2xl font-bold">Products</h1>
      </header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products?.map((p) => <ShopItem key={p.id} product={p} />)}
      </div>
    </section>
  );
}
