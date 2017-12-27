class DoneList extends Base{

  constructor(app){
    super();
    this.app = app;
    this.items = [];
  }

  addItem(item){
    this.items.unshift(new ListItem(this, item));
  }

  removeItem(text){

    let removeIndex = this.items.findIndex((item)=> item.item == text);
    if (removeIndex >= 0) {
      this.items.splice(removeIndex, 1);
    }
    app.render();
  }

  clearAll(){
    this.items.length = 0;
  }

  template(){
    let html = `<div class="row mr-4">
                  <div class col-6>
                    <ul class="list-group itemList">`;

    for(let item of this.items) {
      html += item.template();
    }

    html += `</ul>
          </div>
          <!-- End of row -->
        </div>`

    return html;
  }
}
