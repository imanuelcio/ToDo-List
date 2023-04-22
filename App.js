import "./App.css";
import ToDoList from "./component/ToDoList";

function App() {
  return (
    <div className="card">
      <div className="card__heading">
        <h1>ToDo</h1>
      </div>
      <div className="card__content">
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
