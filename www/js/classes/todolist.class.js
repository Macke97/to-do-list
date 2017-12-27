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
    let thing = this.items[index];
    if((index + 1) < this.items.length) {
      this.items[index] = this.items[index + 1];
      this.items[index + 1] = thing;
    }
    app.render();
  }

  moveUp(text){
    let index = this.items.findIndex((item)=> item.item == text);
    let thing = this.items[index];
    if(index > 0) {
      this.items[index] = this.items[index - 1];
      this.items[index - 1] = thing;
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
  }

  template(){
    let html = `<div class="row ml-4">
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
