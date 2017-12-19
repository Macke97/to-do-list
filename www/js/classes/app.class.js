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

  }

  template(){
    return `
    <div>
      <div class="row mt-4">
        <div class="col-4">
          <div class="input-group">
            <input type="text" class="form-control itemName" placeholder="Add to top" aria-label="Add to top">
            <span class="input-group-btn">
              <button class="btn btn-secondary addBtn" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-4 nopadding">
          <h1>Todo List</h1>
        </div>
        <div class="col-4 nopadding">
          <i class="fas fa-angle-double-right arrow"></i>
        </div>
        <div class="col-4 nopadding">
          <h1>Done list</h1>
        </div>
      </div>
      <div class="row">
        <div class="todo-list">${this.toDoList.html()}</div>
        <div class="done-list"></div>
      </div>
    </div>
    `;
  }

}
