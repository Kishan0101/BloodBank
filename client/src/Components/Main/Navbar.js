import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import logo from '../../assets/logo.png';
import { Outlet, Link } from 'react-router-dom';
import DropDown from '../Util/DropDown';
import axios from '../Api';
import AuthContext from '../context/AuthContext';

const Navbar = (props) => {
    const s1 =
        'bg-white-900 drop-shadow-lg mx-3 px-7 py-2 rounded-md text-base font-medium hover:drop-shadow-xl hover:px-10 dark:hover:bg-midnight dark:hover:drop-shadow-dark-lg';
    const [theme, setTheme] = useState(0);
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
    const { getLoggedIn } = useContext(AuthContext);
    const doc = document.documentElement.classList;

    useEffect(() => {
        let t = localStorage.getItem('theme');
        if (!t) {
            localStorage.setItem('theme', 0);
        }
        t = localStorage.getItem('theme');
        setTheme(t);
        if (t == 1) {
            doc.add('dark');
        }
    }, []);

    // Framer Motion animation variants for navbar
    const navVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
    };

    // Framer Motion animation variants for mobile menu
    const menuVariants = {
        closed: { height: 0, opacity: 0 },
        open: { height: 'auto', opacity: 1 },
    };

    return (
        <>
            <motion.nav
                className="p-3 bg-white-900 sticky top-0 z-10 dark:bg-gray-bg"
                initial="initial"
                animate="animate"
                variants={navVariants}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/">
                        <div className="flex items-center justify-between">
                            <img
                                className="h-12 w-auto sm:h-14"
                                src={logo}
                                draggable={false}
                                alt="BloodLink Logo"
                            />
                            <div className="text-xl sm:text-2xl font-bold ml-2 text-blood">
                                BloodLink
                            </div>
                        </div>
                    </Link>
                    {/* Toggle Button for Mobile */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-dark dark:text-white-900"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i className={`fa-solid fa-${isOpen ? 'times' : 'bars'} fa-lg`}></i>
                    </button>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center justify-between space-x-2">
                        <DropDown
                            title="About Us"
                            children={['Home', 'About BloodLink', 'Contact Us']}
                            links={['/', '/about', '/contactUs']}
                        />
                        {props.logIn ? (
                            <>
                                <Link to={`/${props.user}/profile`} className={s1}>
                                    <i className="fa-solid fa-user"></i>
                                </Link>
                                <Link
                                    to="/"
                                    onClick={async () => {
                                        await axios.get('/auth/logout', { withCredentials: true }).then(
                                            (r) => {}
                                        );
                                        await getLoggedIn();
                                    }}
                                    className={s1}
                                >
                                    Log Out
                                </Link>
                            </>
                        ) : (
                            <>
                                <DropDown
                                    title="Looking For Blood"
                                    children={['Patient Login/Register', 'Blood Bank Directory']}
                                    links={['/register/patient', '/bloodDirect']}
                                />
                                <DropDown
                                    title="Want To Donate Blood"
                                    children={[
                                        'Donor Login/Register',
                                        'Blood Donation Camps',
                                        'About Blood Donation',
                                    ]}
                                    links={['/register/donor', '/bloodCamps', '/aboutBloodDonation']}
                                />
                                <DropDown
                                    title="Blood Bank Login"
                                    children={['Login', 'Add Your Bloodbank']}
                                    links={['/login/bank', '/register/bank']}
                                />
                            </>
                        )}
                        <button
                            className="mx-2 px-3 py-2 rounded-full hover:shadow-lg"
                            onClick={() => {
                                localStorage.setItem('theme', localStorage.getItem('theme') == 1 ? 0 : 1);
                                setTheme(localStorage.getItem('theme'));
                                if (theme == 0) {
                                    doc.add('dark');
                                } else {
                                    doc.remove('dark');
                                }
                            }}
                        >
                            <i
                                className={`dark:text-white-900 fa-solid fa-lg fa-${
                                    theme == 0 ? 'sun' : 'moon'
                                }`}
                            ></i>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                <motion.div
                    className="md:hidden overflow-hidden"
                    initial="closed"
                    animate={isOpen ? 'open' : 'closed'}
                    variants={menuVariants}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex flex-col items-center space-y-2 pt-2 pb-4">
                        <DropDown
                            title="About Us"
                            children={['Home', 'About BloodLink', 'Contact Us']}
                            links={['/', '/about', '/contactUs']}
                        />
                        {props.logIn ? (
                            <>
                                <Link
                                    to={`/${props.user}/profile`}
                                    className={`${s1} w-full text-center`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <i className="fa-solid fa-user"></i>
                                </Link>
                                <Link
                                    to="/"
                                    onClick={async () => {
                                        await axios.get('/auth/logout', { withCredentials: true }).then(
                                            (r) => {}
                                        );
                                        await getLoggedIn();
                                        setIsOpen(false);
                                    }}
                                    className={`${s1} w-full text-center`}
                                >
                                    Log Out
                                </Link>
                            </>
                        ) : (
                            <>
                                <DropDown
                                    title="Looking For Blood"
                                    children={['Patient Login/Register', 'Blood Bank Directory']}
                                    links={['/register/patient', '/bloodDirect']}
                                />
                                <DropDown
                                    title="Want To Donate Blood"
                                    children={[
                                        'Donor Login/Register',
                                        'Blood Donation Camps',
                                        'About Blood Donation',
                                    ]}
                                    links={['/register/donor', '/bloodCamps', '/aboutBloodDonation']}
                                />
                                <DropDown
                                    title="Blood Bank Login"
                                    children={['Login', 'Add Your Bloodbank']}
                                    links={['/login/bank', '/register/bank']}
                                />
                            </>
                        )}
                        <button
                            className="mx-2 px-3 py-2 rounded-full hover:shadow-lg"
                            onClick={() => {
                                localStorage.setItem('theme', localStorage.getItem('theme') == 1 ? 0 : 1);
                                setTheme(localStorage.getItem('theme'));
                                if (theme == 0) {
                                    doc.add('dark');
                                } else {
                                    doc.remove('dark');
                                }
                            }}
                        >
                            <i
                                className={`dark:text-white-900 fa-solid fa-lg fa-${
                                    theme == 0 ? 'sun' : 'moon'
                                }`}
                            ></i>
                        </button>
                    </div>
                </motion.div>
            </motion.nav>
            <Outlet />
        </>
    );
};

export default Navbar;