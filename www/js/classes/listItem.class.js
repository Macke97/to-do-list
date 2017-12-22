class ListItem extends Base{

  constructor(list, item){
    super();
    this.list = list;
    this.item = item;
    console.log(item);
  }


  template(){
    if(this.list == app.toDoList){
      return `<div>
                <li class="list-group-item" data-item="${this.item}">
                  ${this.item}
                  <input class="form-check-input checkbox" type="checkbox" value="">
                  <i class="fas fa-angle-down arrow btnDown"></i><i class="fas fa-angle-up arrow btnUp"></i>
                </li>
              </div>`;
    } else if(this.list == app.doneList){
      return `<div>
                <li class="list-group-item" data-item="${this.item}">
                  ${this.item}<button class="btn btn-secondary removeBtn" type="button">X</button>
                </li>
              </div>`;
    }

  }

}
