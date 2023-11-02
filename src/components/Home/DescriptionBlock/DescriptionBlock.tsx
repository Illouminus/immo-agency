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
                <h1 className={cls.title}>Управление арендой</h1>
            </motion.div>
            <div className={cls.description}>
                Вы получаете долгосрочный, стабильный, пассивный доход от сдачи в аренду
                коммерческой и жилой недвижимости, а все остальные заботы мы возьмем на себя.
            </div>
        </div>
    );
};

