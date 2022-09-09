import './App.css';
import { NavbarComponent } from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Screens/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
