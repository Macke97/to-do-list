class ToDoList extends Base{

  constructor(app){
    super();
    this.app = app;
    this.items = [];
    this.item = new ListItem(this);
  }

  addItem(item){
    this.items.push(item);
    app.render();
    console.log(this.items);

  }

  template(){
    let html = `<div class="row">
                  <div class col-6>
                    <ul class="list-group itemList">`;


    for(let item in this.items) {
      let index = this.items.length - 1;
      this.item.item = this.items[index];
      html += this.item.html();
      index--;
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
