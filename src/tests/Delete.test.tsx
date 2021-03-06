// imports
import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MockStore } from "./Test.utils";
import { store } from "../store";
import { Homepage } from "../pages";
import { addTask } from "./Test.utils";
// describe
describe("TESTING THE DELETING FUNCITONALITY", () => {
  // before each test
  beforeEach(() => {
    render(
      <MockStore store={store}>
        <Homepage />
      </MockStore>
    );
  });
  // after each test
  afterEach(cleanup);
  // add three tasks to the check test functionality
  it("add 3 items to the test", () => {
    addTask(["first task", "second task", "third task"]);
    const tasksElement = screen.getByTestId("tasks-exist");
    expect(tasksElement.children.length).toBe(3);
  });
  // delete first task item from the list
  it("delete first task item from the list", () => {
    const deleteButton = screen.getByTestId("delete-first task");
    fireEvent.click(deleteButton);
    const taskElements = screen.getAllByTestId("single-task");
    expect(taskElements.length).toBe(2);
  });
  // when you delete the task infoitem - created task should update itself
  it("delete first task item from the list", () => {
    const infoItemElement = screen.getByTestId("created tasks");
    expect(infoItemElement.textContent).toBe("2");
  });
  // when you delete the task infoitem - done task should update itself
  it("delete first task item from the list", () => {
    const infoItemElement = screen.getByTestId("done tasks");
    expect(infoItemElement.textContent).toBe("0 of 2");
  });
});
