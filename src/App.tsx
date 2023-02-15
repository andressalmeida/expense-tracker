import * as C from "./app.styles";
import { CategoryType } from "./@types/CategoryType";
import { ItemType } from "./@types/ItemType";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { useEffect, useState } from "react";
import { getCurrentMonth, filterListByMonth } from "./utils/dateFilter";
import { TableArea } from "./components/tableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<ItemType[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);


  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: ItemType) => {
    let newList = [...list]
    newList.push(item);
    setList(newList);
  }

  const handleDeleteItem = (itemId: string) => {
    let newList = list.filter(item => item.id !== itemId)
    setList(newList)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem}/>

        <TableArea list={filteredList} onDelete={handleDeleteItem}/>
      </C.Body>
    </C.Container>
  );
};

export default App;
