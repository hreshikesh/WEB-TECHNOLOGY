import Counter from "./components/counter"
import Todo from "./components/todo";
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>This is Counter and Todo App using react</h1>
      <div className="counterContainer">
        <div className="counterBox">
          <Counter />
        </div>
      </div>
      <div className="todoContainer">
        <div className="todoBox">
      <Todo />
      </div>
      </div>
    </div>
  );
}

export default App;
