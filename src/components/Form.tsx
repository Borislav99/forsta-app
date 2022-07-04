// types
interface StoreInterface {
  tasks: {
    currentTask: string;
    editFlag: boolean;
  };
}
// imports
import { plus, edit } from "../utils/fontawesome";
import {
  changeInput,
  createTask,
  setToDefault,
  editTask,
} from "../features/tasks/tasksSlice";
// redux
import { useDispatch, useSelector } from "react-redux";
// styles
import "./styles/Form.scss";
// component
const Form = () => {
  // redux
  const { currentTask, editFlag } = useSelector(
    (store: StoreInterface) => store.tasks
  );
  const dispatch = useDispatch();
  // jsx
  return (
    <header className="main-container__header">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (editFlag) {
            dispatch(editTask());
            dispatch(setToDefault());
            return;
          }
          dispatch(createTask());
          dispatch(setToDefault());
        }}
      >
        <input
          type="text"
          placeholder="add task"
          className="form__input"
          value={currentTask}
          required
          onChange={(e) => {
            dispatch(changeInput(e.target.value));
          }}
        />
        <button type="submit" className="form__input form__input--btn">
          {!editFlag ? (
            <>
              {" "}
              create
              <span className="form__input-icon">
                <i className="fontawesome">{plus}</i>
              </span>
            </>
          ) : (
            <>
              {" "}
              edit
              <span className="form__input-icon">
                <i className="fontawesome">{edit}</i>
              </span>
            </>
          )}
        </button>
      </form>
    </header>
  );
};
// exports
export default Form;
