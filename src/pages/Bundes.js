import BackHeader from "../layout/BackHeader";
import Card from "../UI/Card";
import React, { useState } from "react";
import TableFilter from "../component/table/TableFilter";
import TableBundes from "../component/table/TableBundes";
function Bundes({ navigate, selected, onChangeFilter }) {
  return (
    <div>
      <Card className="League">
        <BackHeader navigate={navigate}></BackHeader>
        <TableFilter
          selected={selected}
          onChangeFilter={onChangeFilter}
        ></TableFilter>
        <TableBundes> card</TableBundes>
      </Card>
    </div>
  );
}
export default Bundes;
