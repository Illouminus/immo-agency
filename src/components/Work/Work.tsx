import React from 'react';
import cls from './Work.module.css'
import { workSteps} from './shared/const'
import {WorkCard} from "@/components/Work/WorkCard/WorkCard";
export const Work = () => {
    return (
        <div className={cls.container} id={"work"}>
            <h2>Как мы работаем</h2>
            <div className={cls.cards_container}>
                {workSteps.map((step, index) => (
                    <WorkCard
                        key={index}
                        title={step.title}
                        number={step.number}
                        description={step.description}
                    />
                ))}
            </div>

        </div>
    );
};

