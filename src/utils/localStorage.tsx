// types
interface TaskInterface {
  id: string;
  text: string;
  completed: boolean;
}
type TaskArray = TaskInterface[] | [];
// get items from local storage
const getTasksFromLocalStorage = (): TaskArray => {
  let items = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks") || "")
    : [];
  return items;
};
// get completed tasks
const getCompletedTasks = (): number => {
  const items = getTasksFromLocalStorage();
  let counter = 0;
  items.forEach((item) => {
    if (item.completed === true) {
      counter++;
    }
  });
  return counter;
};
// add item to local storage
const addItemToLocalStorage = (task: TaskInterface): void => {
  let items: any[] = getTasksFromLocalStorage();
  items = [task, ...items];
  localStorage.setItem("tasks", JSON.stringify(items));
};
// exports
export { getTasksFromLocalStorage, addItemToLocalStorage, getCompletedTasks };
