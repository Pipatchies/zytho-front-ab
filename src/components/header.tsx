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
          className="absolute top-4 left-4 w-28 h-28 bg-yellow-200 p-0.5 rounded-2xl shadow-lg" 
        />
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-65 space-y-4">
            <h1 className="font-oswald text-8xl font-bold text-white shadow-2xl">Zythologue</h1>
            <h2 className="font-oswald text-3xl font-bold text-white">Pour tous les amateurs de mousses artisanales</h2>
        </div>
        <Navbar/>
      </header>
    </div>
  )
}; 