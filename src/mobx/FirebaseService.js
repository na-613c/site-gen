import { makeAutoObservable } from 'mobx';
import { myFirebase } from '../firebase/myFirebase'
import generateElement from "../utils/constructElements"

const fb = myFirebase.firebase;

class FirebaseService {

    sites = [];
    isLoading = true;
    email
    displayName
    allUrl = []

    constructor() {

        makeAutoObservable(this)
        fb.database().ref().on('value', (snapshot) => {
            const sites = [];

            snapshot.forEach((child) => {
                sites.push({
                    uid: child.key,
                    ...child.val()
                });
            });

            this.sites = sites

            this.allUrl = sites.map((val) => val.url);

            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }

    addWebsite = (site) => {
        fb.database().ref().push({
            ...site,
            email: this.email,
            displayName: this.displayName
        });
    }

    removeWebsite = (uid) => {
        fb.database().ref().child(uid).remove();
    }

    setUser = (user) => {
        this.email = user.email;
        this.displayName = user.displayName;
    }

    getURLs = () => {
        return this.allUrl
    }
}

export default FirebaseService;