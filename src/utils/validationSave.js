const validation = (url, arr) => {

    if (url) {
        let content = arr.map((el) => el.content)
        let url = arr.filter((el) => el.isHaveUrl).map((el) => el.url)

        let isEmptyContent = content.includes('') || content.includes(undefined)
        let isEmptyURL = url.includes('') || url.includes(undefined)

        return !(isEmptyContent || isEmptyURL || arr.length === 0)
    } else {
        return false
    }
}

export default validation;