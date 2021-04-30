import { makeAutoObservable } from 'mobx';

class GeneratePageService {
    constructor() {
        makeAutoObservable(this)
    };

    

    elements = [
        {
            title: 'Кнопки11111111111',
            content: [
                {
                    title: 'Левая кнопка',
                    content: (content) => `<button type="button" class="ant-btn ant-btn-primary">${content}<button>`
                }, {
                    title: 'Центральная кнопка',
                    content: (content) => `<button type="button" class="ant-btn ant-btn-primary">${content}<button>`
                }, {
                    title: 'Правая кнопка',
                    content: (content) => `<button type="button" class="ant-btn ant-btn-primary">${content}<button>`
                }
            ]
        }, {
            title: 'Изображения',
            content: [
                {
                    title: 'Левая картинка',
                    content: '<>'
                }, {
                    title: 'Центральная картинка',
                    content: '<>'
                }, {
                    title: 'Правая картинка',
                    content: '<>'
                }, {
                    title: 'На всю ширину картинка',
                    content: '<>'
                }
            ]
        }, {
            title: 'Изображения',
            content: [
                {
                    title: 'Левая картинка',
                    content: '<>'
                }, {
                    title: 'Центральная картинка',
                    content: '<>'
                }, {
                    title: 'Правая картинка',
                    content: '<>'
                }, {
                    title: 'На всю ширину картинка',
                    content: '<>'
                }
            ]
        }, {
            title: 'Заголовок',
            content: [
                {
                    title: 'Левый текст',
                    content: '<>'
                }, {
                    title: 'Центральный текст',
                    content: '<>'
                }, {
                    title: 'Правый текст',
                    content: '<>'
                }, {
                    title: 'На всю ширину текст',
                    content: '<>'
                }
            ]
        }, {
            title: 'Подзаголовок',
            content: [
                {
                    title: 'Левый текст',
                    content: '<>'
                }, {
                    title: 'Центральный текст',
                    content: '<>'
                }, {
                    title: 'Правый текст',
                    content: '<>'
                }, {
                    title: 'На всю ширину текст',
                    content: '<>'
                }
            ]
        }, {
            title: 'Обычный текст',
            content: [
                {
                    title: 'Левый текст',
                    content: '<>'
                }, {
                    title: 'Центральный текст',
                    content: '<>'
                }, {
                    title: 'Правый текст',
                    content: '<>'
                }, {
                    title: 'На всю ширину текст',
                    content: '<>'
                }
            ]
        }
    ]

}

export default GeneratePageService;
