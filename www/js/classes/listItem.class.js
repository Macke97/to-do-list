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
                  ${this.item}<input class="form-check-input checkbox" type="checkbox" value="">
                </li>
              </div>`;
    } else if(this.list == app.doneList){
      return `<div>
                <li class="list-group-item" data-item="${this.item}">
                  ${this.item}
                </li>
              </div>`;
    }

  }

}
