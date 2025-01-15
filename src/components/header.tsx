import { Navbar } from "./navbar";
import headerImage from '../assets/brewery.jpg';

export const Header = () => {
    return (
    <div className="relative">
      <header className="h-96 bg-cover bg-center bg-opacity-50" style={{ backgroundImage: `url(${headerImage})` }}>
        <div className="flex justify-center items-center h-full bg-black bg-opacity-65">
          <h1 className="text-4xl font-bold text-white">Bienvenue sur notre site de Bières Artisanales</h1>
        </div>
        <Navbar/>
      </header>
    </div>
  )
}; 