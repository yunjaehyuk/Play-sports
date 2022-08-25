import React from "react"

import TabEpl from "./TabEpl"
import TabLaLiga from "./TabLaLiga"
import TabBundes from "./TabBundes"
import TabSerieA from "./TabSerieA"

function TabScore(props) {
  if (props.tap == 0) {
  return <div>
    <TabEpl navigate={props.navigate}></TabEpl>
    </div>
  }
  if (props.tap == 1) {
   return  <div>
  <TabLaLiga navigate={props.navigate}></TabLaLiga>
    </div>
  }
  if(props.tap == 2) {
    return <div>
    <TabBundes navigate={props.navigate}></TabBundes>
    </div>
  }
  if(props.tap == 3) {
    return <div>
    <TabSerieA navigate={props.navigate}></TabSerieA>
    </div>
  }
  }

  export default TabScore