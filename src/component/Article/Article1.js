import React from "react"
import { useSelector } from "react-redux"

const Article1 = () =>{
  let state = useSelector((state) =>state )
 return (
 <div>
  <div>
    hi
  </div>
 </div>
 )
}

export default Article1;