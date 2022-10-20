import React, { Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";
import classes from "./BackHeader.module.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const BackHeader = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <header className={classes.header}>
        <Navbar
          onClick={() => {
            navigate(-1);
          }}
          className={classes.arrowicon}
          variant="light"
        >
          <Container className={classes.backarrowicon}>
            <div>
              <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </div>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
};

export default BackHeader;
