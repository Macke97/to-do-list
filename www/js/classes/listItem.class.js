class ListItem extends Base{

  constructor(list, item){
    super();
    this.list = list;
    this.item = item;
  }


  template(){

    return `<div>
              <li class="list-group-item">${this.item}</li>
            </div>`;
  }

}
