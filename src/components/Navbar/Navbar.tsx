"use client"
import React, { useState } from 'react';
import cls from './Navbar.module.css';
import Image from 'next/image';
import logo from '../../../public/images/img/logo.svg';
import mobileLogo from '../../../public/images/img/logo2.svg'
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import { motion } from 'framer-motion';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={cls.container}>
            <div className={cls.burger} onClick={toggleMenu}>
                {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </div>
            <div className={cls.logo_container}>
                <Image
                    src={logo}
                    alt={'logo'}
                    width={200}
                    className={cls.full_logo}
                />
                <Image
                    src={mobileLogo}
                    alt={'logo'}
                    className={cls.mobile_logo}
                />
            </div>
            <motion.div
                className={`${cls.links_container} ${menuOpen ? cls.active : ''}`}>
                <a>Как мы работаем</a>
                <a>Стоимость</a>
                <a>Договор</a>
                <a>Контакты</a>
            </motion.div>
        </div>
    );
};
