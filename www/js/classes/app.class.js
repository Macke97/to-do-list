class App extends Base {

  constructor(){
    super();
    this.toDoList = new ToDoList(this);
    this.doneList = new DoneList(this);
  }

  render(el){
    //Call render from parent class (Base class)
    super.render(el);
    $('ul.itemList > :first-child .btnUp').addClass('disabled');
    $('ul.itemList > :last-child .btnDown').addClass('disabled');
    JSON._save('todo-list', {app: this});
  }

  click(el, event){
    if(el.hasClass('addBtn')){
      let inputValue = $('.itemName').val();
      let re = /^[\w ]+$/;
      if(inputValue.length < 1 || !($.type(inputValue) === "string") || !inputValue.replace(/^\s+/g, '').length){
        $('#errorModal').modal('toggle');
      } else {
        this.toDoList.addItem(inputValue);
      }
    }

    if(el.hasClass('doneBtn')){
      this.toDoList.makeDone();
    }

    if(el.hasClass('removeBtn')){
      this.doneList.removeItem(el.closest('li').data('item'));
    }
    if(el.hasClass('btnDown')){
      this.toDoList.moveDown(el.closest('li').data('item'));
    }

    if(el.hasClass('btnUp')){
      this.toDoList.moveUp(el.closest('li').data('item'));
    }

    if(el.hasClass('clearDoneBtn')){
      this.doneList.clearAll();
      app.render();
    }
    if(el.hasClass('clearAllBtn')){
      this.toDoList.clearAll();
      this.doneList.clearAll();
      app.render();
    }
  }

  template(){
    return `
    <div>
      <div class="row mt-4">
        <div class="col-12 col-md-8">
          <div class="input-group">
            <input type="text" class="form-control itemName" placeholder="Add to list" aria-label="Add to list">
            <span class="input-group-btn">
              <button class="btn btn-secondary addBtn" type="button">Add</button>
            </span>
          </div>
        </div>
        <!-- End of column -->
        <div class="col-12 col-md-4 mt-2 mt-md-0">
          <button class="btn btn-secondary clearDoneBtn" type="button">Clear all done</button>
          <button class="btn btn-secondary clearAllBtn" type="button">Clear all</button>
        </div>
      </div>
      <!-- End of row -->
      <div class="row mt-4">
        <div class="col-4 nopadding">
          <h1 class="text-center">Todo List</h1>
        </div>
        <div class="col-4 nopadding">
          <button class="doneBtn"><i class="fas fa-angle-double-right doneBtn justify-content-center"></i></button>
        </div>
        <div class="col-4 nopadding mr-3">
          <h1 class="text-left">Done list</h1>
        </div>
      </div>
      <div class="row">
        <div class="todo-list col-6">${this.toDoList.html()}</div>
        <div class="done-list col-6">${this.doneList.html()}</div>
      </div>
    </div>
    `;
  }

}
