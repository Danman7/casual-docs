import type { TableColumn } from "@/app/ui/Table";

export type WoundRoll = {
  comparison: string;
  result: string;
};

export const woundRollColumns: TableColumn<WoundRoll>[] = [
  {
    id: "comparison",
    header: "Strength compared with Toughness",
    accessor: (row) => row.comparison,
  },
  {
    id: "result",
    header: "Required roll",
    accessor: (row) => row.result,
    align: "center",
  },
];

export const woundRollRows: WoundRoll[] = [
  { comparison: "Strength is at least double Toughness", result: "2+" },
  { comparison: "Strength is greater than Toughness", result: "3+" },
  { comparison: "Strength equals Toughness", result: "4+" },
  { comparison: "Strength is lower than Toughness", result: "5+" },
  { comparison: "Strength is half or less than Toughness", result: "6+" },
];
