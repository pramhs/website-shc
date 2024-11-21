import { faBars } from '@fortawesome/free-solid-svg-icons';
import shc_logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarContainer = ({ children }) => {
    return (
        <div className="bg-primary">
            <div className="px-4 py-2">
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
            <a className="flex items-center gap-x-2" href="#">
                <img src={logo} alt="" className="size-7" />
                <h1 className="hidden font-semibold text-white uppercase">
                    {brand}
                </h1>
            </a>
        </div>
    );
};

const Navbarlink = () => {
    return (
        <nav>
            <button
                data-collapse-toggle="navbar-default"
                type="button"
                aria-controls="navbar-default"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon
                    icon={faBars}
                    className="text-white"
                    aria-hidden="true"
                />
            </button>
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
