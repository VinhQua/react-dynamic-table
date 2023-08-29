import React from "react";
import { convertToJSON } from "../../../utils/methods";

const SaveToJson = ({ columns, rows }) => {
  const downloadJSON = () => {
    const data = convertToJSON({ columns, rows });
    const fileData = JSON.stringify(data);
    const fileBlob = new Blob([fileData], { type: "text/plain" });
    const fileURL = URL.createObjectURL(fileBlob);
    const a = document.createElement("a");
    a.href = fileURL;
    a.download = "data.json";
    a.click();
  };

  return (
    <button type="button" className="btn btn-success" onClick={downloadJSON}>
      Save as JSON
    </button>
  );
};

export default SaveToJson;
