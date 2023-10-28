"use client"
import React from 'react';
import cls from './Contacts.module.css'
import { motion } from 'framer-motion';
import Image from "next/image";
import cat from '@/../public/images/img/cat.svg'
export const Contacts = () => {
    return (
        <footer className={cls.container} id={"contacts"}>
            <div className={cls.contact_container}>
                <div className={cls.cat_container}>
                    <motion.div className={cls.rabbit}
                                initial={{ opacity: 0, y: 500 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Image
                            src={cat}
                            alt={"cat"}
                            width={200}
                        />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className={cls.contacts_container}
                >
                    <h2>Контакты</h2>
                    <div className={cls.contacts_info_container}>
                        <div className={cls.info_trick}>
                            <p className={cls.tel}>+7 (499) 681-62-35</p>
                            <p>с 9 до 21 часа по Москве</p>
                        </div>
                        <div className={cls.info_trick}>
                            <p className={cls.email}>электронная почта</p>
                            <p>info@maison.ru</p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </footer>
    );
};
