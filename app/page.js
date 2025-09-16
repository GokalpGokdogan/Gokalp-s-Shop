import ShopItem from '@/components/ShopItem';
import { api } from '@/lib/api';
import Link from 'next/link';

export const metadata = { title: 'Shop - Home' };

// Optional: force fresh fetch on each request while developing
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const { data: products } = await api.get('/products'); 

  return (
    <section className="space-y-6 px-10 py-5">
      <header className="bg-white text-gray-700 rounded-xl border border-gray-200 p-6">
        <h1 className="text-2xl font-bold">Welcome 👋</h1>
        <p className="mt-1 text-gray-500">
          Browse our latest items below. 
        </p>
        <Link href="/auth" className="inline-block mt-3 text-[#06b6b6] hover:underline font-medium">
          Sign in to your account →
        </Link>
      </header>

      <section>
        <h2 className="text-xl text-gray-700 font-semibold mb-4">
          Suggested for you
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products?.slice(0,8).map((p) => <ShopItem key={p.id} product={p} />)}
        </div>
      </section>
    </section>
  );
}
