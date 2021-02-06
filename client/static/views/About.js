import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params){
        super(params);
        this.setTitle("The Wall");
    }

    async getHtml() {
        return `
            <h3>About</h3>
            <p>Head to <a href="/wall" data-link>The Wall</a></p>
        `;
    }
}