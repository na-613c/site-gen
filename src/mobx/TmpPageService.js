import { makeAutoObservable } from 'mobx';
import generateElement from "../utils/constructElements"
import validation from "../utils/validationSave"
import ElementDOM from "../model/ElementDOM"


class TmpPageService {
    constructor(store) {
        makeAutoObservable(this)
        this.store = store;
    };

    pageDOM = [];
    pageDOMtoString = [];
    url = ''
    store;
    urls

    renderPageDOM = () => {
        this.pageDOMtoString = this.pageDOM.map((el) => {
            let props = { content: el.content, url: el.url }
            return {
                id: el.id,
                string: generateElement[el.key](props)
            }
        })

        this.saveBtn = { ...this.saveBtn, isValid: validation(this.url, this.getPageDOM()) }
    }

    setUrl = (value) => {
        this.url = value;
        this.saveBtn = { ...this.saveBtn, isValid: validation(this.url, this.getPageDOM()) }
    }

    getPageDOM = () => this.pageDOM

    _getPageDOMtoString = () => this.pageDOMtoString.map((el) => el.string).join('')


    removeElement = (id) => {
        const pageDOM = this.pageDOM;
        this.pageDOM = pageDOM.filter((el) => el.id !== id)
    }

    _getUniqKey = () => {
        const max = this.pageDOM.reduce((acc, curr) => acc.id > curr.id ? acc.id : curr.id, -1);
        return max + 1;
    }

    _addObj = (key, title, url = false) => {
        let elementDOM = new ElementDOM(this._getUniqKey(), key, url, title)
        this.pageDOM.push(elementDOM)
        this.saveBtn = { ...this.saveBtn, isValid: validation(this.url, this.getPageDOM()) }
    }

    clean = () => {
        this.pageDOM = [];
        this.pageDOMtoString = [];
        this.url = ''
    }

    saveBtn = {
        isValid: validation(this.url, this.getPageDOM()),
        onClick: () => {
            this.store.firebaseService.addWebsite({
                pageDOM: this._getPageDOMtoString(),
                url: this.url
            })
            this.clean()
        }
    }

    elements = [
        {
            title: 'Кнопки',
            content: [
                {
                    title: 'Левая кнопка',
                    content: (title) => this._addObj('BTN_LEFT', title, true)
                }, {
                    title: 'Центральная кнопка',
                    content: (title) => this._addObj('BTN_CENTER', title, true)
                }, {
                    title: 'Правая кнопка',
                    content: (title) => this._addObj('BTN_RIGHT', title, true)
                }
            ]
        }, {
            title: 'Изображения',
            content: [
                {
                    title: 'Левая картинка',
                    content: (title) => this._addObj('IMG_LEFT', title, true)
                }, {
                    title: 'Правая картинка',
                    content: (title) => this._addObj('IMG_RIGHT', title, true)
                }, {
                    title: 'Центральная картинка',
                    content: (title) => this._addObj('IMG_CENTER', title, true)
                }, {
                    title: 'На всю ширину картинка',
                    content: (title) => this._addObj('IMG_JUSTIFY', title, true)
                }
            ]
        }, {
            title: 'Заголовок',
            content: [
                {
                    title: 'Левый текст',
                    content: (title) => this._addObj('H2_LEFT', title)
                }, {
                    title: 'Правый текст',
                    content: (title) => this._addObj('H2_RIGHT', title)
                }, {
                    title: 'Центральный текст',
                    content: (title) => this._addObj('H2_CENTER', title)
                }, {
                    title: 'На всю ширину текст',
                    content: (title) => this._addObj('H2_JUSTIFY', title)
                }
            ]
        }, {
            title: 'Подзаголовок',
            content: [
                {
                    title: 'Левый текст',
                    content: (title) => this._addObj('H3_LEFT', title)
                }, {
                    title: 'Правый текст',
                    content: (title) => this._addObj('H3_RIGHT', title)
                }, {
                    title: 'Центральный текст',
                    content: (title) => this._addObj('H3_CENTER', title)
                }, {
                    title: 'На всю ширину текст',
                    content: (title) => this._addObj('H3_JUSTIFY', title)
                }
            ]
        }, {
            title: 'Обычный текст',
            content: [
                {
                    title: 'Левый текст',
                    content: (title) => this._addObj('P_LEFT', title)
                }, {
                    title: 'Правый текст',
                    content: (title) => this._addObj('P_RIGHT', title)
                }, {
                    title: 'Центральный текст',
                    content: (title) => this._addObj('P_CENTER', title)
                }, {
                    title: 'На всю ширину текст',
                    content: (title) => this._addObj('P_JUSTIFY', title)
                }
            ]
        }
    ]

}

export default TmpPageService;