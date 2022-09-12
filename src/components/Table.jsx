import React from "react";

function Table(linkInput, shortenedLink) {
  const data = [{ linkInput }, { shortenedLink }];
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Link</th>
          <th>Shorten link</th>
          <th>Transision</th>
        </tr>
        {data.map((val, key) => {
          return (
            <>
              <tr key={key}>
                <td>{val.linkInput}</td>
                <td>{val.shortenedLink}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
