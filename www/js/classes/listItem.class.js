class ListItem extends Base{

  constructor(list, item){
    super();
    this.list = list;
    this.item = item;
  }


  template(){
    if(this.list == app.toDoList){

      if(this === app.toDoList.items[0]){
        return `<div>
                  <li class="list-group-item" data-item="${this.item}">
                    ${this.item}
                    <input class="form-check-input checkbox" type="checkbox" value="">
                    <div class="moveArrows">
                      <button class="btn btn-sm btnDown"><i class="fas fa-angle-down arrow btnDown"></i></button>
                      <button class="btn btn-sm btnUp disabled"><i class="disabled fas fa-angle-up arrow btnUp"></i></button>
                    </div>
                  </li>
                </div>`;
      } else if(this === app.toDoList.items[(app.toDoList.items.length - 1)]){
        return `<div>
                  <li class="list-group-item" data-item="${this.item}">
                    ${this.item}
                    <input class="form-check-input checkbox" type="checkbox" value="">
                    <div class="moveArrows">
                      <button class="btn btnDown btn-sm disabled"><i class="disabled fas fa-angle-down arrow btnDown"></i></button>
                      <button class="btn btnUp btn-sm"><i class="fas fa-angle-up arrow btnUp"></i></button>
                    </div>
                  </li>
                </div>`;
      } else{
        return `<div>
                  <li class="list-group-item" data-item="${this.item}">
                    ${this.item}
                    <input class="form-check-input checkbox" type="checkbox" value="">
                    <div class="moveArrows">
                      <button class="btn btnDown btn-sm"><i class="fas fa-angle-down arrow btnDown"></i></button>
                      <button class="btn btnUp btn-sm"><i class="fas fa-angle-up arrow btnUp"></i></button>
                    </div>
                  </li>
                </div>`;
      }


    } else if(this.list == app.doneList){
      return `<div>
                <li class="list-group-item" data-item="${this.item}">
                  ${this.item}<button class="btn btn-secondary float-md-right removeBtn" type="button">X</button>
                </li>
              </div>`;
    }

  }

}
