import ElementDOM from "./ElementDOM";


it('onChangeContent', () => {
    const testElementDOM = new ElementDOM(1, 'key', true, 'кнопка')
    testElementDOM.onChangeContent('text')
    const received = testElementDOM.content;
    const expected = 'text';
    expect(received).toBe(expected)
})

it('onChangeURL', () => {
    const testElementDOM = new ElementDOM(1, 'key', true, 'кнопка')
    testElementDOM.onChangeURL('url')
    const received = testElementDOM.url;
    const expected = 'url';
    expect(received).toBe(expected)
})