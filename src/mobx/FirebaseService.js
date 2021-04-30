import { makeAutoObservable } from 'mobx';
import myFirebase from '../firebase/myFirebase'


class FirebaseService {

    constructor() {

        // this.firebase = myFirebase
        // console.log(this.firebase)

        makeAutoObservable(this)
    };

    // firebase

}

export default FirebaseService;