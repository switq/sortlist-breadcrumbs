import { useState } from 'react';
import ListaItens from '../components/ListaItens';
import './App.css';
import Path from '../components/Path';
import DynamicTable from '../components/DynamicTable';

const dept = {
  roupas: 
    {
      blusas: {'manga comprida': {}, 'regata': {}, 'renda': {}, 'cropped': {}, 'jeans': {}, 'estampadas': {}, 'listradas': {}},
      calças: {'jeans': {}, 'cargo': {}, 'social': {}, 'skinny': {}, 'wide leg': {}, 'pantacourt': {}, 'jogger': {}, 'legging': {}},
      tênis: {'Nike': {}, 'Adidas': {}, 'Olympikus': {}, 'converse': {}, 'vans': {}}
    },
  livros: 
    {
      terror: {'It a coisa': {}, 'O vilarejo': {}, 'Frankenstein': {}, 'O exorcista': {}, 'O cemitério': {}, 'Coraline': {}},
      romance: {'A culpa é das estrelas': {}, 'Amor e gelato': {}, 'Ugly Love': {}, 'Toodas as suas (im)perfeições': {}, 'Todo esse tempo': {}},
      mangá: {'Chainsaw Man': {}, 'One Piece': {}, 'Boku no Hero': {}, 'Naruto': {}, 'Blue Lock': {}, 'Jujutsu no kaisen': {}, 'Bleach': {}},
    },
  eletrônicos: 
    {
      smartphones: {'apple': {}, 'samsung': {}, 'motorola': {}, 'Xiaomi': {}, 'ASUS': {}, 'HUAWEI': {}},
      notebooks: {'intel': {}, 'positivo': {}, 'Dell': {}, 'ASUS': {}, 'Samsung': {}, 'Lenovo': {}},
    },
  comidas:
    {
      doces: {'brigadeiro': {}, 'torta de limão': {}, 'torta de maça': {}, 'macaron': {}, 'bolacha': {}, 'suspiro': {}},
      salgados: {'Croissant': {}, 'Bauru': {}, 'Apresuntado': {}, 'pão de frios': {}},
    }
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
