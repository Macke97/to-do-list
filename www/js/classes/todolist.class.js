class ToDoList {

  constructor(item){
    this.item = item;
  }


  template(){
    return `
    <div>
      <ul class="list-group">
        <li class="list-group-item">${this.todo.html()}</li>
      </ul>
    </div>`
  }

}
