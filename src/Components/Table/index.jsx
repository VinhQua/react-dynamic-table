import React from "react";

const Table = ({
  addColumns,
  rows,
  columns,
  deleteColumn,
  handleColumnChange,
  addRow,
  deleteRow,
  handleRowChange,
}) => {
  console.log(columns);
  return (
    <div className="row mb-5">
      <div className="col-md-10 mx-auto mt-5 ">
        <table className="table">
          <thead className="bg-dark text-white">
            {columns.length > 1 && (
              <tr>
                <th></th>
                {columns.map((col, index) => (
                  <th key={index * 23423}>
                    <button
                      type="button"
                      className="btn btn-block btn-sm form-control text-center"
                      onClick={() => deleteColumn(index)}
                    >
                      delete
                    </button>
                  </th>
                ))}
                <th></th>
              </tr>
            )}

            <tr>
              <th scope="col" className="text-center">
                Sno.
              </th>
              {columns.map((col, index) => (
                <th key={index} scope="col" className="text-center">
                  <input
                    type="text"
                    className="form-control text-center text-black border-transparent border-0"
                    value={col}
                    style={{ boxShadow: "none" }}
                    onChange={(e) => handleColumnChange(e.target.value, index)}
                  />
                </th>
              ))}

              <th scope="col" className="text-center">
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm"
                  onClick={addColumns}
                >
                  add Column
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.length < 1 ? (
              <tr>
                <th
                  scope="col"
                  colSpan={columns.length + 1}
                  className="text-center py-3"
                >
                  Please click Add Row button to add a row
                </th>
              </tr>
            ) : (
              rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <th></th>
                  {row.map((colValue, colIndex) => (
                    <td key={colIndex}>
                      <input
                        type="text"
                        className="form-control text-center text-black border-transparent border-0"
                        value={colValue}
                        style={{ boxShadow: "none" }}
                        onChange={(e) =>
                          handleRowChange(e.target.value, rowIndex, colIndex)
                        }
                      />
                    </td>
                  ))}
                  <th>
                    <button
                      type="button"
                      className="btn btn-sm form-control text-center"
                      onClick={() => deleteRow(rowIndex)}
                    >
                      delete
                    </button>
                  </th>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <button
          type="button"
          className="form-control btn btn-outline-dark btn-block mt-2"
          onClick={addRow}
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default Table;
