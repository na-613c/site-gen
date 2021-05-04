import { makeAutoObservable } from 'mobx';
import { myFirebase } from '../firebase/myFirebase'
import generateElement from "../utils/constructElements"

const fb = myFirebase.firebase;

class FirebaseService {

    sites = [];
    isLoading = true;

    constructor() {

        makeAutoObservable(this)
        fb.database().ref().on('value', (snapshot) => {
            const sites = [];

            snapshot.forEach((child) => {
                sites.push({
                    ...child.val()
                });
            });

            this.sites = sites.map((val) => {
                return {
                    url: val.url,
                    pageDom: val.pageDOM.map((el) => {
                        let props = { content: el.content, url: el.url }
                        return generateElement[el.key](props)
                    }).join('')
                }
            });


            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }

    addWebsite = (site) => {
        fb.database().ref().push(site);
    } 

    // removeWebsite = (product) => {
    //     fb.database().ref().orderByValue().child(product.id).set({});
    // }

    // get totalsites() {
    //     return this.sites.length;
    // }
}

export default FirebaseService;