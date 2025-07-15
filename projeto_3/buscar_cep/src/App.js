// Importação importante para a gestão de dados do projeto (biblioteca useState) !
import { useState } from 'react';

// importação da nossa API Via CEP!
import api from './api/api-cep';

// Importação da biblioteca de icones do react
import { FiSearch } from 'react-icons/fi';

// Importação do componente do logo tipo do governo federal
import Logotipo_BR_CPN from './components/logotipo_br';

// Importação do CSS
import './css/style.css';

// Importar imagem direta da arquitetura de software da aplicação
import logo_footer from './img/logotipobr.jpeg'

function App() {

  // Inserção da Biblioteca Estados (manipulação dos dados)
  const [input, setInput] = useState('');

  // Cria o objeto de dados primeiramente vazio, porém pronto para receber os dados em JSON da API para renderizar na tela
  const [cep, setCEP] = useState('');

  // Função do tipo assíncrono para realizar o monitoramento de performance e execução do consumo dos dados pela API
  async function carregarDadosCEP() {

    // Realiza a pesquisa de acordo o CEP digitado (API)
    if(input === ''){
      alert('Digite um CEP válido"')
      return false;
    }

    // Remove caso o usuario diite o CEP com o traço (-) será removido para a realização da pesquisar
    const cepLimpo = input.replace(/\D/g, '');

    
    try{
      // try - Realiza a tentiva de execução do código de acordo com a informação passada!

      // Esta variavel contante, realiza uma requisição API de como pegar o valor digitado no input e realizar a consulta!
      const retorno = await api.get(`${input}/json`);

      // set - Entrada de dados.
      // get - Saída de dados.

      setCEP(retorno.data);
      setInput("");

    }catch{
      // catch - O retorno com a tratativa caso algo
      alert("CEP invalido (não encontrado)");
      setInput("");
    }
  }

  return (
    <div className="app-page">
      <header className="app-header">
        <Logotipo_BR_CPN/>
        <h1>Buscar CEP</h1>
        <h2>Sistema de busca instantânea de endereços nível Brasil</h2>  
      </header>

      <main >
          <section className="container">
            <h3>Digite o CEP que deseja pesquisar:</h3>
            <div className="box-form">
              <input type="number" placeholder="Digite seu cep aqui..." value={input} onChange={(event) => setInput(event.target.value)}></input>
              <button className="btn-pesquisar"><FiSearch size={20} color="#ffffff" onClick={carregarDadosCEP}/></button>
            </div>
          </section>
        

          {Object.keys(cep).length > 0 && (
          <section className="box-resultado">
              <h2>CEP: {cep.cep}</h2>

              <strong>Endereço: {cep.logradouro} {cep.complemento ? `- ${cep.complemento}` : ''}</strong>

              <strong>Bairro: {cep.bairro}</strong>

              <strong>Cidade: {cep.localidade}</strong>

              <strong>Estado: {cep.estado}</strong>

              <strong>Região: {cep.regiao}</strong>
            </section>
          )}
      </main>

      <footer className="end-page">
        <img src={logo_footer} className="logotipo-br"/>
        <span>Todos os direitos reservados 2025</span>
      </footer>

    </div>
  );
}

export default App;
