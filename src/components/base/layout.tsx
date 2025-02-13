import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Navbar />
      <main className="flex-grow w-full overflow-y-auto mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

