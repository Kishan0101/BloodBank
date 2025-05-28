import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import AuthContext from '../context/AuthContext';
import UserNav from '../User/UserNav';
import EditProfile from './EditProfile';
import History from '../Util/History';
import RegisterBank from './RegisterBank';
import Camps from './Camps';
import Stock from './Stock';

const Bank = (props) => {
    const { user } = useContext(AuthContext);
    const { handle } = useParams();

    const nav = [
        { to: '/bank/profile', icon: 'fa-user', title: 'Bank Profile' },
        { to: '/bank/stock', icon: 'fa-layer-group', title: 'Blood Stock' },
        { to: '/bank/donations', icon: 'fa-hand-holding-medical', title: 'Donations' },
        { to: '/bank/requests', icon: 'fa-clock-rotate-left', title: 'Requests' },
        { to: '/bank/camps', icon: 'fa-clock-rotate-left', title: 'Blood Donation Camps' },
        { to: '/bank/registerBank', icon: 'fa-rotate', title: 'Register new Camp' },
    ];

    // Framer Motion animation variants
    const contentVariants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    };

    const sidebarVariants = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
    };

    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen">
            {/* Sidebar */}
            <motion.div
                className="w-full md:w-64 lg:w-80 fixed md:static top-0 left-0 z-10"
                initial="initial"
                animate="animate"
                variants={sidebarVariants}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <UserNav data={nav} />
            </motion.div>

            {/* Main Content */}
            <motion.div
                className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 w-full mt-16 md:mt-0"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={contentVariants}
                transition={{ duration: 0.3, delay: 0.4 }}
                key={handle} // Ensure animation triggers on route change
            >
                {handle === 'profile' && <EditProfile />}
                {handle === 'stock' && <Stock />}
                {handle === 'donations' && <History user="bank" handle={handle} />}
                {handle === 'requests' && <History user="bank" handle={handle} />}
                {handle === 'camps' && <Camps />}
                {handle === 'registerBank' && <RegisterBank todo="register" bank={user} />}
            </motion.div>
        </div>
    );
};

export default Bank;