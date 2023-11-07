import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AllShows from './Pages/Components/AllShows';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-shows" element={<AllShows />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
