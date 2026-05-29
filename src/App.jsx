import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Benefits from './pages/Benefits';
import Community from './pages/Community';
import Partners from './pages/Partners';
import BookViewer from './pages/BookViewer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/community" element={<Community />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/viewer/:id" element={<BookViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
