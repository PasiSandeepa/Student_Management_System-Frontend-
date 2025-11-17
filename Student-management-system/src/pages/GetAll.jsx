import axios from "axios";
import { useEffect, useState } from "react";

function Read() {
  const [students, setStudents] = useState([]);

  const loadStudents = () => {
    axios
      .get("http://localhost:8080/student/getAll")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="p-3">
      <h3 className="mb-3">All Students</h3>

      <button className="btn btn-primary mb-3" onClick={loadStudents}>
        Refresh
      </button>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Status</th>
            <th>DOB</th>
            <th>Admission</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.fristName}</td>
              <td>{s.lastName}</td>
              <td>{s.email}</td>
              <td>{s.phoneNumber}</td>
              <td>{s.address}</td>
              <td>{s.gender}</td>
              <td>{s.status}</td>
              <td>{s.dateOfBirth}</td>
              <td>{s.admissionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
