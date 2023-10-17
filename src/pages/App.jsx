import ListaItens from '../components/ListaItens';
import './App.css';
 
const dept = {
  roupas: 
    {
      blusas: {'manga comprida': {}, 'regata': {}, 'renda': {}},
      calças: {'jeans': {}, 'cargo': {}, 'social': {}},
    },
  livros: 
    {
      terror: {'It a coisa': {}, 'O vilarejo': {}, 'Frankenstein': {}},
      romance: {'A culpa é das estrelas': {}, 'Amor & gelato': {}},
      mangá: {'Chainsaw Man': {}, 'One Piece': {}, 'Naruto': {}},
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
  return (
    <div className="App">
      <h1>BreadCrumbs</h1>
      <ListaItens lista={toArray(dept)}/>
    </div>
  );
}

export default App;
