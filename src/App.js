import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import HotRecipe from './pages/HotRecipe/HotRecipe';
import ColdRecipe from './pages/ColdRecipe/ColdRecipe';






function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hot" element={<HotRecipe />} />
        <Route path ="/cold" element={<ColdRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
