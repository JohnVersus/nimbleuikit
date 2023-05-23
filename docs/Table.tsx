const Table = ({ headers, rows }: { headers: ""[]; rows: ""[][] }) => (
  <table>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>
              <code>{cell}</code>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
