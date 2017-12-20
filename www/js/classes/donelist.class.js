class DoneList extends Base{

  constructor(app){
    super();
    this.app = app;
    this.items = [];
  }

  addItem(item){
    this.items.unshift(new ListItem(this, item));
    // console.log(this.items);
  }

  template(){
    let html = `<div class="row ml-4">
                  <div class col-6>
                    <ul class="list-group itemList">`;

    for(let item of this.items) {
      html += this.listItem.template();
    }

    html += `</ul>
          </div>
          <!-- End of row -->
        </div>`

    return html;
  }
}
