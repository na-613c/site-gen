import { makeAutoObservable } from 'mobx';
import generateElement from "../utils/constructElements"


class TmpPageService {
    constructor() {
        makeAutoObservable(this)
    };

    pageDOM = [];

    _addObj = (key, content, url = null) => {
        this.pageDOM.push({
            key,
            props: { content, url }
        })
    }

    pageDOMtoString = this.pageDOM.map((el) => generateElement[el.key](el.props)).join('');

    saveBtn = () => console.log(this.pageDOM)

    elements = [
        {
            title: 'Кнопки',
            content: [
                {
                    title: 'Левая кнопка',
                    content: (content, url) => this._addObj('BTN_LEFT', content, url)
                }, {
                    title: 'Центральная кнопка',
                    content: (content, url) => this._addObj('BTN_RIGHT', content, url)
                }, {
                    title: 'Правая кнопка',
                    content: (content, url) => this._addObj('BTN_CENTER', content, url)
                }
            ]
        }, {
            title: 'Изображения',
            content: [
                {
                    title: 'Левая картинка',
                    content: (content, url) => this._addObj('IMG_LEFT', content, url)
                }, {
                    title: 'Центральная картинка',
                    content: (content, url) => this._addObj('IMG_RIGHT', content, url)
                }, {
                    title: 'Правая картинка',
                    content: (content, url) => this._addObj('IMG_CENTER', content, url)
                }, {
                    title: 'На всю ширину картинка',
                    content: (content, url) => this._addObj('IMG_JUSTIFY', content, url)
                }
            ]
        }, {
            title: 'Заголовок',
            content: [
                {
                    title: 'Левый текст',
                    content: (content, url) => this._addObj('H2_LEFT', content, url)
                }, {
                    title: 'Центральный текст',
                    content: (content, url) => this._addObj('H2_RIGHT', content, url)
                }, {
                    title: 'Правый текст',
                    content: (content, url) => this._addObj('H2_CENTER', content, url)
                }, {
                    title: 'На всю ширину текст',
                    content: (content, url) => this._addObj('H2_JUSTIFY', content, url)
                }
            ]
        }, {
            title: 'Подзаголовок',
            content: [
                {
                    title: 'Левый текст',
                    content: (content, url) => this._addObj('H3_LEFT', content, url)
                }, {
                    title: 'Центральный текст',
                    content: (content, url) => this._addObj('H3_RIGHT', content, url)
                }, {
                    title: 'Правый текст',
                    content: (content, url) => this._addObj('H3_CENTER', content, url)
                }, {
                    title: 'На всю ширину текст',
                    content: (content, url) => this._addObj('H3_JUSTIFY', content, url)
                }
            ]
        }, {
            title: 'Обычный текст',
            content: [
                {
                    title: 'Левый текст',
                    content: (content, url) => this._addObj('P_LEFT', content, url)
                }, {
                    title: 'Центральный текст',
                    content: (content, url) => this._addObj('P_RIGHT', content, url)
                }, {
                    title: 'Правый текст',
                    content: (content, url) => this._addObj('P_CENTER', content, url)
                }, {
                    title: 'На всю ширину текст',
                    content: (content, url) => this._addObj('P_JUSTIFY', content, url)
                }
            ]
        }
    ]



}

export default TmpPageService;