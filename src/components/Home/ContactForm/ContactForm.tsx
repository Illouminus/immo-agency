"use client"
import React, {useState} from 'react';
import cls from './ContactForm.module.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
export const ContactForm = () => {
    const [value, setValue] = useState()


    return (

        <div className={cls.container}>
            <PhoneInput
                placeholder="Введите номер телефона"
                value={value}
                defaultCountry={"RU"}
                className={cls.input_container}
                // @ts-ignore
                onChange={setValue}/>
            <div className={cls.contact_button_container}>
                <button>Оставить заявку</button>
            </div>
        </div>
    );
};
export const dynamic = 'force-dynamic'

