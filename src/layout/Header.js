import React, { Fragment } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import {  faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  let navigate = useNavigate();
  return (
    <Fragment>
      <header className={styles.header}>

        <Navbar variant="light">
          <Container>
            <div className={styles['header_name']}>
            <div
              className={styles.title}
              onClick={() => {
                navigate("/");
              }}
            >
              Play
            </div>
              </div>
              <div>

            <Nav className={styles.headericons}>
              <Nav.Link href="#home"></Nav.Link>
              <Nav.Link href="#features"></Nav.Link>
              <div className={styles.headericon}>
 
                <div className={styles.headerusericon} onClick={()=>{navigate('/Login')}}>
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
