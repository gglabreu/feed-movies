import { GridCellProps } from "@progress/kendo-react-grid";

const NoteCell = (props: GridCellProps) => {
  const formatNote = (value: number) => {
    return value.toFixed(3);
  };

  if (props.field) {
    return <td>{formatNote(props.dataItem[props.field])}</td>;
  }
  return <td>{"Não informado"}</td>;
};

export default NoteCell;
