import React from 'react';
import cls from './Insurance.module.css'
import Image from "next/image";
import pego from '../../../public/images/Insurance/pego.svg'
export const Insurance = () => {
	return (
		<div className={cls.container} id={"insurance"}>
			<div className={cls.insurance_container}>
				<div className={cls.insurrance_card}>
					<h2>Страхование объекта </h2>
					<p>
						Страхование объекта надежной страховой компанией РЕСО-Гарантия, что обеспечивает компенсацию в случае возникновения ущерба.
						Мы помогаем собирать все необходимые документы для выплаты, устраняем ущерб, обеспечивая сохранность вашего имущества.
					</p>
				</div>

				<div className={cls.insurance_names}>
					<div className={cls.insurance_item}>
						<Image src={pego} alt={'РЕСО - страховая компания'} />
					</div>
				</div>
			</div>
		</div>
	);
};

