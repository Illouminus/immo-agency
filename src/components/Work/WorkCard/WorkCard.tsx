"use client"
import React from 'react';
import cls from './WorkCard.module.css'
import {WorkProcess} from "@/components/Work/shared/const";
import { motion } from "framer-motion";
export const WorkCard = (props: WorkProcess) => {
    const { title, description, number} = props;
    return (
        <section className={cls.container}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: number * 0.2 }}
                className={cls.number}
            >
                {number}
            </motion.div>
            <h3>{title}</h3>
            <p>{description}</p>
        </section>
    );
};

