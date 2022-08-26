import React,{useState} from "react"
import NewExpense from "../component/Calendar/NewExpense/NewExpense"
import BackHeader from "../layout/BackHeader";
import Expenses from "../component/Calendar/Expenses/Expenses";
const Calendar = () =>{ 
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Tottenham vs Wolves',
      amount: 94.12,
      date: new Date(2022, 8, 21),
    },
    { id: 'e2', title: 'Real Madrid vs Liverpool', amount: 799.49, date: new Date(2021, 5, 29) },
    {
      id: 'e3',
      title: 'Girona vs Valladolid',
      amount: 294.67,
      date: new Date(2022, 9, 10),
    },
    {
      id: 'e4',
      title: 'Sevilla vs Inter Milano',
      amount: 450,
      date: new Date(2020, 8, 22),
    },
  ];
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExepnseHandler = (expense) => {
     setExpenses((preExpense) => {
      return [expense, ...preExpense]
     })
  }
  return (
    <div>
  <BackHeader></BackHeader>
  <NewExpense onAddExpense={addExepnseHandler}></NewExpense>
  <Expenses items={expenses} />
    </div>
  )
}
export default Calendar