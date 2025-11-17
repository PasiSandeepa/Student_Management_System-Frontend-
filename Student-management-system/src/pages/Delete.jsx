import axios from "axios";
import { useState } from "react";

function Delete() {
  const [id, setId] = useState("");

  const handleDelete = () => {
    if (!id) {
      alert("Please enter student ID!");
      return;
    }

    axios
      .delete(`http://localhost:8080//student/delete/${id}}`)
      .then(() => {
        alert("Student deleted successfully");
        setId("");
      })
      .catch((err) => {
        console.error(err);
        alert("Error deleting student");
      });
  };

  return (
    <div className="p-4">
      <h3>Delete Student</h3>

      <input
        type="number"
        placeholder="Enter Student ID"
        className="form-control mb-3"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button className="btn btn-danger" onClick={handleDelete}>
        Delete Student
      </button>
    </div>
  );
}

export default Delete;
