import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import RegisterBank from './RegisterBank';
import AuthContext from '../context/AuthContext';
import Popup from '../Util/Popup';
import CampsCheck from './CampsCheck';

const CampEdit = (props) => {
    const { user } = useContext(AuthContext);
    const [flag, setFlag] = useState(true);
    const [popup, setPopup] = useState(-1);
    const [sent, setSent] = useState([]);
    const s1 =
        'mx-2 px-9 py-2 w-max font-semibold rounded-full shadow-sm text-white-900 bg-blood hover:drop-shadow-md hover:opacity-80 cursor-pointer';

    // Framer Motion animation variants
    const sectionVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const popupVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
    };

    return (
        <motion.div
            className="px-4 sm:px-6 md:px-8"
            initial="initial"
            animate="animate"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
        >
            {props.popup !== -1 && (
                <motion.div
                    className="popup fixed inset-0 h-full w-full overflow-y-auto z-10 bg-black bg-opacity-50 flex items-center justify-center"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={popupVariants}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="popup_inner rounded-lg p-4 sm:p-6 md:p-7 bg-white dark:bg-gray-bg w-full max-w-lg sm:max-w-2xl md:max-w-4xl"
                        variants={popupVariants}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl sm:text-2xl font-bold">
                                Camp Donors
                            </h1>
                            <i
                                onClick={() => props.setPopup(-1)}
                                className="fa-solid fa-circle-xmark text-blood fa-lg sm:fa-xl cursor-pointer hover:opacity-80"
                            ></i>
                        </div>
                        <br />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {props.data.donors.map((k, j) => (
                                <CampsCheck
                                    key={j}
                                    setSent={setSent}
                                    popup={popup}
                                    setPopup={setPopup}
                                    data={k}
                                    camp={props.data._id}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
            <Popup popup={popup} setPopup={setPopup} data={sent} handle="User" />
        </motion.div>
    );
};

export default CampEdit;