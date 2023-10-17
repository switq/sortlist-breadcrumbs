import React from 'react';
import './ListaItens.css';

export default function ListaItens(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Nome:</th>
                </tr>
                {props.lista.map((item, index) => (
                    <tr key={index}>
                        <td>{item}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}