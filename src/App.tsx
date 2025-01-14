import { Route, Routes } from 'react-router-dom';
import BeersCatalog from './pages/beersCatalog';
import HomePage from './pages/homePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/beers-catalog" element={<BeersCatalog />} />
    </Routes>
  );
}

export default App;
