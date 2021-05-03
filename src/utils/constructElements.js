const generateElement = {
    BTN_LEFT: ({ content='', url }) => `<a href="${url}"><button type="button" class="ant-btn ant-btn-primary">${content}</button></a>`,
    BTN_RIGHT: ({ content='', url }) => `<a href="${url}"><button type="button" class="ant-btn ant-btn-primary">${content}</button></a>`,
    BTN_CENTER: ({ content='', url }) => `<a href="${url}"><button type="button" class="ant-btn ant-btn-primary">${content}</button></a>`,

    IMG_LEFT: ({ content='', url }) => `<img src="${url}" alt="${content}"></img>`,
    IMG_RIGHT: ({ content='', url }) => `<img src="${url}" alt="${content}"></img>`,
    IMG_CENTER: ({ content='', url }) => `<img src="${url}" alt="${content}"></img>`,
    IMG_JUSTIFY: ({ content='', url }) => `<img src="${url}" alt="${content}"></img>`,

    H2_LEFT: ({ content='' }) => `<h2>${content}</h2>`,
    H2_RIGHT: ({ content='' }) => `<h2>${content}</h2>`,
    H2_CENTER: ({ content='' }) => `<h2>${content}</h2>`,
    H2_JUSTIFY: ({ content='' }) => `<h2>${content}</h2>`,

    H3_LEFT: ({ content='' }) => `<h3>${content}</h3>`,
    H3_RIGHT: ({ content='' }) => `<h3>${content}</h3>`,
    H3_CENTER: ({ content='' }) => `<h3>${content}</h3>`,
    H3_JUSTIFY: ({ content='' }) => `<h3>${content}</h3>`,

    P_LEFT: ({ content='' }) => `<p>${content}</p>`,
    P_RIGHT: ({ content='' }) => `<p>${content}</p>`,
    P_CENTER: ({ content='' }) => `<p>${content}</p>`,
    P_JUSTIFY: ({ content='' }) => `<p>${content}</p>`,
}

export default generateElement;


