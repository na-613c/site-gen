import { makeAutoObservable } from 'mobx';
import generateElement from "../utils/constructElements"


class ElementDOM {

    constructor(id, key, url, title) {
        this.id = id
        this.key = key
        this.title = title
        this.isHaveUrl = url
    }

    isHaveUrl
    id
    key
    title
    content
    url
    DOMtoString = '';

    // _generateString = () => {
    //     let props = { content: this.content, url: this.url }
    //     this.DOMtoString = generateElement[this.key](props)
    // }

    onChangeContent = (value) => {
        this.content = value;
    }

    onChangeURL = (value) => {
        this.url = value;
    }

}


class TmpPageService {
    constructor() {
        makeAutoObservable(this)
    };

    pageDOM = [];
    pageDOMtoString = [];

    renderPageDOM = () => {
        this.pageDOMtoString = this.pageDOM.map((el) => {
            let props = { content: el.content, url: el.url }
            return {
                id: el.id,
                string: generateElement[el.key](props)
            }
        })
    }

    _addObj = (key, title, url = false) => {
        let elementDOM = new ElementDOM(this._getUniqKey(), key, url, title)
        this.pageDOM.push(elementDOM)
    }

    getPageDOM = () => this.pageDOM

    removeElement = (id) => {
        const pageDOM = this.pageDOM;
        this.pageDOM = pageDOM.filter((el) => el.id !== id)
    }

    _getUniqKey = () => {
        const max = this.pageDOM.reduce((acc, curr) => acc.id > curr.id ? acc.id : curr.id, -1);
        return max + 1;
    }


    saveBtn = () => {
        // console.log(this.pageDOM)

        console.log(this.pageDOMtoString, ' getPageDOMtoString')

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
                    content: (title) => this._addObj('BTN_RIGHT', title, true)
                }, {
                    title: 'Правая кнопка',
                    content: (title) => this._addObj('BTN_CENTER', title, true)
                }
            ]
        }, {
            title: 'Изображения',
            content: [
                {
                    title: 'Левая картинка',
                    content: (title) => this._addObj('IMG_LEFT', title, true)
                }, {
                    title: 'Центральная картинка',
                    content: (title) => this._addObj('IMG_RIGHT', title, true)
                }, {
                    title: 'Правая картинка',
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
                    title: 'Центральный текст',
                    content: (title) => this._addObj('H2_RIGHT', title)
                }, {
                    title: 'Правый текст',
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
                    title: 'Центральный текст',
                    content: (title) => this._addObj('H3_RIGHT', title)
                }, {
                    title: 'Правый текст',
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
                    title: 'Центральный текст',
                    content: (title) => this._addObj('P_RIGHT', title)
                }, {
                    title: 'Правый текст',
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