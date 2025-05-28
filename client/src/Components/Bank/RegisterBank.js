import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useNavigate } from 'react-router-dom';
import data from '../../assets/data.json';
import axios from '../Api';

const RegisterBank = (props) => {
    const [name, setName] = useState('');
    const [organizer, setOrganizer] = useState('');
    const [contact, setContact] = useState(0);
    const [date, setDate] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [state, setState] = useState(0);
    const [district, setDistrict] = useState(0);
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const s1 =
        'mx-2 px-6 sm:px-9 py-2 w-full sm:w-4/12 font-semibold rounded-full shadow-sm text-white-900 bg-blood hover:drop-shadow-md hover:opacity-80 cursor-pointer';

    const submit = async (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            organizer: organizer,
            contact: contact,
            date: date,
            startTime: start,
            endTime: end,
            state: data.states[state].state,
            district: data.states[state].districts[district],
            address: address,
        };
        if (props.todo === 'register') {
            await axios
                .post('/camps', formData, { withCredentials: true })
                .then((r) => {
                    alert('Registered New Blood Donation Camp ✅');
                    navigate('/bank/camps');
                })
                .catch((e) => {
                    alert('Something went wrong');
                });
        } else {
            alert('Edited');
        }
    };

    // Framer Motion animation variants
    const sectionVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <motion.div
            className="dark:bg-gray-bg px-4 sm:px-6 md:px-8"
            initial="initial"
            animate="animate"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
        >
            <motion.section
                className="flex justify-center items-center py-6"
                initial="initial"
                animate="animate"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="bg-white-900 rounded-xl m-2 w-full max-w-lg sm:max-w-2xl pb-8 sm:pb-10">
                    <form
                        className="space-y-6 sm:space-y-7"
                        action=""
                        onSubmit={(e) => submit(e)}
                    >
                        <motion.fieldset
                            className="border border-solid border-gray-300 px-4 sm:px-6 md:px-8 py-5"
                            initial="initial"
                            animate="animate"
                            variants={sectionVariants}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {props.todo === 'register' && (
                                <legend className="text-xl sm:text-2xl font-bold">
                                     New Blood Donation Camp 
                                </legend>
                            )}
                            <fieldset className="border border-solid border-gray-300 px-3 sm:px-5 md:px-7 py-5">
                                {props.todo === 'register' && (
                                    <legend className="text-xl sm:text-2xl font-bold">
                                         Camp Details 
                                    </legend>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="font-semibold leading-8">
                                            Camp Name:<font color="red">*</font>
                                        </label>
                                        <input
                                            className="w-full p-2 sm:p-3 text-sm sm:text-md border border-silver rounded"
                                            type="text"
                                            placeholder="Enter camp name"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="font-semibold leading-8">
                                            Conducted By:<font color="red">*</font>
                                        </label>
                                        <input
                                            className="w-full p-2 sm:p-3 text-sm sm:text-md border border-silver rounded"
                                            type="text"
                                            required
                                            disabled
                                            value={props.bank.name}
                                        />
                                    </div>
                                    <div>
                                        <label className="font-semibold leading-8">
                                            Organized By:<font color="red">*</font>
                                        </label>
                                        <input
                                            className="w-full p-2 sm:p-3 text-sm sm:text-md border border-silver rounded"
                                            type="text"
                                            placeholder="Enter organizer name"
                                            required
                                            value={organizer}
                                            onChange={(e) => setOrganizer(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="font-semibold leading-8">
                                            Contact:<font color="red">*</font>
                                        </label>
                                        <input
                                            className="w-full p-2 sm:p-3 text-sm sm:text-md border border-silver rounded"
                                            type="number"
                                            placeholder="Enter organizer mobile"
                                            required
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div>
                                            <label className="font-semibold leading-8">
                                                Date:<font color="red">*</font>
                                            </label>
                                            <input
                                                className="w-full p-2 sm:p-3 text-sm sm:text-md border border-silver rounded"
                                                type="date"
                                                required
                                                value={date}
                                                min={new Date().toISOString().split('T')[0]}
                                                onChange={(e) => setDate(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="font-semibold leading-8">
                                                Start time:<font color="red">*</font>
                                            </label>
                                            <input
                                                className="w-full p-2 sm:p-3 text-sm sm:text-md border border-silver rounded"
                                                type="time"
                                                required
                                                value={start}
                                                onChange={(e) => setStart(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="font-semibold leading-8">
                                                End time:<font color="red">*</font>
                                            </label>
                                            <input
                                                className="w-full p-2 sm:p-3 text-sm sm:text-md border border-silver rounded"
                                                type="time"
                                                required
                                                value={end}
                                                onChange={(e) => setEnd(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <br />
                            <fieldset className="border border-solid border-gray-300 px-3 sm:px-5 md:px-7 py-5">
                                {props.todo === 'register' && (
                                    <legend className="text-xl sm:text-2xl font-bold">
                                         Address 
                                    </legend>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="state" className="font-semibold leading-8">
                                            State:<font color="red">*</font>
                                        </label>
                                        <select
                                            name="state"
                                            id="state"
                                            onChange={(e) => {
                                                setState(e.target.value);
                                                setDistrict(0);
                                            }}
                                            className="w-full p-2 sm:p-3 text-sm sm:text-md border border-silver rounded"
                                        >
                                            {data.states.map((e, i) => (
                                                <option key={i} value={i} selected={state === i}>
                                                    {e.state}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="district" className="font-semibold leading-8">
                                            District:<font color="red">*</font>
                                        </label>
                                        <select
                                            name="district"
                                            id="district"
                                            onChange={(e) => setDistrict(e.target.value)}
                                            className="w-full p-2 sm:p-3 text-sm sm:text-md border border-silver rounded"
                                        >
                                            {data.states[state].districts.map((e, i) => (
                                                <option key={i} value={i} selected={district === i}>
                                                    {e}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-span-1 sm:col-span-2">
                                        <label className="font-semibold leading-8">
                                            Address:<font color="red">*</font>
                                        </label>
                                        <input
                                            className="w-full p-2 sm:p-3 text-sm sm:text-md border border-silver rounded"
                                            type="text"
                                            placeholder="Enter your complete address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </fieldset>
                            <br />
                            <div className="text-center">
                                <input
                                    type="submit"
                                    className={s1}
                                    value="Register"
                                />
                            </div>
                        </motion.fieldset>
                    </form>
                </div>
            </motion.section>
            <br />
        </motion.div>
    );
};

export default RegisterBank;