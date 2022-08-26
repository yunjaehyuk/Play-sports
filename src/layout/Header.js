import React, { Fragment } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import {
  faSearch,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  let navigate = useNavigate();
  return (
    <Fragment>
      <header className={classes.header}>

        <Navbar variant="light">
          <Container>
            <div className={classes['header_name']}>
            <div
              className={classes.title}
              onClick={() => {
                navigate("/");
              }}
            >
              Play
            </div>
              </div>
              <div>

            <Nav className={classes.headericons}>
              <Nav.Link href="#home"></Nav.Link>
              <Nav.Link href="#features"></Nav.Link>
              <div className={classes.headericon}>
 
                <div className={classes.headerusericon} onClick={()=>{navigate('/Login')}}>
                  <FontAwesomeIcon icon={faUser} size="2x" />
                </div>
              </div>
            </Nav>
              </div>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
};

export default Header;
