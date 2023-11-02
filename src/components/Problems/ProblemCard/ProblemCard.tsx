import React from 'react';
import cls from './ProblemCard.module.css'


interface ProblemCardProps {
    title: string,
    image: string,
    color?: string,
    list: {
        first: string,
        second: string,
        threat: string
    }
}
export const ProblemCard = (props: ProblemCardProps) => {
    const {title, image, list, color} = props


    return (
        <div className={cls.container} style={{
            background: color
                ? `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('${image}')`
                : `linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0)), url('${image}')`,
            color: color ? "white" : "black"
        }}>
            <h2>{title}</h2>
            <ul className={color ? cls.list_white : cls.list}>
                <li>{list.first}</li>
                <li>{list.second}</li>
                <li>{list.threat}</li>
            </ul>
        </div>
    );
};

