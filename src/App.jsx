import { useState } from "react";
import { Header, Table } from "./Components";

function App() {
  const [columns, setColumns] = useState(["column 1"]);
  const [rows, setRows] = useState([]);
  const addColumns = () => {
    if (columns.length > 7) {
      return alert("Maximum is 8 columns");
    }
    setColumns((prevColumns) => [
      ...prevColumns,
      `column ${prevColumns.length + 1}`,
    ]);
    setRows((prevRows) => prevRows.map((row) => [...row, ""]));
  };
  const deleteColumn = (index) => {
    setColumns((prevColumns) => prevColumns.filter((col, id) => index !== id));
    setRows((prevRows) =>
      prevRows.map((row) => row.filter((colValue, colId) => colId !== index))
    );
  };
  const handleColumnChange = (value, index) => {
    setColumns((prevColumns) =>
      prevColumns.map((col, id) => (index === id ? value : col))
    );
  };
  const addRow = () => {
    setRows((prevRows) => [...prevRows, columns.map(() => "")]);
  };
  const handleRowChange = (value, rowIndex, ColIndex) => {
    setRows((prevRows) =>
      prevRows.map((row, rowId) =>
        rowId === rowIndex
          ? row.map((colValue, colId) =>
              colId === ColIndex ? value : colValue
            )
          : row
      )
    );
  };
  const deleteRow = (rowIndex) => {
    setRows((prevRows) => prevRows.filter((row, index) => rowIndex !== index));
  };

  return (
    <div className="container-fluid">
      <Header
        columns={columns}
        addColumns={addColumns}
        rows={rows}
        addRow={addRow}
      />
      {JSON.stringify(rows)}
      <Table
        rows={rows}
        deleteColumn={deleteColumn}
        columns={columns}
        addColumns={addColumns}
        handleColumnChange={handleColumnChange}
        addRow={addRow}
        handleRowChange={handleRowChange}
        deleteRow={deleteRow}
      />
    </div>
  );
}

export default App;
