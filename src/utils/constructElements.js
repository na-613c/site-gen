const generateElement = {
    BTN_LEFT: ({ content='', url }) => `<a href="${url}" align="left"><button type="button" class="ant-btn ant-btn-primary">${content}</button></a>`,
    BTN_RIGHT: ({ content = '', url }) => `<a href="${url}" align="right"><button type="button" class="ant-btn ant-btn-primary">${content}</button></a>`,
    BTN_CENTER: ({ content = '', url }) => `<a href="${url}" align="center"><button type="button" class="ant-btn ant-btn-primary">${content}</button></a>`,

    IMG_LEFT: ({ content = '', url }) => `<img src="${url}" align="left" alt="${content}"></img>`,
    IMG_RIGHT: ({ content = '', url }) => `<img src="${url}" align="right" alt="${content}"></img>`,
    IMG_CENTER: ({ content = '', url }) => `<img src="${url}"  align="centr" alt="${content}"></img>`,
    IMG_JUSTIFY: ({ content = '', url }) => `<img src="${url}" align="justify" alt="${content}"></img>`,

    H2_LEFT: ({ content = '' }) => `<h2 align="left">${content}</h2>`,
    H2_RIGHT: ({ content = '' }) => `<h2 align="right">${content}</h2>`,
    H2_CENTER: ({ content = '' }) => `<h2 align="centr">${content}</h2>`,
    H2_JUSTIFY: ({ content = '' }) => `<h2 align="justify">${content}</h2>`,

    H3_LEFT: ({ content = '' }) => `<h3 align="left">${content}</h3>`,
    H3_RIGHT: ({ content = '' }) => `<h3 align="right">${content}</h3>`,
    H3_CENTER: ({ content = '' }) => `<h3 align="center">${content}</h3>`,
    H3_JUSTIFY: ({ content = '' }) => `<h3 align="justify">${content}</h3>`,

    P_LEFT: ({ content = '' }) => `<p align="left">${content}</p>`,
    P_RIGHT: ({ content = '' }) => `<p align="right">${content}</p>`,
    P_CENTER: ({ content = '' }) => `<p align="center">${content}</p>`,
    P_JUSTIFY: ({ content = '' }) => `<p align="justify">${content}</p>`,
}

export default generateElement;


