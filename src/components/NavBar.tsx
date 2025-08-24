import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import logoSrc from '../assets/images/abstractly.png';
import useMediaQuery from '../hooks/useMediaQuery';
import SideMenu from './SideMenu';

function NavBar() {
    const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
    const isDesktop = useMediaQuery('(min-width: 64rem)');

    const handleMenuBtnClick = () => setIsMenuShown(true);

    const closeMenu = () => setIsMenuShown(false);

    return (
        <nav className="m-auto flex section items-center justify-between bg-transparent py-4 lg:justify-normal">
            <div className="w-31">
                <img src={logoSrc} alt="Logo Image" />
            </div>

            {!isDesktop && (
                <>
                    <button
                        onClick={handleMenuBtnClick}
                        className="text-icon-emphasize cursor-pointer"
                        aria-label="Menu"
                    >
                        <svg
                            className="w-[20px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                        </svg>
                    </button>
                    <AnimatePresence>
                        {isMenuShown && <SideMenu onClose={closeMenu} />}
                    </AnimatePresence>
                </>
            )}
            {isDesktop && (
                <>
                    <ul className="text-primary gap-x-6 flex ms-30 ">
                        <li>
                            <a
                                href="#"
                                className="hover:text-primary-hover focus:text-primary-hover flex gap-3 transition-colors"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-primary-hover focus:text-primary-hover flex gap-3 transition-colors"
                            >
                                Feature
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-primary-hover focus:text-primary-hover flex gap-3 transition-colors"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-primary-hover focus:text-primary-hover flex gap-3 transition-colors"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-primary-hover focus:text-primary-hover flex gap-3 transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="ms-auto flex text-sm gap-x-4">
                        <button className="btn px-4.5 py-2.5">
                            Learn more
                        </button>
                        <button className="btn btn--primary px-4.5 py-2.5">
                            See pricing
                        </button>
                    </div>
                </>
            )}
        </nav>
    );
}

export default NavBar;
