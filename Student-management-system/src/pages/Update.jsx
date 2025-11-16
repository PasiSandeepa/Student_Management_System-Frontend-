import axios from "axios";
import { useState } from "react";

function Create() {
  const [student, setStudent] = useState({
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

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/add", student)
      .then(() => alert("Student added successfully"))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">

      <input name="fristName" placeholder="First Name" className="form-control mb-2" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" className="form-control mb-2" onChange={handleChange} />
      <input name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} />
      <input name="phoneNumber" placeholder="Phone Number" className="form-control mb-2" onChange={handleChange} />
      <input name="address" placeholder="Address" className="form-control mb-2" onChange={handleChange} />

      <select name="gender" className="form-control mb-2" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select name="status" className="form-control mb-2" onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input id="dateOfBirth" type="date" name="dateOfBirth" className="form-control mb-3" onChange={handleChange} />

      <label htmlFor="admissionDate">Admission Date</label>
      <input id="admissionDate" type="date" name="admissionDate" className="form-control mb-3" onChange={handleChange} />

      <div className="text-end">
        <hr />
        <button type="submit" className="btn btn-success mt-3">
          Add Student Details
        </button>
      </div>
    </form>
  );
}

export default Create;
