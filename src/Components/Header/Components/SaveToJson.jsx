import React from "react";

const SaveToJson = ({ columns, rows }) => {
  const convertToJSON = () => {
    let data = [];
    rows.map((row, index) => {
      let obj = { id: index + 1 };
      columns.map((col, colIndex) => {
        obj[col] = row[colIndex];
      });
      data.push(obj);
    });
    console.log(data);
    const fileData = JSON.stringify(data);
    const fileBlob = new Blob([fileData], { type: "text/plain" });
    const fileURL = URL.createObjectURL(fileBlob);
    const a = document.createElement("a");
    a.href = fileURL;
    a.download = "data.json";
    a.click();
  };

  return (
    <button type="button" className="btn btn-success" onClick={convertToJSON}>
      Save as JSON
    </button>
  );
};

export default SaveToJson;
