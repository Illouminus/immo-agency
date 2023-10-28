import React from 'react';
import cls from './Insurance.module.css'
import Image from "next/image";
import vks from '../../../public/images/Insurance/vsk.png'
import ingo from '../../../public/images/Insurance/ingo.png'
import mango from '../../../public/images/Insurance/mango-1.png'
import sogaz from '../../../public/images/Insurance/sogaz.png'
import maks from '../../../public/images/Insurance/maks.png'
import sber from '../../../public/images/Insurance/sber.png'
export const Insurance = () => {
    return (
        <div className={cls.container} id={"insurance"}>
            <div className={cls.insurance_container}>
                <h2>Страхование объекта </h2>
                <p>
                    Страхование объекта включает в себя получение полиса от надежной страховой компании,
                    что гарантирует компенсацию в случае возникновения ущерба. Мы помогаем собирать все
                    необходимые документы для выплаты и устраняем ущерб, обеспечивая сохранность вашего имущества
                </p>
                <div className={cls.insurance_names}>
                    <div className={cls.insurance_item}>
                        <Image src={vks} alt={'VKS - страховая компания'} />
                    </div>
                    <div className={cls.insurance_item}>
                        <Image src={ingo} alt={'ИнгоСтрах - страховая компания'} />
                    </div>
                    <div className={cls.insurance_item}>
                        <Image src={mango} alt={'МАНГО - страховая компания'} />
                    </div>
                    <div className={cls.insurance_item}>
                        <Image src={sogaz} alt={'СОГАЗ - страховая компания'} />
                    </div>
                    <div className={cls.insurance_item}>
                        <Image src={maks} alt={'МАКС - страховая компания'} />
                    </div>
                    <div className={cls.insurance_item} style={{paddingTop: '20px'}}>
                        <Image src={sber} alt={'Сбербанк - страховая компания'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

