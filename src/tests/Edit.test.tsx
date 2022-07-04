// imports
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MockStore } from "./Test.utils";
import { store } from "../store";
import { Homepage } from "../pages";
import { addTask } from "./Test.utils";
// describe
describe("TESTING THE EDITING FUNCITONALITY", () => {
  // add three tasks to the check test functionality
  it("add 3 items to the test", () => {
    render(
      <MockStore store={store}>
        <Homepage />
      </MockStore>
    );
    addTask(["first task", "second task", "third task"]);
    const tasksElement = screen.getByTestId("tasks-exist");
    expect(tasksElement.children.length).toBe(3);
  });
  // when you press the edit button on first task input should update itself
  it("when you press edit button, input should update itself", () => {
    render(
      <MockStore store={store}>
        <Homepage />
      </MockStore>
    );
    const editButton = screen.getByTestId("edit-first task");
    const inputElement = screen.getByPlaceholderText(
      "add task"
    ) as HTMLInputElement;
    fireEvent.click(editButton);
    expect(inputElement.value).toBe("first task");
  });
  // when you press the edit button form submit button should have edit instead of create
  it("when you press edit button, input should update itself", () => {
    render(
      <MockStore store={store}>
        <Homepage />
      </MockStore>
    );
    const submitButton = screen.getByRole("button", { name: "edit" });
    expect(submitButton.textContent).toBe(" edit");
  });
  // when you update the task first task should be in the list anymore
  it("edit first task from the list", () => {
    render(
      <MockStore store={store}>
        <Homepage />
      </MockStore>
    );
    const inputElement = screen.getByPlaceholderText(
      "add task"
    ) as HTMLInputElement;
    const submitButton = screen.getByRole("button", { name: "edit" });
    fireEvent.change(inputElement, { target: { value: "brand new task" } });
    fireEvent.click(submitButton);
    const firstTaskElement = screen.queryByText("first task");
    expect(firstTaskElement).not.toBeInTheDocument();
  });
  // brand new value should be in the list
  it("edit first task from the list", () => {
    render(
      <MockStore store={store}>
        <Homepage />
      </MockStore>
    );
    const brandNewTask = screen.getByText("brand new task");
    expect(brandNewTask).toBeInTheDocument();
  });
});
