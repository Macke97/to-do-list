let app;

// Tell jsonflex what classes we expect it to save/load
JSON._classes(App, ToDoList, DoneList, ListItem);

// Load json data
JSON._load('todo-list')
.then((data) => {
  // Retrieve the app from JSON
  app = data.app;
})
.catch(() => {
  // No working json data
  // create new app
  app = new App();
})
.then(() => {
  // Tell the app to render to <main>
  app.render('main');
});

$(document).on('keyup', '.itemName', function(e){
  let key = e.which;
  if(key == 13){
    $('.addBtn').trigger('click');
  }
});

$(document).on('keyup', '.checkbox:checked', function(e){
  let key = e.which;
  if(key == 13){
    $('.doneBtn').trigger('click');
  }
});
