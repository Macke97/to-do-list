class App extends Base {

  constructor(){
    super();
    this.toDoList = new ToDoList(this);
  }

  render(el){
    //Call render from parent class (Base class)
    super.render(el);
    // this.toDoList.render('.todo-list')
    JSON._save('todo-list', {app: this});
  }

  click(el, event){
    if(el.hasClass('addItem')){
      this.toDoList.addItem();
    }

  }

  template(){
    return `
    <div>
      <div class="row mt-4">
        <div class="col-6">
          <div class="input-group">
            <input type="text" class="form-control itemName" placeholder="Add to top" aria-label="Add to top">
            <span class="input-group-btn">
              <button class="btn btn-secondary addItem" type="button">Go!</button>
            </span>
          </div>
        </div>
        <div class="col-6">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Add to bottom" aria-label="Add to bottom">
            <span class="input-group-btn">
              <button class="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-md-6 mt-3">
          <span class="input-group-btn">
            <button class="btn btn-secondary" type="button">Remove from top</button>
          </span>
        </div>
        <div class="col-12 col-md-6 mt-3">
          <span class="input-group-btn">
            <button class="btn btn-secondary" type="button">Remove from top</button>
          </span>
        </div>
      </div>
      <div class="row">
        <h1>Todo List</h1>
      </div>
      <div class="todo-list">

      </div>
    </div>
    `;
  }

}
