import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/UIComponents/Header';
import Home from './Components/Pages/Home';
import Footer from './Components/UIComponents/Footer';
import ItemView from './Components/Pages/ItemView';
import ProductPage from './Components/Pages/ProductPage';
import PetsPage from './Components/Pages/PetsPage';
import Contacts from './Components/Pages/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/pets' element={<PetsPage />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/view-item/:clickedItemType/:clickedItemId/:clickedItemName' element={<ItemView />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
