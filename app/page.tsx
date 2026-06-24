import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to Vizorya</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Explore our curated collection of the latest smartphones.
      </p>
      <div className="flex justify-center">
        <Link href="/products">
          <a className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            View Smartphones
          </a>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
