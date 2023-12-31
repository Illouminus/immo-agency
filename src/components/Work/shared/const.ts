export interface WorkProcess {
    title: string;
    number: number;
    description: string;
}

export const workSteps: WorkProcess[] = [
    {
        title: 'Оценка и рекомендации',
        number: 1,
        description: 'Анализируем объект и рынок, предлагая эффективные решения для вас.'
    },
    {
        title: 'Поиск арендаторов',
        number: 2,
        description: 'Отбираем ответственных арендаторов для долгосрочного сотрудничества.'
    },
    {
        title: 'Мониторинг платежей',
        number: 3,
        description: 'Контролируем своевременность платежей и состояние вашего объекта.'
    },
    {
        title: 'Решение сопутствующих задач',
        number: 4,
        description: 'Решаем юридические и технические вопросы, связанные с объектом.'
    },
    {
        title: 'Юридическая поддержка',
        number: 5,
        description: 'Сопровождаем вас на всех этапах арендных отношений.'
    },
    {
        title: 'Бухгалтерское сопровождение',
        number: 6,
        description: 'Обеспечиваем корректное ведение бухгалтерии и налогообложение.'
    }
];
