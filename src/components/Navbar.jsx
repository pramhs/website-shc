import { faBars } from '@fortawesome/free-solid-svg-icons';
import shc_logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavbarContainer = ({ children }) => {
    return (
        <div className="bg-white border-b">
            <div className="px-16 py-2">
                <div className="flex items-center justify-between">
                    {children}
                </div>
            </div>
        </div>
    );
};

const NavbarBrand = ({ brand, logo }) => {
    return (
        <div>
            <Link to="/">
                <div className="flex items-center gap-x-2">
                    <img src={logo} alt="" className="size-9" />
                    <h1 className="text-lg font-bold uppercase text-slate-800">
                        {brand}
                    </h1>
                </div>
            </Link>
        </div>
    );
};

const Navbarlink = () => {
    return (
        <nav className="py-4">
            <ul className="flex gap-x-10 text-slate-800">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Service</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
            </ul>
        </nav>
    );
};

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <NavbarBrand logo={shc_logo} brand="Shin Heung Indonesia" />
                <Navbarlink />
            </NavbarContainer>
        </>
    );
};
export default Navbar;
