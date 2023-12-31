import React, { useState } from 'react';
import { Table } from 'reactstrap';

function DynamicTable() {
  const [data, setData] = useState([
    { ID: 1, Name: 'Uva', Price: 5 },
    { ID: 2, Name: 'Morango', Price: 20 },
    { ID: 3, Name: 'Abacaxi', Price: 25 },
    { ID: 4, Name: 'Banana', Price: 2 },
  ]);

  function sortTable(atr) {
    // função para alterar o valor state data
    setData(prevData => { 
        const newData = [...prevData]; // cópia de data

        // ordenação com base no titulo (atr) da coluna passada
        newData.sort((a, b) => (a[atr] < b[atr] ? -1 : a[atr] < b[atr] ? 1 : 0)); 
        
        // comparação da data antiga e a nova, se forem iguais, inverte a tabela (de A-Z para Z-A ou vise e versa)
        if (JSON.stringify(prevData) === JSON.stringify(newData)) newData.reverse(); 
        
        return newData;
    })
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th className='pointer' onClick={e => sortTable(e.target.innerHTML)}>ID</th>
            <th className='pointer' onClick={e => sortTable(e.target.innerHTML)}>Name</th>
            <th className='pointer' onClick={e => sortTable(e.target.innerHTML)}>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.ID}>
              <td>{item.ID}</td>
              <td>{item.Name}</td>
              <td>{item.Price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DynamicTable;