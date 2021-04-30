import { makeAutoObservable, configure } from "mobx"

import TmpPageService from "./TmpPageService";
import FirebaseService from "./FirebaseService";


configure({ enforceActions: 'observed' });

class Store {
    constructor() {
        this.tmpPageService = new TmpPageService(this);
        this.firebaseService = new FirebaseService(this);

        makeAutoObservable(this)
    }

    tmpPageService;
    firebaseService;

}


export default new Store();