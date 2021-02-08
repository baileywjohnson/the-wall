import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params){
        super(params);
        this.setTitle("The Wall");
    }

    async getHtml() {

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        return `
            <div class="sectionTitle">
                <h3>${today}</h3>
            </div>

            <div class="post">
                <p><b>John Doe</b></p>
                <p><b>#13425</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend leo et ullamcorper ornare. Phasellus ex lacus, rhoncus eu aliquam vel, vulputate eget neque. Fusce vestibulum lectus eu dictum efficitur. Praesent vulputate volutpat risus ut scelerisque. Aliquam tempus, lorem vitae rutrum imperdiet, ex ipsum accumsan tortor, ultrices auctor mauris justo nec enim. Vivamus ut lacus at sapien aliquet gravida. In hac habitasse platea dictumst. Cras luctus, odio ac aliquam mattis, orci urna aliquet risus, sed aliquet orci ligula sit amet nunc. Vivamus pretium augue at est vestibulum maximus. Suspendisse mattis risus at pharetra rutrum. Cras eget ligula ac velit placerat lacinia quis a lorem. Aliquam tincidunt dui sit amet lectus eleifend, vitae posuere nibh interdum. </p>
            </div>
            <div class="post">
                <p><b>Jane Doe</b></p>
                <p><b>#13424</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque et nunc ac porta. Sed vitae molestie metus, vel sodales neque. Mauris vulputate, dolor vel gravida aliquet, nibh odio mollis tortor, sit amet volutpat nibh ipsum vel orci. Duis tempus eros vitae aliquet pharetra. Phasellus lacus leo, vehicula eu mi sit amet, dignissim tincidunt purus. Mauris faucibus nisi non lectus dictum euismod. Donec a magna faucibus, semper odio et, sodales massa. Proin vel feugiat risus. Nulla sit amet orci lacinia, dictum orci sed, interdum erat. </p>
            </div>
            <div class="post">
                <p><b>Steve Doe</b></p>
                <p><b>#13423</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius malesuada arcu in semper. Nulla mi magna, eleifend nec nibh quis, sodales viverra ligula. Ut risus lectus, sodales sed feugiat in, ultrices vitae mi. Quisque ac enim pharetra, vulputate velit sit amet, tincidunt dui. Nulla facilisi. Aenean imperdiet, ante nec accumsan eleifend, felis ex volutpat lorem, et finibus ex ante in enim. Nullam augue lacus, venenatis ac tellus sed, tempus eleifend magna. Suspendisse potenti. Cras ultricies ultricies neque sed posuere. Nullam efficitur rutrum massa, vitae feugiat risus vehicula eleifend. Vestibulum id ultrices nisl, vel viverra eros. Integer ut turpis nec lorem fermentum viverra. </p>
            </div>
            <div class="post">
                <p>Megan Doe</p>
                <p>#13422</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum eget turpis molestie consectetur. Praesent condimentum ligula felis, quis posuere magna luctus vel. Vivamus rutrum et ante vel rutrum. Vivamus non sapien libero. Proin sodales et sapien non ullamcorper. Nulla consequat ante ultricies metus tristique pulvinar. Phasellus eleifend convallis rhoncus. Mauris luctus nibh sit amet gravida pellentesque. Morbi mi ipsum, feugiat et pharetra sed, pulvinar in nulla. Integer eu condimentum justo. In mi enim, commodo quis elit sit amet, lacinia laoreet metus. Donec vitae mattis libero, commodo accumsan libero. Curabitur volutpat nec risus non placerat. Donec ut urna auctor, placerat magna malesuada, tristique urna. Pellentesque vel euismod ipsum, at euismod est. </p>
            </div>
            <div class="post">
                <p>Bob Doe</p>
                <p>#13421</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit lorem a quam congue sodales. Aenean ut risus vel enim scelerisque rutrum sed et nibh. Nulla magna lorem, ultricies in laoreet ut, interdum dapibus leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac aliquet nisl, non congue nisi. In ac condimentum nisl. Integer placerat malesuada dolor, vel rutrum ipsum tincidunt ac. Vivamus tempus vehicula maximus. Vivamus sagittis lacus quis ligula accumsan, et venenatis lectus dapibus. Nunc varius urna id lectus lacinia rhoncus. Sed viverra dui et efficitur tempor. Nunc ac pellentesque leo, et sollicitudin felis. In quis nibh dictum, tempus enim non, feugiat leo. Donec pretium nunc sed sollicitudin semper. </p>
            </div>
            <div class="post">
                <p>Jenny Doe</p>
                <p>#13420</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit lorem, vulputate non scelerisque sollicitudin, dapibus quis ipsum. Mauris non turpis mauris. Sed sit amet tellus sed orci interdum vehicula. Ut vitae mauris porttitor, tristique purus sed, rutrum justo. Suspendisse ultrices laoreet ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer a ipsum placerat, vulputate neque sed, dignissim neque. Pellentesque pharetra arcu tellus, ac volutpat quam volutpat eu. Suspendisse potenti. Ut malesuada scelerisque nunc. </p>
            </div>
        `;
    }
}