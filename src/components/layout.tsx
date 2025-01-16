import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Navbar } from './navbar';
import { Footer } from './footer';

export default function Layout(): JSX.Element {
    return (
        <div className="flex flex-col min-h-screen bg-gray-200">
            <Header />
            <Navbar />
            <main className="flex-grow w-full overflow-y-auto mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
