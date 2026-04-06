import { useEffect, useState } from "react";
import Task from "./Task";

export default function Board() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      title: input,
      done: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2>✨ Task Manager</h2>

      <div style={styles.inputRow}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your task..."
          style={styles.input}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <button style={styles.addBtn} onClick={addTask}>
          Add
        </button>
      </div>

      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    background: "#fff",
    textAlign: "center",
  },
  inputRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "10px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};