import { BonusTableProps } from "@/types/audit.types";
import { Table } from "react-bootstrap";

const BonusTable = <T,>({
  className,
  rows,
  renderRow,
}: BonusTableProps<T>) => {
  return (
    <Table className={className}>
      <tbody>{rows.map((row, i) => renderRow(row, i))}</tbody>
    </Table>
  );
};

export default BonusTable;
