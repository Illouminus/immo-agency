"use client"
import React, {useEffect, useState, useRef} from 'react';
import cls from './Navbar.module.css';
import Image from 'next/image';
import logo from '../../../public/images/img/logo.svg';
import mobileLogo from '../../../public/images/img/logo2.svg'
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const [activeLink, setActiveLink] = useState('');
    const slideRef = useRef<HTMLElement>(null)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        const onScroll = () => {
            if (slideRef.current) {
                const scrollPos = window.scrollY || document.documentElement.scrollTop;
                setIsTop(scrollPos < slideRef.current.offsetHeight);
                if (scrollPos <= 0) {
                    setActiveLink('');
                }
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (

        <nav className={isTop ? cls.container : cls.scrolled} ref={slideRef}>
            <div className={cls.burger} onClick={toggleMenu}>
                {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </div>
            <div className={cls.logo_container}>
                <Image
                    src={logo}
                    alt={'logo'}
                    width={300}
                    className={`${cls.full_logo} ${!isTop && cls.hide_on_scroll}`}
                />
                <Image
                    src={mobileLogo}
                    alt={'logo'}
                    height={60}
                    className={`${cls.mobile_logo} ${!isTop && cls.show_on_scroll}`}
                />

            </div>
            <motion.div
                className={`${cls.links_container} ${menuOpen ? cls.active : ''}`}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                <Link
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    className={activeLink === 'work' ? cls.activeLink : ''}
                    onClick={() => { setActiveLink('work'); setMenuOpen(false); }}
                    onSetActive={() => setActiveLink('work')}
                    style={{
                        cursor: "pointer"
                    }}
                >
                    Как мы работаем
                </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                    activeClass="active"
                    to="insurance"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    className={activeLink === 'insurance' ? cls.activeLink : ''}
                    onClick={() => { setActiveLink('insurance'); setMenuOpen(false); }}
                    onSetActive={() => setActiveLink('insurance')}
                    style={{
                        cursor: "pointer"
                    }}
                >
                    Страховка
                </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    className={activeLink === 'contacts' ? cls.activeLink : ''}
                    onClick={() => { setActiveLink('contacts'); setMenuOpen(false); }}
                    onSetActive={() => setActiveLink('contacts')}
                    style={{
                        cursor: "pointer"
                    }}
                >
                    Контакты
                </Link>
                </motion.div>
            </motion.div>
        </nav>
    );
};
