// app/not-found.js
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn't exist or has been removed.
      </p>
      <a
        href="/"
        className="bg-[#06b6b6] hover:bg-[#059999] text-white px-5 py-3 rounded-lg font-semibold transition"
      >
        Go Home
      </a>
    </div>
  );
}
