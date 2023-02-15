import * as C from "./styles";
import { ItemType } from "../../@types/ItemType";
import { formatDate } from "../../utils/dateFilter";
import { categories } from "../../data/categories";
import { Trash } from "phosphor-react";

type Props = {
  item: ItemType;
  onDelete: (itemId: string) => void;
};

export const TableItem = ({ item, onDelete }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? "red" : "green"}>
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
      <C.TableColumn>
        <C.DeleteButton onClick={() => onDelete(item.id)}>

        <Trash size={18}  />
        </C.DeleteButton>
      </C.TableColumn>
    </C.TableLine>
  );
};
