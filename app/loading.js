export default function Loading() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
          <div className="h-48 bg-gray-100 animate-pulse" />
          <div className="p-4 space-y-3">
            <div className="h-4 w-20 bg-gray-100 animate-pulse rounded" />
            <div className="h-5 w-3/4 bg-gray-100 animate-pulse rounded" />
            <div className="h-4 w-1/2 bg-gray-100 animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
