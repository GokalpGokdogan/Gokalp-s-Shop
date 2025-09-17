'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function HomeHeader() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/login');
  };

  const handleBrowseProducts = () => {
    router.push('/products');
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="relative z-10 max-w-4xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to Gökalp's Store! 🛍️
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-medium">
              Discover amazing products and exclusive deals
            </p>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Join thousands of satisfied customers and unlock personalized 
              recommendations, order tracking, exclusive member discounts, and much more. 
              Your shopping journey starts here.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:min-w-fit">
            {!isAuthenticated && (
              <button
                onClick={handleSignIn}
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
              >
                Sign In / Register
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
            
            <button
              onClick={handleBrowseProducts}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              Browse Products
            </button>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-slate-300">
            <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium">Quality Products</span>
          </div>
          
          <div className="flex items-center gap-3 text-slate-300">
            <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-medium">Fast Checkout</span>
          </div>
          
          <div className="flex items-center gap-3 text-slate-300">
            <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-medium">Trustworthy Shopping</span>
          </div>
        </div>
      </div>
    </div>
  );
}
