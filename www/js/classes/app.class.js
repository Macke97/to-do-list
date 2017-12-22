class App extends Base {

  constructor(){
    super();
    this.toDoList = new ToDoList(this);
    this.doneList = new DoneList(this);
  }

  render(el){
    //Call render from parent class (Base class)
    super.render(el);
    // this.toDoList.render('.todo-list')
    // toDoList.render('.todo-list')
    JSON._save('todo-list', {app: this});
  }

  click(el, event){
    if(el.hasClass('addBtn')){
      this.toDoList.addItem($('.itemName').val());
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
  }

  template(){
    return `
    <div>
      <div class="row mt-4">
        <div class="col-12 col-md-6">
          <div class="input-group">
            <input type="text" class="form-control itemName" placeholder="Add to top" aria-label="Add to list">
            <span class="input-group-btn">
              <button class="btn btn-secondary addBtn" type="button">Add</button>
            </span>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-4 nopadding">
          <h1>Todo List</h1>
        </div>
        <div class="col-4 nopadding">
          <i class="fas fa-angle-double-right doneBtn"></i>
        </div>
        <div class="col-4 nopadding mr-3">
          <h1>Done list</h1>
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
