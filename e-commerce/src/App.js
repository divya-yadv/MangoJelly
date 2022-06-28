import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AddItemForm from './components/AddItemForm';
import Home from './components/Home';
import ItemScreen from './components/ItemScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column heightall">
        <main className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/additem" element={<AddItemForm />} />
            <Route path="/item/:slug" element={<ItemScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
