@jsx
var ToDoListBox = React.createClass({
  render: function() {
    return (
        <div className="toDoListBox">
            Hello,Im toDoListBox.
        </div>
           );
  }
});

React.render(
  <ToDoListBox/>,
  document.getElementById('todolist')
);