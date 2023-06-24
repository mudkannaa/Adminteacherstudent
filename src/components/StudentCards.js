import { useNavigate } from "react-router-dom";
import { Appstate } from "../context/AppProvider";

function StudentCard({ student }) {
  const { studentData, setData, crumState, setCrumState } = Appstate();

  const navigate = useNavigate();

  const removeStud = (id) => {
    let response = window.confirm("Are you sure want to delete?");
    if (response) {
      const newStudData = studentData.filter((stud, ind) => stud.id !== id);
      setData(newStudData);
    }
  };
  const handleEdit = (id) => {
    const newCrum = {
      name: "EditStudents",
      path: `/editStudents/${id}`,
    };
    setCrumState([...crumState, newCrum]);
    navigate(`/editStudents/${id}`);
  };
  return (
    <div>
      <div className="card w-64 bg-base-100 shadow-xl p-0 rounded-3xl">
        <div className="card-body ">
          <h2 className="card-title justify-center uppercase">
            {student.name}
          </h2>
          <p className="text-left">{student.batch}</p>
          <p className="text-left">{student.education}</p>
          <div className="card-actions justify-center">
            <button
              className="btn bg-blue-600 text-white rounded-full mt-3"
              onClick={() => handleEdit(student.id)}
            >
              edit
            </button>
            <button
              className="btn bg-red-600 text-white rounded-full mt-3"
              onClick={() => removeStud(student.id)}
            >
              Delete
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
