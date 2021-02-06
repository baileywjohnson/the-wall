import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params){
        super(params);
        this.setTitle("The Wall");
        console.log(this.params);
    }

    async getHtml() {
        return `
            <h3>Viewing Entry #${this.params.id}</h3>
        `;
    }
}