import generateElement from './constructElements'

it('generateElement', () => {
    const props = { content: 'test' }
    const received = generateElement['P_CENTER'](props)
    const expected = "<p align=\"center\" width='50%'>test</p>"
    expect(received).toBe(expected)
})