class ToDoList extends Base{

  constructor(app){
    super();
    this.app = app;
    this.items = [];
  }



  addItem(item){
    this.items.unshift(new ListItem(this, item));
    app.render();
    let input = $('.itemName');
    input.focus();
    input.select();
    console.log(this.items);
  }

  removeItem(text){
    let removeIndex = this.items.findIndex((item)=> item.item == text);
    console.log(removeIndex, text);
    if (removeIndex >= 0) {
      this.items.splice(removeIndex, 1);
    }
  }

  clearAll(){
    this.items.length = 0;
  }



  moveDown(text){
    let index = this.items.findIndex((item)=> item.item == text);

    if(index + 1 < this.items.length) {
      this.items[index] = this.items[index + 1];
      this.items[index + 1] = item.item; // Console gives "item is not defined"
    }
    app.render();
  }




  makeDone(){
    $('.checkbox:checked').each((i, box)=>{
      let text = $(box).parent().data('item');
      app.doneList.addItem(text);
      this.removeItem(text);
    });
    app.render();
    console.log("Done list array: " + app.doneList.items);
    console.log("Todo array: " + this.items);
  }

  template(){
    let html = `<div class="row ml-4">
                  <div class col-6>
                    <ul class="list-group itemList">`;

    for(let item of this.items) {
      console.log(item);
      html += item.template();
    }

    html += `</ul>
          </div>
          <!-- End of row -->
        </div>`

    return html;

  }

}
