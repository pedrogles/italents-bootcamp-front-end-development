import { NewTaskForm, ToDoList } from './components';
import { Title } from './components/texts/title';
import './styles/App.css';

function App() {
  return (
    <div className='app'>
      <Title>To Do List</Title>
      <NewTaskForm />
      <ToDoList />
    </div>
  );
}

export default App;
