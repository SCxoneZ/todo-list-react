const container = document.querySelector('.container');
function App() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const inputEl = React.useRef(null);
  
  function addHandler(){
    if(!activity) return;
    const newTodo = {
      id: Date.now(),
      isDone: false,
      activity
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setActivity('');
    }
  
  function deleteHandler(todoId){
    const updatedTodos = todos.filter((el) => {
      return el.id !== todoId;
    });
    setTodos(updatedTodos);
  }
  
  function editHandler(todoId){
    const newTodos = [...todos];
    const currentIndex = todos.findIndex(el => {
      return todoId == el.id;
    });
    const edited = prompt('Masukkan Teks Yang akan diedit...', newTodos[currentIndex].activity);
    if(edited == null) return;
    newTodos[currentIndex].activity = edited;
    setTodos(newTodos);
  }
  
  function doneHandler(todoId){
    const newTodos = [...todos];
    const currentIndex = todos.findIndex(el => {
      return todoId == el.id;
    });
    newTodos[currentIndex].isDone = !newTodos[currentIndex].isDone;
    setTodos(newTodos);
  }
  
  return (

    <>
    <section className="form">
      <input type="text" ref={inputEl} placeholder="Enter a todo..." onChange={
        function(e){
          setActivity(e.target.value);
        }
      }/>
      <button type="button" onClick={addHandler}>Add</button>
    </section>
    <div className="cards">
      {todos.map((todo) => {
        const contentClass = `card-content ${todo.isDone && 'done'}`;
        return (
        
        <div key={todo.id} className="card">
        <div className={contentClass}>{todo.activity}</div>
        <div className="card-buttons">
          <button type="button" className="btn-done" onClick={doneHandler.bind(this, todo.id)}></button>
          <button type="button" className="btn-delete" onClick={deleteHandler.bind(this, todo.id)}></button>
          <button type="button" className="btn-edit" onClick={editHandler.bind(this, todo.id)}></button>
        </div>
        </div>
        );
      })}
    </div>
    </>

  );
}

ReactDOM.render(<App/>, container);
