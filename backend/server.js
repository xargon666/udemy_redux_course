import {v4 as uuid} from 'uuid'

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000
app.use(express.json());
app.use(cors());

let tasks = [
    { id: "3de4601d-3d79-4ce4-84aa-4e74e7e97e7e", task: "Start creating Redux application", completed: true },
    { id: "34eea2fa-2079-4c7b-8708-f57520f0e8bd", task: "Design redux store", completed: true },
    { id: "9f173992-557e-429b-9e3a-74664e5711bd", task: "Define all actions list", completed: false },
    { id: "8bb7ad70-9094-4e19-ac02-02a4347bb738", task: "Create reducer", completed: false },
    { id: "e5537b23-bacc-496b-8027-c17a0de593fd", task: "Create store using reducer", completed: false },
];

// Get all tasks
app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

// Add new Task
app.post("/api/tasks", (req, res) => {
    const newTask = { id: uuid(), ...req.body, completed: false };
    tasks.push(newTask);

    console.log(tasks);
    res.json(newTask);
});

// Change task completed property
app.patch("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);
    const task = tasks[index];
    task.completed = req.body.completed;

    res.json(task);
});

// Delete Specific task
app.delete("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== id);

    res.json({ id });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
