import React from "react";
import { convertToJSON } from "../../../utils/methods";
import exportFromJSON from "export-from-json";
import { utils, writeFile } from "xlsx";

const SaveToExcel = ({ rows, columns }) => {
  const downloadExcel = () => {
    const data = convertToJSON({ rows, columns });
    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "sheet1");
    writeFile(wb, "Homework.xlsx");
  };

  return (
    <button type="button" className="btn btn-success" onClick={downloadExcel}>
      Export Excel
    </button>
  );
};

export default SaveToExcel;
