import React, { useState } from "react";
import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/index";
import { USER_SIGNOUT } from "../actions/actionTypes";
const Header = () => {
  const { user, dispatch } = useUserContext();
  //
  const navigate = useNavigate();

  const [navbarToggle, setNavbarToggle] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarToggle({
      navbarToggle: !navbarToggle,
    });
  };

  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("student");
    dispatch({ type: USER_SIGNOUT });
    navigate("/login");
  };

  return (
    <Navbar className="k" expand="md" style={{ background: "#0A192F" }}>
      <NavbarToggler style={{ color: "black" }} onClick={navbarToggleHandler} />
      <Nav className="mr-auto" navbar>
      <NavItem className="nav-item">
              <Link to="/" className="nav-link">
                Quiz App
              </Link>
            </NavItem>
        </Nav>
      <Collapse className="d-flex justify-content-end"  navbar isOpen={navbarToggle}>
        
        <div >
          <Nav navbar className="ml-auto ">
            {/* <NavItem className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem> */}
            {user && user.role === "Admin" ? (
              <>
                <NavItem className="nav-item">
                  <Link to="/admin/dashboard" className="nav-link">
                    Admin
                  </Link>
                </NavItem>
                <NavItem className="nav-item ">
                  <Link to="/teacher/dashboard" className="nav-link">
                    Teacher
                  </Link>
                </NavItem>
              </>
            ) : null}
            {user && user.role === "Teacher" ? (
              <>
                <NavItem className="nav-item">
                  <Link to="/teacher/dashboard" className="nav-link">
                    Teacher
                  </Link>
                </NavItem>
              </>
            ) : null}
            {/* {user && user.role === "Subscriber" ? (
            <>
              <NavItem className="nav-item">
                <Link to="/reults" className="nav-link">
                  Results
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link to="/student/dashboard" className="nav-link">
                  Student Dashboard
                </Link>
              </NavItem>
            </>
          ) : (
            <></>
          )} */}

            {user && user.role === "Subscriber" ? (
              <>
                <NavItem className="nav-item">
                  <Link to="/reults" className="nav-link">
                    Results
                  </Link>
                </NavItem>
                <NavItem className="nav-item">
                  <Link to="/student/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </NavItem>
                <NavItem className="nav-item">
                  <Link to="/user/profile" className="nav-link">
                    Profile
                  </Link>
                </NavItem>
              </>
            ) : (
              <></>
            )}
            {user ? (
              <div
                className="log-out"
                style={{
                  paddingTop: "5px",
                  cursor: "pointer",
                  color: "#fff",
                  fontWeight: "bold",
                  marginTop: "-2px",
                }}
                onClick={logout}
              >
                LogOut
              </div>
            ) : (
              <>
                <NavItem className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Student
                  </Link>
                </NavItem>
                <NavItem className="nav-item">
                  <Link to="/teacher/signup" className="nav-link">
                    Teacher
                  </Link>
                </NavItem>
              </>
            )}
          </Nav>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
