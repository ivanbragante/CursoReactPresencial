// Importando componentes
import Cp_btn_inicio from './components/Cp_btn_inicio';
import Cp_header from './components/Cp_header';
import Cp_banner from './components/Cp_banner';
import Cp_about from './components/Cp_about';
import Cp_projects from './components/Cp_projects';
import Cp_contact from './components/Cp_contact';
import Cp_footer from './components/Cp_footer';

// Importando arquivo css
import './css/style.css'

function App() {
  return (
    <>
      <Cp_btn_inicio/>
      <Cp_header/>      

      <main>
        <Cp_banner/>
        <Cp_about/>
        <Cp_projects/>
        <Cp_contact/>
      </main>

      <Cp_footer/>
    </>

  );
}


export default App;