import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';    

function UpdateWithSearch() {
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [student, setStudent] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    gender: "",
    status: "",
    dateOfBirth: "",
    admissionDate: "",
  });

  // Search API call
  const handleSearch = () => {
    axios.get(`http://localhost:8080/student/search?name=${searchName}`)
      .then(res => setSearchResults(res.data))
      .catch(err => console.error(err));
  };

  // Select student to prefill form
  const handleSelectStudent = (s) => {
    setStudent(s);
    setSearchResults([]);
    setSearchName("");
  };

  // Form input change
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Update student
  const handleUpdate = (e) => {
    e.preventDefault();
    if(!student.id) return toast.error("❌ Select a student first!");
    
    axios.put(`http://localhost:8080/student/${student.id}`, student)
      .then(() => toast.success("✅ Student updated successfully!"))
      .catch(() => toast.error("❌ Failed to update student!"));
  };

  return (
    <div className="form-container">
      <h2>Search & Update Student</h2>

      <div className="search-section">
        <input
          type="text"
          placeholder="Enter student name"
          value={searchName}
          onChange={e => setSearchName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {searchResults.map(s => (
            <li key={s.id} onClick={() => handleSelectStudent(s)}>
              {s.firstName} {s.lastName} ({s.email})
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleUpdate}>
        <input type="text" name="firstName" value={student.firstName} onChange={handleChange} placeholder="First Name" />
        <input type="text" name="lastName" value={student.lastName} onChange={handleChange} placeholder="Last Name" />
        <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="phoneNumber" value={student.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
        <input type="text" name="address" value={student.address} onChange={handleChange} placeholder="Address" />
        <select name="gender" value={student.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select name="status" value={student.status} onChange={handleChange}>
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <input type="date" name="dateOfBirth" value={student.dateOfBirth} onChange={handleChange} />
        <input type="date" name="admissionDate" value={student.admissionDate} onChange={handleChange} />
        <button type="submit">Update Student</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default UpdateWithSearch;
