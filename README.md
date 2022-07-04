# Forsta App & To-Do App

Forsta App is a **To-Do list application**. This project was done as a project assignment for the **Junior Front End Developer role** in the Forsta company. The app instructions were:

- Create a todo list app where you can create/edit/delete tasks,
- You should also be able to mark your tasks as done,
- When you delete a task it should be removed from the list,
- New tasks should be added to the top of the list,
- The application needs to be tested.

I did the application somewhat in my way. What is interesting is when we have no tasks, we display a component that tells us that we currently have no tasks and we need to add them. If the user tries to visit any other route than the root route, he will be shown an error page. I save the tasks in the local storage so that when the user returns, he can see all the tasks he has made so far. In addition to the tasks themselves, the user can see how many tasks he has added and how many of them he has completed. **Redux is used for state management**.

The application needed to be tested. I tested the application through the JEST test-runner and I used the **React Testing Library**. All tests are located inside the "tests" folder. The functionality of the entire application has been tested (adding, checking, deleting and editing).

![1](https://user-images.githubusercontent.com/55507857/177020625-31654573-55c2-48b1-b9c1-6fb02e6d3be9.png)

# Project Status

The project is currently **active** and you can visit it live. The project is meant to be an task and I have no intention on scaling it, or making something more out of it.

_You can see live demo on following [link](https://borislav-forsta.netlify.app/)._

# Project Screen Shot(s)

Forsta App landing page.

![2](https://user-images.githubusercontent.com/55507857/177020645-ab776ffe-57dd-41a1-9040-041d2e618224.png)

Adding new task without value in the input.

![3](https://user-images.githubusercontent.com/55507857/177020653-3fd25777-feaa-4470-859f-72d492314fde.png)

Adding new task successfully.

![4](https://user-images.githubusercontent.com/55507857/177020670-ef3dd065-ed59-4c14-b510-770b17d3653e.png)

Marking task 1 and task 2 as completed.

![5](https://user-images.githubusercontent.com/55507857/177020688-d1ea823b-5437-487b-97c9-9086850366ee.png)

Deleting task 3.

![6](https://user-images.githubusercontent.com/55507857/177020704-4b8ac486-d40f-4a4d-840b-a1d2e8d7f6f8.png)

What happens when we click on edit button on task 2?

![7](https://user-images.githubusercontent.com/55507857/177020715-a5c197fd-dd6b-437a-9033-b63b71a9d471.png)

Editing the task 2 and giving it new value of task 22.

![8](https://user-images.githubusercontent.com/55507857/177020751-1077ce26-ed6d-47eb-a975-0c2382474da9.png)

# Installation and Setup

The application is created with React so you need to have node and npm locally on the machine.

#### Install dependencies

`npm install`

#### Start a server locally

`npm run dev`

#### Run tests

`npm run test`

#### Visit the application locally

`localhost:3000`

# Reflection

- This was a very fun project.

- The one thing that this project did for me was refreshen my SASS knowledge and improved my existing Typescript knowledge.

- I used the Redux toolkit. Redux is so much easier for managing the state inside the REACT application.

- In this project i used vite instead of create-react-app which in my opinion proved itself to be much faster than create-react-app.

- With this project, I focused a lot on Test-Driven Development. The advantage of this way of working is that whenever we refactor the code, we can always run our tests automatically. Tests allow us safe development, where our components must satisfy the test, and with that we can be sure that there will be no unnecessary errors.

## Summary

The development of the project took about 2 hours, my job was to create a frontend, design and write tests for the app.

The project is in its final phase. Currently, I'm working on refactoring the code.

The versions of the technologies I used are below:

| Technology               | Version |
| ------------------------ | ------- |
| React                    | ^18.0.0 |
| React Router DOM         | ^6.3.0  |
| React Redux              | ^8.0.2  |
| Sass                     | ^1.53.0 |
| Typescript               | ^4.6.3  |
| Vite                     | ^2.9.9  |
| testing-library/jest-dom | ^5.16.4 |
| testing-library/react    | ^13.3.0 |
