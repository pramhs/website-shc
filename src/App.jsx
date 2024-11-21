import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Service from './pages/Service';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/services" element={<NotFound />} />
                    <Route path="/about" element={<NotFound />} />
                    <Route path="/contact" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
