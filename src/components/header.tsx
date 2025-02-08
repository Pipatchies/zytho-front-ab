import { Navbar } from "./navbar";
import headerImage from '../assets/brewery.jpg';
import logo from '../assets/logo_zythologue.webp';

export const Header = () => {
    return (
    <div className="relative">
      <header className="h-96 bg-cover bg-center bg-opacity-50" style={{ backgroundImage: `url(${headerImage})` }}>
      <img 
          src={logo} 
          alt="Logo Zythologue" 
          className="absolute top-4 left-4 md:w-28 md:h-28 bg-yellow-200 p-0.5 rounded-2xl shadow-lg w-20 h-20" 
        />
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-65 space-y-4">
            <h1 className="font-oswald md:text-8xl text-7xl font-bold text-white shadow-2xl">Zythologue</h1>
            <h2 className="flex font-oswald md:text-3xl text-2xl font-bold text-white mx-10 text-center">Pour tous les amateurs de mousses faites maison</h2>
        </div>
        <Navbar/>
      </header>
    </div>
  )
}; 