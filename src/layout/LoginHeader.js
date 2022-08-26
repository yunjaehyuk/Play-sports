import React from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";
import LoginNavigation from './LoginNavigation';
import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import classes from './LoginHeader.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginHeader = (props) => {
  let navigate = useNavigate();
  return (
    <header className={classes.header}>
        <Navbar className={classes.arrowicon}variant="light">
          <Container>
            <div onClick={() => {
                navigate('/');
              }}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </div>
  
          </Container>
        </Navbar>
  </header>
  );
};

export default LoginHeader;
