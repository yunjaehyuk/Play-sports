import Card from "../UI/Card";
import React from "react";
import TableFilter from "../component/table/TableFilter";
import Navbar from "../layout/Navbar";
import BackHeader from "../layout/BackHeader";
import TableSerieA from "../component/table/TableSerieA";
function SerieA({ navigate, selected, onChangeFilter }) {
  return (
    <Card>
      <BackHeader navigate={navigate} />
      <TableFilter selected={selected} onChangeFilter={onChangeFilter} />
      <TableSerieA />
    </Card>
  );
}
export default SerieA;
