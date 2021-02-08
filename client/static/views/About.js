import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params){
        super(params);
        this.setTitle("The Wall");
    }

    async getHtml() {
        return `
            <h3 class="sectionTitle">About "The Wall"</h3>
            <div id="aboutContent">
            <p>The Wall is a mock/concept social media app where users could only post once per day to the wall (which would be cleared every 24 hours).  No login would be required, and post-restrictions would be based on access IP address.  Posts from previous days could be viewed but in order to access them the ID of the post would need to be known.</p>
            <p>The ability to create posts is <b>intentionally disabled</b> as this is just a simple <b>demo for client-side routing in vanilla JS</b> and the app is not currently attached to any data-store.</p>
            <a href="/wall" class="btn btn-outline-light" data-link>Head to The Wall</a>
            </div>
        `;
    }
}