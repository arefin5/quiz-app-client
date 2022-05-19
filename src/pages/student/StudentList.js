import React from "react";
import { BaseUrl } from "../../utils/constant";
import axios from "axios";
import { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
const StudentList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchStudents();
  }, [students]);
  const fetchStudents = async () => {
    try {
      const { data } = await axios.get(BaseUrl + "/get-all-student");
      setStudents(data);
      console.log(students);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 ps-0">
            <Sidebar />
          </div>
          <div className="col-lg-9 ">
           <div className="row">

                 {/* {JSON.stringify(students)} */}
            {students.map((student) => {
              return (
                <div key={student._id} className="col-md-3">
                 <div className="card mb-5">
                 <div className="card-body">
                    <h5 className="card-title">Name : {student.name}</h5>
                    <p className="card-text text-dark">Email:{student.studentId.email}</p>
                    <p className="card-text text-dark">Mark:{student.mark}</p>
                 </div>
                 </div>
                </div>
              )
            })}
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentList;
