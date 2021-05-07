import FirebaseService from "./FirebaseService";
import { makeAutoObservable } from "mobx"

class TestStore {
    constructor() {
        this.firebaseService = new FirebaseService(this);
        makeAutoObservable(this)
    }
    firebaseService;
}


it('getURLs', () => {
    const testStore = new TestStore()
    const received = testStore.firebaseService.getURLs();
    expect(received).toBeDefined()
})