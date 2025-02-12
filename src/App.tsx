import { Route, Routes } from "react-router-dom";
import BeersCatalog from "./pages/beers/beersCatalog";
import HomePage from "./pages/homePage";
import BeerDetailsPage from "./pages/beers/beerDetailsPage";
import BreweriesCatalog from "./pages/breweries/breweriesCatalog";
import { Layout } from "./components/base/layout";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="beers-catalog" element={<BeersCatalog />} />
        <Route path="beer/:id" element={<BeerDetailsPage />} />
        <Route path="breweries-catalog" element={<BreweriesCatalog />} />
        <Route path="brewery/:id" element={<BeerDetailsPage />} />
      </Route>
      <Route index element={<HomePage />} />
    </Routes>
  );
}

export default App;
