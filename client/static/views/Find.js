import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params){
        super(params);
        this.setTitle("The Wall");
    }

    async getHtml() {
        return `
            <h3 class="sectionTitle">Find a Specific Post</h3>
            <div id="findContent">
                <form id="findPostForm">
                    <input class="form-control" type="text" id="postIDInput" name="postID" placeholder="ex. 13425"><br>
                    <button id="postFormButton" class="btn btn-outline-light" type="submit">Search</button>
                </form>
                <p>(If you search for a post that doesn't exist the default post will be displayed.)</p>
            </div>
        `;
    }
}