import React from "react";
import BackHeader from "../layout/BackHeader"
import Article1 from "../component/Article/Article1";
import Profile1 from "../component/Article/Profile1";
import { useSelector } from "react-redux"
const News1 = () => {
  let state = useSelector((state) =>state )
  return (

    <div>
  <BackHeader></BackHeader>
    <Profile1></Profile1>
  <Article1></Article1>
  </div>
    )
}

export default News1