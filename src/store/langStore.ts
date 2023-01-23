import { makeAutoObservable } from "mobx";

class langStore {

    constructor() {
        makeAutoObservable(this);
    }

    currentLanguage:string = "russian";

    // setActiveRewiwer(id: number) {
    //     this.currentReviewer = id;
    // }


}

export default new langStore();
