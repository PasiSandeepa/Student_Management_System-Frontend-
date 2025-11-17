import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Create() {
  const [student, setStudent] = useState({
    fristName: "",      // change firstName → fristName
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    gender: "",
    status: "",
    dateOfBirth: "",
    admissionDate: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/student/add", student, {
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
      toast.success("✅ Student added successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setStudent({
        fristName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        gender: "",
        status: "",
        dateOfBirth: "",
        admissionDate: "",
      });
    })
    .catch(() => {
      toast.error("❌ Failed to add student!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4">
        <h3 className="mb-3">Create Student</h3>

        <input name="fristName" placeholder="First Name" className="form-control mb-2" onChange={handleChange} value={student.fristName} />
        <input name="lastName" placeholder="Last Name" className="form-control mb-2" onChange={handleChange} value={student.lastName} />
        <input name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} value={student.email} />
        <input name="phoneNumber" placeholder="Phone Number" className="form-control mb-2" onChange={handleChange} value={student.phoneNumber} />
        <input name="address" placeholder="Address" className="form-control mb-2" onChange={handleChange} value={student.address} />

        <select name="gender" className="form-control mb-2" onChange={handleChange} value={student.gender}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select name="status" className="form-control mb-2" onChange={handleChange} value={student.status}>
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <label>Date of Birth</label>
        <input type="date" name="dateOfBirth" className="form-control mb-3" onChange={handleChange} value={student.dateOfBirth} />

        <label>Admission Date</label>
        <input type="date" name="admissionDate" className="form-control mb-3" onChange={handleChange} value={student.admissionDate} />

        <div className="text-end">
          <hr />
          <button type="submit" className="btn btn-success mt-3">Add Student Details</button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Create;
