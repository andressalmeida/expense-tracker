import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: bold;
`;
export const DeleteButton = styled.button`
  cursor: pointer;
  width: 30px;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 3px;

  :hover {
    background-color: #ccc;
  }
`;
