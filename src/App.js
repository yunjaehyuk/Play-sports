import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Game from "./pages/Game";
import More from "./pages/More";
import MainNews from "./pages/MainNews";
import styles from "./app.module.css";
import Epl from "./pages/Epl";
import LaLiga from "./pages/LaLiga";
import Bundes from "./pages/Bundes";
import SerieA from "./pages/SerieA";
import Calendar from "./pages/Calendar";
import News1 from "./pages/News1";
import News2 from "./pages/News2";
import News3 from "./pages/News3";
import News4 from "./pages/News4";
import News5 from "./pages/News5";

const App = ({ authService }) => {
  const navigate = { useNavigate };
  const [filterdYear, setFilterdYear] = useState("2021-22");
  const changeFilter = (selectedYear) => {
    setFilterdYear(selectedYear);
  };
  return (
    <div className={styles.App}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login authService={authService} />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/More" element={<More />} />
          <Route path="/MainNews" element={<MainNews />} />
          <Route path="/News1" element={<News1 />} />
          <Route path="/News2" element={<News2 />} />
          <Route path="/News3" element={<News3 />} />
          <Route path="/News4" element={<News4 />} />
          <Route path="/News5" element={<News5 />} />
          <Route
            path="/Epl"
            element={
              <Epl
                navigate={navigate}
                selected={filterdYear}
                onChangeFilter={changeFilter}
              />
            }
          />
          <Route
            path="/Laliga"
            element={
              <LaLiga
                navigate={navigate}
                selected={filterdYear}
                onChangeFilter={changeFilter}
              />
            }
          />
          <Route
            path="/Bundes"
            element={
              <Bundes
                navigate={navigate}
                selected={filterdYear}
                onChangeFilter={changeFilter}
              />
            }
          />
          <Route
            path="/SerieA"
            element={
              <SerieA
                navigate={navigate}
                selected={filterdYear}
                onChangeFilter={changeFilter}
              />
            }
          />
          <Route path="/Calendar" element={<Calendar navigate={navigate} />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
