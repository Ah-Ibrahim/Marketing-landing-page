import { motion } from 'motion/react';

type SideMenuProps = {
    onClose: () => void;
};

function SideMenu({ onClose }: SideMenuProps) {
    const toggleDuration: number = 1;

    return (
        <div className="fixed inset-0 z-[1] bg-black/25" onClick={onClose}>
            <motion.div
                className="bg-bg-primary absolute top-0 right-0 bottom-0 flex w-3/4 flex-col p-6 pr-[calc(5%+calc(var(--spacing)*6))]"
                onClick={(e) => e.stopPropagation()}
                initial={{
                    right: '-100%',
                }}
                animate={{
                    right: '-5%',
                    // transition: {
                    //     type: 'spring',
                    //     stiffness: 50,
                    // },
                }}
                exit={{
                    right: '-100%',
                    // transition: {
                    //     type: 'spring',
                    //     stiffness: 50,
                    // },
                }}
                transition={{
                    duration: toggleDuration,
                    ease: 'backInOut',
                    // damping: 20,
                }}
            >
                <div className="mb-3 text-2xl font-medium">Menu</div>
                <ul className="text-primary space-y-4 text-lg">
                    <li>
                        <a
                            href="#"
                            className="hover:text-primary-hover focus:text-primary-hover flex gap-3 transition-colors"
                        >
                            <svg
                                className="icon-menu"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path>
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-primary-hover focus:text-primary-hover flex gap-3 transition-colors"
                        >
                            <svg
                                className="icon-menu"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                fill="currentColor"
                            >
                                <path d="M434.8 54.1C446.7 62.7 451.1 78.3 445.7 91.9L367.3 288L512 288C525.5 288 537.5 296.4 542.1 309.1C546.7 321.8 542.8 336 532.5 344.6L244.5 584.6C233.2 594 217.1 594.5 205.2 585.9C193.3 577.3 188.9 561.7 194.3 548.1L272.7 352L128 352C114.5 352 102.5 343.6 97.9 330.9C93.3 318.2 97.2 304 107.5 295.4L395.5 55.4C406.8 46 422.9 45.5 434.8 54.1z" />
                            </svg>
                            Feature
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-primary-hover focus:text-primary-hover flex gap-3 transition-colors"
                        >
                            <svg
                                className="icon-menu"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM8.50488 14.0027H14.0049C14.281 14.0027 14.5049 13.7789 14.5049 13.5027C14.5049 13.2266 14.281 13.0027 14.0049 13.0027H10.0049C8.62417 13.0027 7.50488 11.8835 7.50488 10.5027C7.50488 9.12203 8.62417 8.00275 10.0049 8.00275H11.0049V6.00275H13.0049V8.00275H15.5049V10.0027H10.0049C9.72874 10.0027 9.50488 10.2266 9.50488 10.5027C9.50488 10.7789 9.72874 11.0027 10.0049 11.0027H14.0049C15.3856 11.0027 16.5049 12.122 16.5049 13.5027C16.5049 14.8835 15.3856 16.0027 14.0049 16.0027H13.0049V18.0027H11.0049V16.0027H8.50488V14.0027Z"></path>
                            </svg>
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-primary-hover focus:text-primary-hover flex gap-3 transition-colors"
                        >
                            <svg
                                className="icon-menu"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path>
                            </svg>
                            About us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-primary-hover focus:text-primary-hover flex gap-3 transition-colors"
                        >
                            <svg
                                className="icon-menu"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M19 7H24V9H19V7ZM17 12H24V14H17V12ZM20 17H24V19H20V17ZM2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11Z"></path>
                            </svg>
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="mt-auto flex flex-col gap-3">
                    <a href="#" className="btn py-2">
                        Learn more
                    </a>
                    <a href="#" className="btn btn--primary py-2">
                        See pricing
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

export default SideMenu;
