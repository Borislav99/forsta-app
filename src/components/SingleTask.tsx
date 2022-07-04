// types
interface Task {
  id: number;
  text: string;
  completed: boolean;
}
// imports
import Divider from "./Divider";
import { check, edit, trash } from "../utils/fontawesome";
import {
  deleteTask,
  checkTask,
  switchEdit,
  setToDefault,
} from "../features/tasks/tasksSlice";
// redux
import { useDispatch } from "react-redux";
// styles
import "./styles/SingleTask.scss";
// component
const SingleTask = ({ id, text, completed }: Task) => {
  // redux
  const dispatch = useDispatch();
  return (
    <article className="single-task" data-testid="single-task" data-id={id}>
      <div className="single-task__upper">
        <span
          className="single-task__icon checked"
          title="span"
          data-testid={`checked-${text}`}
          onClick={() => {
            dispatch(setToDefault());
            dispatch(checkTask(id.toString()));
          }}
        >
          <i className="single-task__icon--green fontawesome">{check}</i>
        </span>
        <span
          className="single-task__icon"
          title="span"
          data-testid={`edit-${text}`}
          onClick={() => {
            const payload = {
              id: id.toString(),
              text,
            };
            dispatch(switchEdit(payload));
          }}
        >
          <i className="single-task__icon--blue fontawesome">{edit}</i>
        </span>
        <span
          className="single-task__icon single-task__icon--red"
          title="span"
          data-testid={`delete-${text}`}
          onClick={() => {
            dispatch(setToDefault());
            dispatch(deleteTask(id.toString()));
          }}
        >
          <i className="single-task__icon--red fontawesome">{trash}</i>
        </span>
      </div>
      <Divider />
      <p
        className={
          completed ? `single-task__bottom completed` : `single-task__bottom`
        }
      >
        {text}
      </p>
    </article>
  );
};
// exports
export default SingleTask;
