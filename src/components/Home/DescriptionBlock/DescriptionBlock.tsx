"use client"
import React from 'react';
import cls from './DescriptionBlock.module.css'
import { motion } from "framer-motion"
export const DescriptionBlock = () => {
    return (
        <div className={cls.container}>
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1.2, 1] }} // сначала увеличивается до 1.1, а затем возвращается к 1
                transition={{ type: "spring", bounce: 0.60 }} // определение времени для каждого этапа анимации
                className={cls.title_container}>
                <h1 className={cls.title}>Управление арендой недвижимости в Москве</h1>
            </motion.div>

            <div>
                <span className={cls.you_get}> Вы получаете :</span>
                <ul className={cls.list_container}>
                    <li>Долгосрочный</li>
                    <li>Стабильный</li>
                    <li>Пассивный</li>
                </ul>
                <span style={{fontWeight: 700}}>доход</span>
                <br />
                <span> от сдачи в аренду коммерческой и жиллой недвижимости, а все остальные заботы мы берем на себя</span>
            </div>
        </div>
    );
};

