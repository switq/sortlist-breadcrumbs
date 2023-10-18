import { useState } from 'react';
import ListaItens from '../components/ListaItens';
import './App.css';
import Path from '../components/Path';
import DynamicTable from '../components/DynamicTable';

const dept = {
  roupas: 
    {
      blusas: {'manga comprida': {}, 'regata': {}, 'renda': {}},
      calças: {'jeans': {}, 'cargo': {}, 'social': {}},
    },
  livros: 
    {
      terror: {'It a coisa': {}, 'O vilarejo': {}, 'Frankenstein': {}},
      romance: {'A culpa é das estrelas': {}, 'Amor e gelato': {}},
      mangá: {'Chainsaw Man': {}, 'One Piece': {}, 'Boku no Hero': {}, 'Naruto': {}},
    },
  eletrônicos: 
    {
      smartphones: {'apple': {}, 'sansung': {}, 'motorola': {}},
      notebooks: {'intel': {}, 'positivo': {}},
    },
}

function toArray(obj) {
  return Object.keys(obj);
}

function App() {
  const [selecionado, setSelecionado] = useState([]);


  function objPath() {
    let obj = {...dept};
    for (let i = 0; i < selecionado.length; i++) {
      obj = {...obj[selecionado[i]]};
    }
    return obj;
  }

  return (
    <div className="App">
      <h1>SortedList</h1>
      <DynamicTable></DynamicTable>
      
      <h1>BreadCrumbs</h1>
      <Path
        selecionado={selecionado}
        setSelecionado={setSelecionado}
        />
      <ListaItens 
        lista={toArray(objPath())}
        setSelecionado={setSelecionado}
        />
      
    </div>
  );
}

export default App;
