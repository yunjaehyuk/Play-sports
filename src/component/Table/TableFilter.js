import React from 'react';
import { useSelector } from "react-redux"
import classes from './TableFilter.module.css'

const TableFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>

    
      <div className={classes.TableFilter}>
      <div className={classes['TableFilter_text']}>
        <label>League</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2021-22</option>
          <option value='2021'>2020-21</option>
          <option value='2020'>2019-20</option>
        </select>
      </div>
    </div>
      </div>
  );
};

export default TableFilter;