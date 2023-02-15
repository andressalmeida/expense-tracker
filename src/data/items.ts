import { ItemType } from "../@types/ItemType";

export const items: ItemType[] = [
  {
    id: '01',
    date: new Date(2023, 1, 2),
    category: "food",
    title: "MC Donalds",
    value: 32.12,
  },
  {
    id: '02',
    date: new Date(2023, 2, 13),
    category: "food",
    title: "Burger King",
    value: 22.12,
  },
  {
    id: '03',
    date: new Date(2023, 1, 1),
    category: "rent",
    title: "Aluguel",
    value: 2500,
  },
  {
    id: '04',
    date: new Date(2023, 1, 13),
    category: "salary",
    title: "Salario",
    value: 4500,
  },
];
