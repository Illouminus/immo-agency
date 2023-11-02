import React from 'react';
import cls from './Problems.module.css'
import {ProblemCard} from "@/components/Problems/ProblemCard/ProblemCard";
import {problems} from './shared/const'
export const Problems = () => {
    return (
        <div className={cls.container} id={"problems"}>
            <h2> Мы решим за вас проблемы если </h2>
            <div className={cls.card_container}>
                {problems.map((card, index) => (
                    <ProblemCard
                        key={index}
                        title={card.title}
                        image={card.image}
                        list={card.list}
                        color={card.color}
                    />
                ))}
            </div>

        </div>
    );
};

