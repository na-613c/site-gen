import TmpPageService from "./TmpPageService";
import { makeAutoObservable } from "mobx"
import ElementDOM from "../model/ElementDOM"



class TestStore {
    constructor() {
        this.tmpPageService = new TmpPageService(this.firebaseService);
        makeAutoObservable(this)
    }
    tmpPageService;
}


it('addElement + getElement', () => {
    const testStore = new TestStore()
    testStore.tmpPageService.elements[2].content[0].content('test text');

    const received = testStore.tmpPageService.getPageDOM().toString()
    const expected = [new ElementDOM(0, "H2_LEFT", false, "test text")].toString()

    expect(received).toBe(expected)
})


it('removeElement', () => {
    const testStore = new TestStore()

    testStore.tmpPageService.elements[2].content[0].content('test text');
    testStore.tmpPageService.removeElement(0)

    const received = testStore.tmpPageService.pageDOM.length.toString()
    const expected = '0'

    expect(received).toBe(expected)
})

it('clean', () => {
    const testStore = new TestStore()

    testStore.tmpPageService.url = '',
    testStore.tmpPageService.pageDOM = ['test'];
    testStore.tmpPageService.pageDOMtoString = ['test']

    testStore.tmpPageService.clean()

    const received = testStore.tmpPageService.url.toString()
    const expected = ''

    expect(received).toBe(expected)
})

it('clean', () => {
    const testStore = new TestStore()

    testStore.tmpPageService.setUrl('test url');


    const received = testStore.tmpPageService.url.toString()
    const expected = 'test url'

    expect(received).toBe(expected)
})


