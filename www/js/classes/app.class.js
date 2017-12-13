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
    <div>
      <div class="row mt-4">
        <div class="col-4">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Add to top" aria-label="Add to top">
            <span class="input-group-btn">
              <button class="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-4">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Add to bottom" aria-label="Add to bottom">
            <span class="input-group-btn">
              <button class="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-4">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Remove from top" aria-label="Remove from top">
            <span class="input-group-btn">
              <button class="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-4">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Remove from bottom" aria-label="Remove from bottom">
            <span class="input-group-btn">
              <button class="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
    </div>
    `;
  }

}
