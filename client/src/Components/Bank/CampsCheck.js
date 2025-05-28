import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import axios from '../Api';

const CampsCheck = (props) => {
    const [edit, setEdit] = useState(true);
    const [units, setUnits] = useState(props.data.units);
    const [status, setStatus] = useState(props.data.status);

    (() => {
        props.data._id.units = props.data.units;
        props.data._id.status = props.data.status == 0 ? 'Pending' : 'Donated';
    })();

    // Framer Motion animation variants
    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <motion.div
            className="border border-blood border-2 shadow-md p-3 sm:p-4 rounded-xl w-full max-w-xs sm:max-w-sm"
            initial="initial"
            animate="animate"
            variants={cardVariants}
            transition={{ duration: 0.3 }}
        >
            <table className="w-full text-sm sm:text-base">
                <tbody>
                    <tr>
                        <td className="py-1 sm:py-2">{props.data._id.name}</td>
                        <td className="py-1 sm:py-2 pl-2 sm:pl-4 text-right">
                            {edit ? (
                                <>{props.data.units}</>
                            ) : (
                                <input
                                    type="number"
                                    min={1}
                                    max={250}
                                    className="w-12 sm:w-16 border border-silver rounded px-1"
                                    value={units}
                                    onChange={(e) => setUnits(e.target.value)}
                                />
                            )}
                            mL
                        </td>
                    </tr>
                    <tr>
                        <td className="py-1 sm:py-2">{`${props.data._id.bloodGroup} | ${props.data._id.age}yrs`}</td>
                        <td className="py-1 sm:py-2 text-right">
                            {edit ? (
                                <>
                                    <i
                                        className="fa-solid fa-circle-info text-metal cursor-pointer mr-2 sm:mr-3"
                                        onClick={() => {
                                            props.setPopup(props.popup == -1 ? 1 : -1);
                                            props.setSent(props.data._id);
                                        }}
                                    ></i>
                                    {status == 0 && (
                                        <i
                                            className="fa-solid fa-pen-to-square text-green cursor-pointer"
                                            onClick={() => setEdit(false)}
                                        ></i>
                                    )}
                                </>
                            ) : (
                                <>
                                    <i
                                        className="fa-solid fa-check text-green cursor-pointer mr-2 sm:mr-3"
                                        onClick={async () => {
                                            await axios
                                                .put(
                                                    `/camps/${props.camp}/${props.data._id._id}`,
                                                    { units: units },
                                                    { withCredentials: true }
                                                )
                                                .then((r) => {
                                                    alert('Updated');
                                                    props.data.units = units;
                                                    props.data.status = 1;
                                                    setUnits(units);
                                                    setStatus(1);
                                                    setEdit(true);
                                                })
                                                .catch((e) => {
                                                    alert('Something went wrong');
                                                });
                                        }}
                                    ></i>
                                    <i
                                        className="fa-solid fa-xmark text-blood cursor-pointer"
                                        onClick={() => setEdit(true)}
                                    ></i>
                                </>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </motion.div>
    );
};

export default CampsCheck;