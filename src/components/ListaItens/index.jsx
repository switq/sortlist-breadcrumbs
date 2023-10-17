import React from 'react';
import './ListaItens.css';

export default function ListaItens(props) {
    return (
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Nome:</th>
                </tr>
            </thead>
            <tbody>
                {props.lista.map((item, index) => (
                    <tr key={index}>
                        <td>{item}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}