import ShopItem from '@/components/ShopItem';
import { api } from '@/lib/api';

export const metadata = { title: 'Shop - Home' };

// Optional: force fresh fetch on each request while developing
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const { data: products } = await api.get('/products'); 

  return (
    <section className="space-y-6">
      <header className="bg-white rounded-xl border border-gray-200 p-6">
        <h1 className="text-2xl font-bold">Welcome 👋</h1>
        <p className="text-gray-600 mt-1">
          Browse our latest items below. All data is served from your local JSON server.
        </p>
      </header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products?.map((p) => <ShopItem key={p.id} product={p} />)}
      </div>
    </section>
  );
}
