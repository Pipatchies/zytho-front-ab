import { Link } from "react-router-dom";
import beersImage from "../assets/brewery.jpg";
import breweryImage from "../assets/brewery2.jpg";

export const HomePage = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">

            <div 
                className="w-full md:w-1/2 flex items-center justify-center bg-cover bg-center text-white relative h-1/2 md:h-full"
                style={{ backgroundImage: `url(${beersImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
                role="img"
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="bg-gray-900 py-8 px-6 sm:px-12 md:px-16 lg:px-14 rounded-lg text-center z-10 bg-opacity-90 w-4/5 max-w-lg">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-oswald">Nos bières</h1>
                    <p className="mb-6 font-nunito text-sm sm:text-base">
                        Explorez notre sélection de bières artisanales
                    </p>
                    <Link 
                        to="/beers-catalog" 
                        aria-label="Voir le catalogue des bières"
                        className="p-2 bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition font-nunito hover:bg-gray-900 hover:text-gray-300 hover:border-2 hover:border-gray-300"
                    >
                        Voir les Bières
                    </Link>
                </div>
            </div>

            <div className="hidden md:block w-1 bg-gray-900 h-full"></div>

            <div 
                className="w-full md:w-1/2 flex items-center justify-center bg-cover bg-center text-white relative h-1/2 md:h-full"
                style={{ backgroundImage: `url(${breweryImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
                role="img"
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="bg-gray-900 py-8 px-6 sm:px-12 md:px-16 lg:px-14 rounded-lg text-center z-10 bg-opacity-90 w-4/5 max-w-lg">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-oswald">Nos brasseries</h1>
                    <p className="mb-6 font-nunito text-sm sm:text-base">
                        Découvrez les brasseries derrière vos bières préférées
                    </p>
                    <Link 
                        to="/breweries-catalog" 
                        aria-label="Voir le catalogue des brasseries"
                        className="p-2 bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition font-nunito hover:bg-gray-900 hover:text-gray-300 hover:border-2 hover:border-gray-300"
                    >
                        Voir les Brasseries
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;



