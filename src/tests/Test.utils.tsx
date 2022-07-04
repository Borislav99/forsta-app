// imports
import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  getAllByTestId,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { task } from "../utils/fontawesome";
// mocks
export const MockStore = ({
  store,
  children,
}: {
  store: any;
  children: JSX.Element;
}) => {
  return <Provider store={store}>{children}</Provider>;
};
// add task
export const addTask = (tasks: string[]) => {
  const inputElement = screen.getByPlaceholderText("add task");
  const buttonElement = screen.getByRole("button", { name: "create" });
  tasks.forEach((item) => {
    fireEvent.change(inputElement, {
      target: { value: item },
    });
    fireEvent.click(buttonElement);
  });
};
// delete task
export const removeTasks = (tasks: string[]): void => {
  tasks.forEach((item) => {
    const deleteButton = screen.getByTestId(`delete-${item}`);
    fireEvent.click(deleteButton);
  });
};
