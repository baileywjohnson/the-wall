export default class {
    constructor(params){
        //Handle Parameters
        this.params = params;
    }

    setTitle(title){
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}