import { useState } from "react";
import { Header, Table } from "./Components";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import { styled } from "styled-components";
function App() {
  const [columns, setColumns] = useState(["column 1"]);
  const [rows, setRows] = useState([]);
  const addColumns = () => {
    if (columns.length > 7) {
      return toast.error("Maximum is 8 columns");
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
    <Wrapper>
      <ToastContainer
        position="top-center"
        hideProgressBar
        autoClose={2000}
        transition={Slide}
      />
      <Header
        columns={columns}
        addColumns={addColumns}
        rows={rows}
        addRow={addRow}
      />

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
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  width: 100%;
  padding-right: calc(1.5rem * 0.5);
  padding-left: calc(1.5rem * 0.5);
  margin-right: auto;
  margin-left: auto;
`;
