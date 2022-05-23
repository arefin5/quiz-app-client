import { Fragment, useContext } from "react";
import { UserContext, UserProvider } from "./context";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLogin from "./pages/AuthLogin";
import AuthSignup from "./pages/AuthSignup";
import Quiz from "./pages/QuizPage/Quiz";
import User from "./pages/User/User";
import AdminPanel from "./admin/AdminPanel";
import CreateQuestion from "./admin/CreateQuestion";
import Header from "./Layout/Header";
import StudentDash from "./pages/student/StudentDash";
import Home from "./pages/HomePage/Home";
function Main() {
  const [state, setState] = useContext(UserContext);

  return (
          <Routes>
            {state && state.user ? (
              <>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/student/dashboard" element={<StudentDash />} />
                <Route exact path="/quiz" element={<Quiz/>} />
                <Route render={() => <Navigate to="/users/dashboard" />} />
                <Route exact path="/exam/*" element={<User />} />
                <Route exact path="/admin/dashboard" element={<AdminPanel />} />
                <Route
                  exact
                  path="/admin/dashboard/create/question"
                  element={<CreateQuestion />}
                />
              </>
            ) : (
              <>
                <Route exact path="/login" element={<AuthLogin />} />
                <Route exact path="/signup" element={<AuthSignup />} />
              </>
            )}
            {/* {state.user ? () => <Home /> : () => <AuthLogin />} */}
          </Routes>
      
      
  );
}

export default Main;
