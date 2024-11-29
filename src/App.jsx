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
                    <Route path="/website-shc/home" element={<Home />} />
                    <Route path="/website-shc/contact" element={<Contact />} />
                    <Route path="/website-shc/about" element={<About />} />
                    <Route path="/website-shc/service" element={<Service />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
