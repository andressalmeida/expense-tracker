import { ItemType } from "../../@types/ItemType";
import * as C from "./styles";
import { ChangeEvent, useState } from "react";
import { categories } from "../../data/categories";
import { newDateAdjusted } from "../../utils/dateFilter";

type Props = {
  onAdd: (item: ItemType) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputValue, setInputValue] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(inputDate).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(inputCategory)) {
      errors.push("Categoria inválida!");
    }
    if (inputTitle === "") {
      errors.push("Título vazio!");
    }
    if (inputValue <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      let newItem: ItemType = {
        date: newDateAdjusted(inputDate),
        category: inputCategory,
        title: inputTitle,
        value: inputValue,
      };

      onAdd(newItem);
      clearFields();
    }
  };

  const clearFields = () => {
    setInputDate("");
    setInputCategory("");
    setInputTitle("");
    setInputValue(0);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseInt(e.target.value));
  };

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          value={inputCategory}
          onChange={(e) => setInputCategory(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((item, index) => (
              <option key={index} value={item}>
                {categories[item].title}
              </option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input type="text" value={inputTitle} onChange={handleTitleChange} />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type="number"
          value={inputValue}
          onChange={handleInputValueChange}
        />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};
