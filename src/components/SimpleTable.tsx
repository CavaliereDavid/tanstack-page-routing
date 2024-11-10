import React from "react";
import { Flex, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

interface DataType {
  key: React.Key;
  codice: string;
  ragioneSociale: string;
  ricavi: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Codice",
    dataIndex: "codice",
    sorter: (a, b) => a.codice.localeCompare(b.codice),
    filters: [
      { text: "111554", value: "111554" },
      { text: "110780", value: "110780" },
      { text: "111518", value: "111518" },
      { text: "111538", value: "111538" },
      { text: "110029", value: "110029" },
      { text: "111434", value: "111434" },
      { text: "111041", value: "111041" },
      { text: "107341", value: "107341" },
      { text: "111095", value: "111095" },
    ],
    onFilter: (value, record) => record.codice.includes(value as string),
  },
  {
    title: "Ragione Sociale",
    dataIndex: "ragioneSociale",
    sorter: (a, b) => a.ragioneSociale.localeCompare(b.ragioneSociale),
    filters: [
      { text: "IRAL SRL", value: "IRAL SRL" },
      {
        text: "P.F.M. SNC DI MANCABELLI MANUEL & C.",
        value: "P.F.M. SNC DI MANCABELLI MANUEL & C.",
      },
      { text: "VLP S.R.L.", value: "VLP S.R.L." },
      { text: "A.& A. SRL", value: "A.& A. SRL" },
      { text: "G.M.C. SRL", value: "G.M.C. SRL" },
      {
        text: "FAM. COOP. GIUDICARIE DON GUETTI SOC. COOP.",
        value: "FAM. COOP. GIUDICARIE DON GUETTI SOC. COOP.",
      },
      { text: "GRUPPO MUSETTI S.R.L.", value: "GRUPPO MUSETTI S.R.L." },
      {
        text: "VILLA MARKET S.N.C. DI SPADAVECCHIA GIOVANNI E C.",
        value: "VILLA MARKET S.N.C. DI SPADAVECCHIA GIOVANNI E C.",
      },
      { text: "GEST S.D.B. SRL", value: "GEST S.D.B. SRL" },
    ],
    onFilter: (value, record) =>
      record.ragioneSociale.includes(value as string),
  },
  {
    title: "Ricavi (€)",
    dataIndex: "ricavi",
    sorter: (a, b) => parseInt(a.ricavi) - parseInt(b.ricavi),
    filters: [
      { text: "32K", value: "32K" },
      { text: "30K", value: "30K" },
      { text: "28K", value: "28K" },
      { text: "25K", value: "25K" },
      { text: "23K", value: "23K" },
      { text: "22K", value: "22K" },
      { text: "20K", value: "20K" },
      { text: "17K", value: "17K" },
      { text: "15K", value: "15K" },
    ],
    onFilter: (value, record) => record.ricavi.includes(value as string),
  },
];

const data: DataType[] = [
  {
    key: "1",
    codice: "111554",
    ragioneSociale: "IRAL SRL",
    ricavi: "32K",
  },
  {
    key: "2",
    codice: "110780",
    ragioneSociale: "P.F.M. SNC DI MANCABELLI MANUEL & C.",
    ricavi: "30K",
  },
  {
    key: "3",
    codice: "111518",
    ragioneSociale: "VLP S.R.L.",
    ricavi: "28K",
  },
  {
    key: "4",
    codice: "111538",
    ragioneSociale: "A.& A. SRL",
    ricavi: "25K",
  },
  {
    key: "5",
    codice: "110029",
    ragioneSociale: "G.M.C. SRL",
    ricavi: "23K",
  },
  {
    key: "6",
    codice: "111434",
    ragioneSociale: "FAM. COOP. GIUDICARIE DON GUETTI SOC. COOP.",
    ricavi: "22K",
  },
  {
    key: "7",
    codice: "111041",
    ragioneSociale: "GRUPPO MUSETTI S.R.L.",
    ricavi: "20K",
  },
  {
    key: "8",
    codice: "107341",
    ragioneSociale: "VILLA MARKET S.N.C. DI SPADAVECCHIA GIOVANNI E C.",
    ricavi: "17K",
  },
  {
    key: "9",
    codice: "111095",
    ragioneSociale: "GEST S.D.B. SRL",
    ricavi: "15K",
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra,
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const SimpleTable: React.FC = () => (
  <>
    <div className="title">
      <Table<DataType>
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  </>
);

export default SimpleTable;
