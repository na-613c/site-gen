import validation from './validationSave'


it('Have url', () => {
    const received = validation('URL', []).toString()
    const expected = false.toString()
    expect(received).toBe(expected)
})

it('Have arr', () => {
    const received = validation(null, [{ content: 'content', isHaveUrl: true, url: '123' }]).toString()
    const expected = false.toString()
    expect(received).toBe(expected)
})

it('dont Have arr and url', () => {
    const received = validation(null, [{ content: null, isHaveUrl: true, url: null }]).toString()
    const expected = false.toString()
    expect(received).toBe(expected)
})

it('true', () => {
    const received = validation('URL', [{ content: 'content', isHaveUrl: true, url: '123' }]).toString()
    const expected = true.toString()
    expect(received).toBe(expected)
})