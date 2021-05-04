export default class ElementDOM {

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

    onChangeContent = (value) => {
        this.content = value;
    }

    onChangeURL = (value) => {
        this.url = value;
    }

}
