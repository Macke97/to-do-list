class ToDoList extends Base{

  constructor(app){
    super();
    this.app = app;
    this.items = [];
  }

  addItem(){
    let item = $('.itemName').val();
    this.items.push(item);
    this.app.render();
  }

  template(){
    let html = `<div class="row">
                  <div class col-6>
                    <ul class="list-group itemList">`;

    for(item of this.items) {
      html += item.html();
    }

    html += `</ul>
          </div>
          <!-- End of row -->
        </div>`

    return html;

    // return `
    // <div col-6>
    //   <ul class="list-group">
    //     <li class="list-group-item">${this.items}</li>
    //   </ul>
    // </div>`;
  }

  // template2(){
  //   return `
  //   <div>
  //     ${this.item}
  //   </div>
  //   `
  // }

}
