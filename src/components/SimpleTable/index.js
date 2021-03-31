import React from 'react';

export default function SimpleTable( {data} ){
  
  const columns = Object.keys(data[0] || []);
  return (
    <>
      <table border='1px'>
        <thead>
          <tr>
            {columns.map( (heading, idx) => <th key={idx.toString()}>{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            data.map( (row, idx) => 
              <tr key={idx.toString()}>
                {
                  columns.map( (column, idx) => <td key={idx.toString()}>{row[column]}</td>)
                }
              </tr>
            )
          }
        </tbody>
      </table>
  </>
  );
}