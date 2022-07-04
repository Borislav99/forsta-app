// assets
import { task } from "../utils/fontawesome";
// styles
import "./styles/NoTask.scss";
// component
const NoTasks = () => {
  // jsx
  return (
    <div className="no-tasks" data-testid="blaaa">
      <span className="no-tasks__icon">
        <i className="fontawesome">{task}</i>
      </span>
      <p className="no-tasks__text">Please add one or more tasks.</p>
      <p className="no-tasks__text">Organize your tasks with forsta app.</p>
    </div>
  );
};
// exports
export default NoTasks;
