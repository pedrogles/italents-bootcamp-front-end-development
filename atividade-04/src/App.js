import { NewTaskForm, ToDoList } from './components';
import { PageLayout } from './layouts/PageLayout/PageLayout';

function App() {
  return (
    <PageLayout>
      <NewTaskForm />
      <ToDoList />
    </PageLayout>
  );
}

export default App;
