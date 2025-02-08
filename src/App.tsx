import { Route, Routes } from 'react-router-dom';
import BeersCatalog from './pages/beersCatalog';
import HomePage from './pages/homePage';
import BeerDetailsPage from './pages/beerDetailsPage';
import { Layout } from './components/layout';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="beers-catalog" element={<BeersCatalog />} />
          <Route path="beer/:id" element={<BeerDetailsPage />} />
        </Route>
        <Route index element={<HomePage />} />
      </Routes>
  );
}

export default App;
