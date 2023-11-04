"use client"
import React, {useState} from 'react';
import cls from './ContactForm.module.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ar from 'react-phone-number-input/locale/ru.json'
import { motion } from 'framer-motion';
import {FaCheck, FaTimes} from "react-icons/fa";
import axios from 'axios';
export const ContactForm = () => {
    const [value, setValue] = useState<string>()

    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = async () => {
        const phone = value && value.replace('+', '');  // убираем символ '+'
        const response = await axios.post('/api/contact', { tel: phone });
        setSubmitStatus(response.data.succes ? 'success' : 'failure');
    };


    return (

        <div className={cls.container}>
            <PhoneInput
                placeholder="Введите номер телефона"
                value={value}

                className={cls.input_container}
                labels={ar}
                smartCaret={true}
                // @ts-ignore
                onChange={setValue}/>
            <div className={cls.contact_button_container}>
                <motion.button
                    onClick={handleSubmit}
                    initial={{ backgroundPosition: 'right' }}
                    animate={{
                        backgroundColor: submitStatus === 'success' ? '#28a745' : submitStatus === 'failure' ? '#dc3545' : '#FF6B00',
                        backgroundPosition: submitStatus ? 'left' : 'right'
                    }}
                    transition={{ duration: 0.5 }}
                    className={cls.submition_button}
                >
                    {submitStatus === 'success' ? <FaCheck /> : submitStatus === 'failure' ? <FaTimes /> : 'Оставить заявку'}
                </motion.button>
            </div>
        </div>
    );
};
export const dynamic = 'force-dynamic'

