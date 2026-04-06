Task Manager App

This is a simple task management app built using React and Vite.

I built this project to practice React concepts like handling state, working with components, and managing user input.


Features

- Add tasks using input field
- Edit tasks
- Delete tasks
- Mark tasks as completed or pending
- Tasks stay saved even after refreshing (using localStorage)


How to run

1. Install dependencies:

npm install

2. Run the project:

npm run dev

3. Open:
   http://localhost:5173


Tech used

- React (useState, useEffect)
- Vite
- JavaScript
- LocalStorage


Approach

I used a main component (Board.jsx) to manage the list of tasks.
Each task is rendered through a separate component (Task.jsx).

All operations like add, edit, delete, and toggle are handled using React state.

I also used localStorage so that the tasks remain even after refreshing the page.


What I learned

- How to manage state in React
- Handling user input
- Passing data between components
- Implementing basic CRUD operations

Future improvements

- Improve UI design
- Add filters (completed / pending)
- Add animations


Author

Trisha Das