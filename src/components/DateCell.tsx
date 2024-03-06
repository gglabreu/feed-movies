import { GridCellProps } from "@progress/kendo-react-grid";

const DateCell = (props: GridCellProps) => {
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };
  if (props.field) {
    return <td>{formatDate(props.dataItem[props.field])}</td>;
  }
  return <td>{"Não informado"}</td>;
};

export default DateCell;
