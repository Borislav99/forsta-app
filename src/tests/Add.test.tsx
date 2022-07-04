// imports
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MockStore } from "./Test.utils";
import { store } from "../store";
import { Homepage } from "../pages";
import { addTask } from "./Test.utils";
// describe
describe("TESTING THE ADDING FUNCITONALITY", () => {
  // typing in input changes the input value
  it("when you type in the input, it should change the input's value", () => {
    render(
      <MockStore store={store}>
        <Homepage />
      </MockStore>
    );
    const inputElement = screen.getByPlaceholderText(
      "add task"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: "first task" },
    });
    expect(inputElement.value).toBe("first task");
  });
  // submiting the input value should result in creating the new task
  it("when you submit the form, new todo should appear", () => {
    render(
      <MockStore store={store}>
        <Homepage />
      </MockStore>
    );
    const inputElement = screen.getByPlaceholderText(
      "add task"
    ) as HTMLInputElement;
    const buttonElement = screen.getByRole("button", { name: "create" });
    fireEvent.change(inputElement, {
      target: { value: "first task" },
    });
    fireEvent.click(buttonElement);
    const paragraphElement = screen.getByText("first task");
    expect(paragraphElement).toBeInTheDocument();
  });
  // submiting the input value should result in the increase of created tasks
  it("when you submit the form, created task changes", () => {
    render(
      <MockStore store={store}>
        <Homepage />
      </MockStore>
    );
    const createdTasks = screen.getByTestId("created tasks");
    expect(createdTasks.textContent).toBe("1");
  });
  // submiting the input value should result in the increase of done tasks
  it("when you submit the form, created task changes", () => {
    render(
      <MockStore store={store}>
        <Homepage />
      </MockStore>
    );
    const createdTasks = screen.getByTestId("done tasks");
    expect(createdTasks.textContent).toBe("0 of 1");
  });
  // when you submit two more tasks total number of tasks should be 3
  it("submiting two more values, should equal to three todo's in total", () => {
    render(
      <MockStore store={store}>
        <Homepage />
      </MockStore>
    );
    addTask(["second task", "third task"]);
    const taskElements = screen.getAllByTestId("single-task");
    expect(taskElements.length).toBe(3);
  });
});
