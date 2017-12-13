class App extends Base {

  constructor(){
    super();
    this.todo = [];
    this.done = [];
  }

  render(el){
    super.render(el);
    JSON._save('to-do-list', {app: this});
  }

  template(){
    return `
    <div class="row">
      <div class="col-4">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for...">
          <span class="input-group-btn">
            <button class="btn btn-secondary" type="button">Go!</button>
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for...">
          <span class="input-group-btn">
            <button class="btn btn-secondary" type="button">Go!</button>
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for...">
          <span class="input-group-btn">
            <button class="btn btn-secondary" type="button">Go!</button>
          </span>
        </div>
      </div>
    </div>
    `;
  }

}
