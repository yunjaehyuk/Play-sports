import React from "react";

import TabEpl from "./TabEpl";
import TabLaLiga from "./TabLaLiga";
import TabBundes from "./TabBundes";
import TabSerieA from "./TabSerieA";
import { useNavigate } from "react-router-dom";

function TabScore({ tap }) {
  const navigate = useNavigate();

  if (tap == 0) {
    return (
      <div>
        <TabEpl navigate={navigate}></TabEpl>
      </div>
    );
  }
  if (tap == 1) {
    return (
      <div>
        <TabLaLiga navigate={navigate}></TabLaLiga>
      </div>
    );
  }
  if (tap == 2) {
    return (
      <div>
        <TabBundes navigate={navigate}></TabBundes>
      </div>
    );
  }
  if (tap == 3) {
    return (
      <div>
        <TabSerieA navigate={navigate}></TabSerieA>
      </div>
    );
  }
}

export default TabScore;
