import React from 'react';
import cls from './Home.module.css'
import {Navbar} from "@/components/Navbar/Navbar";
import {DescriptionBlock} from "@/components/Home/DescriptionBlock/DescriptionBlock";
import {ContactForm} from "@/components/Home/ContactForm/ContactForm";
export const HomeComponent = () => {
    return (
        <div className={cls.container}>
            <Navbar />
            <DescriptionBlock />
            <ContactForm />
        </div>
    );
};

