import { useState, useEffect } from 'react';
import './Path.css';

export default function Path({selecionado, setSelecionado}) {
    const [caminho, setCaminho] = useState([]);

    useEffect(() => {
        setCaminho([...selecionado]);
    }, [selecionado])

    function handleUpdatePath(index) {
        setSelecionado(prevSelecionado => {
            let newSelecionado = [...prevSelecionado];
            newSelecionado.splice(index+1, newSelecionado.length - index)
            return newSelecionado;
        })
    }

    return (
        <div className='bc'>
            <span className='pointer' onClick={e => setSelecionado([])}>departamento </span>
            {caminho.map((item, index) => (
                <>
                    <span>{'> '}</span>
                    <span
                    className='pointer'
                    key={index}
                    onClick={e => handleUpdatePath(index)}
                    >
                        {item}
                    </span>
                    <span>{' '}</span>
                </>
                
            ))}
        </div>
    )
}