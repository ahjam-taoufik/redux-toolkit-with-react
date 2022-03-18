import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TasksList = () => {
  const tasks = useSelector((state) => state.todo);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </>
  );
};

export default TasksList;
