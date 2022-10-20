import React from "react";
import BackHeader from "../layout/BackHeader";
import MainArticle from "../component/article/MainArticle";
import MainProfile from "../component/Profile/MainProfile";
const MainNews = (props) => {
  return (
    <React.Fragment>
      <BackHeader></BackHeader>
      <MainProfile />
      <MainArticle></MainArticle>
    </React.Fragment>
  );
};

export default MainNews;
