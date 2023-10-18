import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import './ListaItens.css';

export default function ListaItens({lista, setSelecionado}) {
    const [sortedList, setSortedList] = useState([]);

    const [sortType, setSortType] = useState('');
    
    useEffect(() => {
        setSortedList(sortList(sortType));

    }, [lista, sortType])

    function sortList(type) {
        console.log(sortedList)
        const newSortedList = [...lista];

        if (type === 'az') newSortedList.sort();
        else if (type === 'za') newSortedList.sort().reverse();

        return newSortedList;
    }
    
    return (
        <div>
            <Table bordered hover striped>
                <thead>
                    <tr>
                        <th>Nome:</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedList.map((item, index) => (
                        <tr key={index} onClick={e => setSelecionado(prevSelecionado => {
                            const newSelecionado = [...prevSelecionado];
                            newSelecionado.push(e.target.innerHTML);
                            return newSelecionado;
                        })}>
                            <td className='pointer'>{item}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* <select
                onChange={e => setSortType(e.target.value)}
            >
                <option value=""></option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
            </select> */}
        </div>
    )
}