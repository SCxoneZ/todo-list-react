const container = document.querySelector('.container');
/*
      <div className="card">
        <div className="card-content">Lorem ipsum dolor.</div>
        <div className="card-buttons">
          <button type="button" className="btn-done"></button>
          <button type="button" className="btn-delete"></button>
          <button type="button" className="btn-edit"></button>
        </div>
*/
function App() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const inputEl = React.useRef(null);
  
  function addHandler(){
    const newTodo = {
      id: Date.now(),
      isDone: false,
      activity
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    console.log(newTodo);
    console.log(updatedTodos);
  }
  
  return (

    <>
    <section className="form">
      <input type="text" placeholder="Enter a todo..." onChange={
        function(e){
          setActivity(e.target.value);
        }
      }/>
      <button type="button" onClick={addHandler} ref={inputEl}>Add</button>
    </section>
    <div className="cards">
      {todos.map((todo) => {
        return (
        
        <div key={todo.id} className="card">
        <div className="card-content">{todo.activity}</div>
        <div className="card-buttons">
          <button type="button" className="btn-done"></button>
          <button type="button" className="btn-delete"></button>
          <button type="button" className="btn-edit"></button>
        </div>
        </div>
        );
      })}
    </div>
    </>

  );
}

ReactDOM.render(<App/>, container);
