// app/components/HomeHeaderClient.jsx
'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function HomeHeader() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-white text-gray-700 rounded-xl border border-gray-200 p-6">
      <h1 className="text-2xl font-bold">Welcome 👋</h1>
      <p className="mt-1 text-gray-500">Browse our latest items below.</p>

      {!isAuthenticated && (
        <Link
          href="/login"
          className="inline-block mt-3 text-[#06b6b6] hover:underline font-medium"
        >
          Sign in to your account →
        </Link>
      )}
    </header>
  );
}
