// imports
import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MockStore } from "./Test.utils";
import { store } from "../store";
import { Homepage } from "../pages";
import { addTask, removeTasks } from "./Test.utils";
// describe
describe("TESTING THE CHECKING FUNCITONALITY", () => {
  // before all tests
  beforeEach(() => {
    render(
      <MockStore store={store}>
        <Homepage />
      </MockStore>
    );
    addTask(["first task", "second task", "third task"]);
  });
  // after each test
  afterEach(() => {
    removeTasks(["first task", "second task", "third task"]);
  });
  // first task should not be marked as completed
  it("todo item should't have a class of completed", () => {
    const paragraphElement = screen.getByText("first task");
    expect(paragraphElement).toBeInTheDocument();
  });
  // mark first task as completed
  it("todo item should have a class of completed", () => {
    const checkedButton = screen.getByTestId("checked-first task");
    const taskElement = screen.getByText("first task");
    fireEvent.click(checkedButton);
    expect(taskElement).toHaveClass("completed");
  });
  // when the task is marked as completed done tasks should update itself
  it("after successfully marking the task as completed, infoitem component should update", () => {
    const checkedButton = screen.getByTestId("checked-first task");
    fireEvent.click(checkedButton);
    const infoItemElement = screen.getByTestId("done tasks");
    expect(infoItemElement.textContent).toBe("1 of 3");
  });
});
