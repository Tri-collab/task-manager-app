import { useState } from "react";

export default function Task({ task, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (!newTitle.trim()) return;
    editTask(task.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div style={styles.card}>
      {isEditing ? (
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={styles.input}
        />
      ) : (
        <span
          style={{
            textDecoration: task.done ? "line-through" : "none",
            opacity: task.done ? 0.6 : 1,
          }}
        >
          {task.title}
        </span>
      )}

      <div style={styles.btns}>
        <button
          onClick={() => toggleTask(task.id)}
          style={{
            ...styles.btn,
            background: task.done ? "#22c55e" : "#3b82f6",
          }}
        >
          {task.done ? "Completed" : "Pending"}
        </button>

        {isEditing ? (
          <button style={styles.btn} onClick={handleEdit}>
            Save
          </button>
        ) : (
          <button style={styles.btn} onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}

        <button style={styles.btn} onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    background: "#f5f5f5",
    transition: "all 0.2s ease",
  },
  btns: {
    display: "flex",
    gap: "5px",
  },
  btn: {
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#fff",
    background: "#2563eb",
  },
  input: {
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};