import { useEffect, useState } from "react";
import CrumBar from "./CrumBar";
import NavSideBar from "./NavSideBar";
import { useNavigate, useParams } from "react-router-dom";
import { Appstate } from "../context/AppProvider";

export default function EditStudents() {
  const { studentData, setData } = Appstate();
  const navigate = useNavigate();

  const { id } = useParams();

  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [education, setEducation] = useState("");

  useEffect(() => {
    const selectedStudent = studentData.find((stud, index) => stud.id === id);

    setIdx(selectedStudent.id);
    setName(selectedStudent.name);
    setBatch(selectedStudent.batch);
    setEducation(selectedStudent.education);
  }, [id, studentData]);

  function editStudent() {
    const editedStudObj = {
      id: idx,
      name,
      batch,
      education,
    };
    // console.log(editedStudObj)

    const editIndex = studentData.findIndex((stud, index) => stud.id === id);
    studentData[editIndex] = editedStudObj;
    setData([...studentData]);

    navigate("/students/all");
  }

  return (
    <NavSideBar>
      <CrumBar />
      <div className="form-control text-center items-center">
        <h1 className="m-5">Fill the Data to edit a Students</h1>
        <label className="input-group">
          <span className="w-48">ID</span>
          <input
            type="number"
            placeholder="Enter your id"
            className="input input-bordered w-auto m-5"
            value={idx}
            onChange={(e) => setIdx(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span className="w-48">NAME</span>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-auto m-5"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span className="w-48">BATCH</span>
          <input
            type="text"
            placeholder="Enter your batch"
            className="input input-bordered w-auto m-5"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span className="w-48">EDUCATION</span>
          <input
            type="text"
            placeholder="Enter your education"
            className="input input-bordered w-auto m-5"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </label>
        <button
          className="btn btn-primary w-48 mt-20"
          onClick={() => editStudent()}
        >
          Edit Student
        </button>
      </div>
    </NavSideBar>
  );
}
