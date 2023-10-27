import React from 'react';
import cls from './Jurist.module.css'
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import {IoDocumentOutline} from "react-icons/io5";
import {FaArrowsUpDown} from "react-icons/fa6";
import {TbArrowsUpDown} from "react-icons/tb";
export const Jurist = () => {

    const styleDoc = { color: "#E65A00", fontSize: "1.5em" }
    const styleArrow = {color: "#BFBFBF", fontSize: "3em"}
    return (
        <div className={cls.container}>
            <h2>Обеспечиваем юридическую безопасность</h2>
            <p>Обеспечиваем юридическую поддержку  и бухгалтерское сопровождение на всех этапах.</p>
            <p>Если вы не в Москве – подпишем договор дистанционно.</p>
            <div className={cls.schema_block}>
                <div className={cls.proprety}>СОБСТВЕННИК</div>
                <span className={`${cls.arrow} ${cls.arrowLeft}`}>
                    <BsArrowLeft style={styleArrow} />
                </span>
                <div className={cls.docs_property}>
                    <div className={cls.docs_property_item}><IoDocumentOutline style={styleDoc} />Агентский договор</div>
                    <div className={cls.docs_property_item}><IoDocumentOutline style={styleDoc} />Доверенность</div>
                </div>
                <span className={`${cls.arrow} ${cls.arrowRight}`}><BsArrowRight style={styleArrow}/></span>
                <span className={`${cls.arrow} ${cls.arrowDown}`}>
                     <TbArrowsUpDown style={styleArrow} />
                </span>
                <div className={cls.agency}>MAISON</div>
                <span className={`${cls.arrow} ${cls.arrowLeft}`}><BsArrowLeft style={styleArrow} /></span>
                <span className={`${cls.arrow} ${cls.arrowDown}`}>
                     <TbArrowsUpDown style={styleArrow} />
                </span>
                <div className={cls.docs_property}>
                    <div className={cls.docs_property_item}><IoDocumentOutline style={styleDoc} />Договор найма</div>
                    <div className={cls.docs_property_item}><IoDocumentOutline style={styleDoc} />Акт приема-подачи</div>
                </div>
                <span className={`${cls.arrow} ${cls.arrowRight}`}><BsArrowRight style={styleArrow}/></span>
                <div className={cls.proprety}>ЖИЛЕЦ</div>
            </div>
        </div>
    );
};

