import { Navbar } from "./navbar";
import headerImage from "../../assets/brewery.jpg";
import logo from "../../assets/logo_zythologue.webp";
import { Link } from "react-router";

export const Header = () => {
  return (
    <div className="relative">
      <header
        className="h-80 bg-cover bg-center bg-opacity-50"
        style={{ backgroundImage: `url(${headerImage})` }}
        role="banner"
        aria-label="Header with logo and tagline"
      >

        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-65"
          aria-hidden="true"
        />
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 md:px-8">
          <div className="flex justify-start w-full mb-4 md:mb-0">
            <Link to="/" aria-label="Retour à l'accueil">
              <img
                src={logo}
                alt="Logo Zythologue"
                className="w-20 h-20 md:w-28 md:h-28 bg-yellow-200 p-0.5 rounded-2xl shadow-lg"
              />
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center space-y-4">
            <h1
              className="font-oswald md:text-7xl text-5xl font-bold text-white shadow-2xl text-center"
              aria-label="Nom de la plateforme Zythologue"
            >
              Zythologue
            </h1>
            <h2
              className="font-oswald md:text-3xl text-2xl font-bold text-white mx-4 text-center"
              aria-label="Tagline: Pour tous les amateurs de mousses faites maison"
            >
              Pour tous les amateurs de mousses faites maison
            </h2>
          </div>
        </div>

        <Navbar />
      </header>
    </div>
  );
};

