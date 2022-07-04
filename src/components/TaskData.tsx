// types
interface StoreInterface {
  tasks: {
    currentTask: string;
    tasks: Array<{ id: number; text: string; completed: boolean }> | [];
  };
}
// imports
import SingleTask from "./SingleTask";
// redux
import { useSelector } from "react-redux";
// components
const TaskData = () => {
  // redux
  const { tasks } = useSelector((store: StoreInterface) => store.tasks);
  return (
    <div className="tasks-exist" data-testid="tasks-exist">
      {tasks.map((item) => {
        const { id, text, completed } = item;
        return (
          <SingleTask key={id} id={id} text={text} completed={completed} />
        );
      })}
    </div>
  );
};
// exports
export default TaskData;
