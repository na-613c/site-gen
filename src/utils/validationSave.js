const validation = (url, arr) => {

    if (url === '123') {
        return false;
    } else if (url) {
        let content = arr.map((el) => el.content)
        let url = arr.filter((el) => el.isHaveUrl).map((el) => el.url)

        let isEmptyContent = content.includes('') || content.includes(undefined)
        let isEmptyURL = url.includes('') || url.includes(undefined)

        return !(isEmptyContent || isEmptyURL)
    } else {
        return false
    }
}

export default validation;