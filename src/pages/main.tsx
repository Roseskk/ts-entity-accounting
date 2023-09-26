import React from 'react';
import ProjectSlider from "../components/ui/slider/slider";

const Main = () => {
    return(
        <div className={'flex flex-col mt-[25px]'}>
            <h1 className={'text-center text-[30px] uppercase font-bold'}>Some title...</h1>
            <ProjectSlider />
            <div className="container mx-auto py-12 text-center">
                <h2 className="text-3xl font-semibold mb-4">Наша Команда</h2>
                <p className="text-lg mb-8">
                    Мы - команда выдающихся профессионалов в сфере веб-разработки и дизайна, готовых воплотить в жизнь
                    ваши самые амбициозные идеи. Наши знания и опыт - ваш ключ к успеху. Наша команда состоит из 4
                    высококвалифицированных специалистов, каждый из которых обладает уникальными навыками и опытом,
                    гарантируя выдающееся качество наших проектов.
                </p>
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow-lg h-full">
                            <img src="front-end-dev1.jpg" alt="Фронтенд-Разработчик 1" className="w-32 h-32 mx-auto rounded-full"/>
                                <h3 className="text-xl font-semibold mt-4">Иван Иванов</h3>
                                <p className="text-sm text-gray-600">Фронтенд-разработчик</p>
                                <p className="text-sm mt-2">Иван обладает непревзойденным чувством стиля и
                                    функциональности. Он создает пользовательские интерфейсы, которые не только красивы,
                                    но и максимально удобны для ваших пользователей.</p>
                                <div className="mt-4">
                                    <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                                    <a href="#" className="text-blue-500 hover:underline ml-2">GitHub</a>
                                </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow-lg h-full">
                            <img src="front-end-dev2.jpg" alt="Фронтенд-Разработчик 2" className="w-32 h-32 mx-auto rounded-full"/>
                                <h3 className="text-xl font-semibold mt-4">Анна Петрова</h3>
                                <p className="text-sm text-gray-600">Фронтенд-разработчик</p>
                                <p className="text-sm mt-2">Анна - опытная разработчица, специализирующаяся на создании
                                    интерфейсов, которые заставят пользователей влюбиться в ваш продукт.</p>
                                <div className="mt-4">
                                    <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                                    <a href="#" className="text-blue-500 hover:underline ml-2">GitHub</a>
                                </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow-lg h-full">
                            <img src="back-end-dev.jpg" alt="Бэкенд-Разработчик" className="w-32 h-32 mx-auto rounded-full"/>
                                <h3 className="text-xl font-semibold mt-4">Павел Сидоров</h3>
                                <p className="text-sm text-gray-600">Бэкенд-разработчик</p>
                                <p className="text-sm mt-2">Павел - наш бэкенд-гуру, который заботится о надежности и
                                    производительности ваших проектов. Он делает ваш сайт готовым к масштабированию.</p>
                                <div className="mt-4">
                                    <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                                    <a href="#" className="text-blue-500 hover:underline ml-2">GitHub</a>
                                </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow-lg h-full">
                            <img src="designer.jpg" alt="Дизайнер" className="w-32 h-32 mx-auto rounded-full"/>
                                <h3 className="text-xl font-semibold mt-4">Мария Ковалева</h3>
                                <p className="text-sm text-gray-600">Дизайнер</p>
                                <p className="text-sm mt-2">Мария создает эстетичные и оригинальные дизайны, которые
                                    выделяют ваш бренд среди конкурентов и привлекают внимание клиентов.</p>
                                <div className="mt-4">
                                    <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                                    <a href="#" className="text-blue-500 hover:underline ml-2">Behance</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;