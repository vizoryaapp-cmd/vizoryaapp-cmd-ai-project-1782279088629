import './globals.css';
import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gray-50 text-gray-800">
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Vizorya</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="/"
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    Products
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8">{children}</main>
        <footer className="bg-gray-100 text-center text-gray-600 py-4 mt-8">
          <p>&copy; {new Date().getFullYear()} Vizorya. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
