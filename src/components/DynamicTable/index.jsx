import React, { useState } from 'react';
import { Table } from 'reactstrap';

function DynamicTable() {
  const [data, setData] = useState([
    { id: 1, name: 'Uva', price: 5 },
    { id: 2, name: 'Morango', price: 20 },
    { id: 3, name: 'Abacaxi', price: 25 },
    { id: 4, name: 'Banana', price: 2 },
  ]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DynamicTable;