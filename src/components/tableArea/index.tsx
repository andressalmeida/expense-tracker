import { ItemType } from "../../@types/ItemType";
import * as C from "./styles";
import { TableItem } from "../TableItem";

type Props = {
  list: ItemType[];
  onDelete: (itemId: string) => void;
};

export const TableArea = ({ list, onDelete }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={110}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
          <C.TableHeadColumn width={30} />
        </tr>
      </thead>

      <tbody>
        {list.map((item, index) => (
      <TableItem key={index} item={item} onDelete={onDelete}/>
        ))}
      </tbody>
    </C.Table>
  );
};
