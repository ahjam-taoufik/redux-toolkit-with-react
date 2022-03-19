import { Provider } from 'react-redux';
import { store } from './redux/store';

import './styles.css';
import TaskForm from './TaskForm';
import TasksHeader from './TasksHeader';
import TasksList from './TasksList';

export default function App() {
  return (
    <div className="container">
      <Provider store={store}>  
        <article>
          <TasksHeader />
          <TasksList />
          <footer>
            <TaskForm />
          </footer>
        </article>
      </Provider>
    </div>
  );
}
