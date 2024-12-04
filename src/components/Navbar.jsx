import shc_logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <div className="absolute z-10 w-full">
                <NavbarContainer>
                    <NavbarBrand logo={shc_logo} brand="Shin Heung Indonesia" />
                    <Navbarlink />
                </NavbarContainer>
            </div>
        </>
    );
}

function NavbarContainer({ children }) {
    return (
        <div className="bg-white border-b">
            <div className="px-16 py-2">
                <div className="flex items-center justify-between">
                    {children}
                </div>
            </div>
        </div>
    );
}

function NavbarBrand({ brand, logo }) {
    return (
        <div>
            <Link to="/website-shc/home">
                <div className="flex items-center gap-x-2">
                    <img src={logo} alt="" className="size-9" />
                    <h1 className="text-lg font-medium uppercase text-slate-800">
                        {brand}
                    </h1>
                </div>
            </Link>
        </div>
    );
}

function Navbarlink() {
    return (
        <nav className="py-4">
            <ul className="flex gap-x-10 text-slate-800">
                <li>
                    <Link to="/website-shc/home">Home</Link>
                </li>
                <li>
                    <Link to="/website-shc/service">Service</Link>
                </li>
                <li>
                    <Link to="/website-shc/about">About</Link>
                </li>
                <li>
                    <Link to="/website-shc/contact">Contact us</Link>
                </li>
            </ul>
        </nav>
    );
}
