// Importação importante para a gestão de dados do projeto (biblioteca useState) !
import { useState } from 'react';

// importação da nossa API Via CEP!
import api from './api/api-cep';

// Importação da biblioteca de icones do react
import { FiSearch } from 'react-icons/fi';

// Importação do componente do logo tipo do governo federal
import Logotipo_BR_CPN from './components/logotipo_br';

import './css/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logotipo_BR_CPN/>
        <h1>Buscar CEP</h1>
        <h2>Sistema de busca instantânea de endereços nível Brasil</h2>  
      </header>
    </div>
  );
}

export default App;
