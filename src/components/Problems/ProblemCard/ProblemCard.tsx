import React from 'react';
import cls from './ProblemCard.module.css'
import Image from "next/image";

interface ProblemCardProps {
    title: string,
    image: string,
    list: {
        first: string,
        second: string,
        threat: string
    }
}
export const ProblemCard = (props: ProblemCardProps) => {
    const {title, image, list} = props

    console.log('image', image)
    return (
        <div className={cls.container} style={{
            background: `linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0)), url('${image}')`
        }}>
            <h2>{title}</h2>
            <ul className={cls.list}>
                <li>{list.first}</li>
                <li>{list.second}</li>
                <li>{list.threat}</li>
            </ul>
        </div>
    );
};

