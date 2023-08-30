import React from "react";
import { styled } from "styled-components";
import SaveToJson from "./Components/SaveToJson";
import SaveToExcel from "./Components/SaveToExcel";
import ImportFromExcel from "./Components/ImportFromExcel";

const Header = ({ addColumns, columns, rows, addRow }) => {
  return (
    <div className="row">
      <div className="col-md-10 mt-5 mx-auto d-flex justify-content-between align-items-center">
        <a href="/" className="ms-5 text-decoration-none text-dark fw-bold">
          Reactjs Dynamic Table
        </a>
        <div className="d-flex justify-content-end gap-1 align-items-center">
          <p className="my-0">Columns : {columns.length}</p>
          <p className="my-0">Rows : {rows.length}</p>
          <button
            type="button"
            className="ms-1 btn btn-outline-dark"
            onClick={addColumns}
          >
            Add Column
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={addRow}
          >
            Add Row
          </button>
          <SaveToJson columns={columns} rows={rows} />
          <SaveToExcel rows={rows} columns={columns} />
          <ImportFromExcel />
        </div>
      </div>
    </div>
  );
};

export default Header;

const Wrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin-top
`;
