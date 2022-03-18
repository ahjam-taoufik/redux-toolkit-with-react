import { useDispatch } from "react-redux";

const TaskItem = (props) => {
  const { task } = props;
  const dispatch= useDispatch()

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          
          onChange={() => dispatch({
            type: "todo/toggleTask",
            payload:task.id
          })}
        />
        {task.text}

        <span
          onClick={() =>dispatch({
            type: "todo/deleteTask",
            payload:task.id
          })}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
