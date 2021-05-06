const generateElement = {
    BTN_LEFT: ({ content = '', url }) => `<div class="html-left"><a href="${url}" align="left"><button type="button" class="ant-btn ant-btn-primary">${content}</button></a></div>`,
    BTN_RIGHT: ({ content = '', url }) => `<div class="html-right"><a href="${url}" align="right"><button type="button" class="ant-btn ant-btn-primary">${content}</button></a></div>`,
    BTN_CENTER: ({ content = '', url }) => `<div class="html-center"><a href="${url}" align="center"><button type="button" class="ant-btn ant-btn-primary">${content}</button></a></div>`,

    IMG_LEFT: ({ content = '', url }) => `<div class="html-left"><img src="${url}" alt="${content}"></img></div>`,
    IMG_RIGHT: ({ content = '', url }) => `<div class="html-right"><img src="${url}" alt="${content}"></img></div>`,
    IMG_CENTER: ({ content = '', url }) => `<div class="html-center"><img src="${url}" alt="${content}" width='50%'></img></div>`,
    IMG_JUSTIFY: ({ content = '', url }) => `<div class="html-center"><img src="${url}" width='100%' alt="${content}"></img></div>`,

    H2_LEFT: ({ content = '' }) => `<h2 align="left">${content}</h2>`,
    H2_RIGHT: ({ content = '' }) => `<h2 align="right">${content}</h2>`,
    H2_CENTER: ({ content = '' }) => `<h2 align="center" width='50%' >${content}</h2>`,
    H2_JUSTIFY: ({ content = '' }) => `<h2 align="justify" width='100%' >${content}</h2>`,

    H3_LEFT: ({ content = '' }) => `<h3 align="left">${content}</h3>`,
    H3_RIGHT: ({ content = '' }) => `<h3 align="right">${content}</h3>`,
    H3_CENTER: ({ content = '' }) => `<h3 align="center" width='50%'>${content}</h3>`,
    H3_JUSTIFY: ({ content = '' }) => `<h3 align="center" width='100%'>${content}</h3>`,

    P_LEFT: ({ content = '' }) => `<p align="left">${content}</p>`,
    P_RIGHT: ({ content = '' }) => `<p align="right">${content}</p>`,
    P_CENTER: ({ content = '' }) => `<p align="center" width='50%'>${content}</p>`,
    P_JUSTIFY: ({ content = '' }) => `<p align="center" width='100%'>${content}</p>`,
}

export default generateElement;


