import React, { useState } from "react";
import "./CreateQuestionForm.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import axios from "axios";
import { Navigator } from "react-router";
import { BaseUrl } from "../utils/constant";
const CreateQuestion = () => {
  const [questionName, setQuestionName] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [allquestion, setAllQuestion] = useState([]);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  // const [fourth, setFourth] = useState("");
   const[answer,setAnswer]=useState("");
  // console.log(incorrectAnswers);
  const createQuestionSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(questionName);
    try {
      // when Back end is ready

      //  create arry of incoret answers
      // const incorrect_answer = [];
      // incorrect_answer.push(first);
      // incorrect_answer.push(second);
      // incorrect_answer.push(third);
      // console.log(incorrect_answer);
      const { data } = axios.post(BaseUrl+"/create-question", {
        questionName,
        first,
        second,
        third,
        // incorrect_answer,
       answer,
      });
      // console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        // update context
        window.alert("Question Created Successfully");
        setQuestionName("");
        setFirst("");
        setSecond("");
        setThird("");
        answer("");
        // navigator.reload();
      }
    } catch (err) {
      console.log("err");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-center">Teacher Admin Panel</h2>
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <div className="dashboard">
              <div className="text-center">
                <form
                  className="question-form"
                  onSubmit={createQuestionSubmitHandler}
                >
                  <h2>Creat Questions</h2>
                  <input
                    className="form-control m-2"
                    type="text"
                    name="questionName"
                    value={questionName}
                    onChange={(e) => setQuestionName(e.target.value)}
                    placeholder="Enter Question Name"
                  />
                  {/* set option  */}
                  <input
                    className="form-control m-2"
                    type="text"
                    name="correctAnswer"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                    placeholder="Enter first option"
                  />

                  <input
                    className="form-control m-2"
                    type="text"
                    name="option"
                    value={second}
                    onChange={(e) => setSecond(e.target.value)}
                    placeholder="Enter second option"
                  />
                  {/*  */}
                  <input
                    className="form-control m-2"
                    type="text"
                    name="incorrectAnswers"
                    value={third}
                    onChange={(e) => setThird(e.target.value)}
                    placeholder="Enter incorrect answers"
                  />
                  {/*  */}
                  <input
                    className="form-control m-2"
                    type="text"
                    name="incorrectAnswers"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter Correct answers"
                  />
                  {/*  */}
                  <button type="submit" className="btn btn-success">
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default CreateQuestion;
