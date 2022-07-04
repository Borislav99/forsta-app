// types
interface StoreInterface {
  tasks: {
    currentTask: string;
    tasks: Array<{ id: number; text: string }> | [];
    completedTasks: number;
  };
}
// imports
import { InfoItem, NoTasks, TaskData } from "./index";
// redux
import { useSelector } from "react-redux";
// styles
import "./styles/Info.scss";
// component
const Footer = () => {
  // redux
  const { tasks, completedTasks } = useSelector(
    (store: StoreInterface) => store.tasks
  );
  // jsx
  return (
    <footer className="main-container__footer">
      {/* info container */}
      <div className="footer-info">
        <InfoItem
          infoClass="footer-info__item--blue"
          infoText="created tasks"
          infoData={tasks.length.toString()}
        />
        <InfoItem
          infoClass="footer-info__item--pink"
          infoText="done tasks"
          infoData={`${completedTasks.toString()} of ${tasks.length.toString()}`}
        />
      </div>
      {/* end of info container */}
      {/* tasks container */}
      <div className="tasks-container">
        {tasks.length > 0 ? <TaskData /> : <NoTasks />}
      </div>
      {/* end of tasks container */}
    </footer>
  );
};
// exports
export default Footer;
