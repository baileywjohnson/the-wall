import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params){
        super(params);
        this.setTitle("The Wall");
    }

    async getHtml() {
        return `
            <h3 class="sectionTitle">Create A Post</h3>
        `;
    }
}