// Importando componentes
import CpBtnInicio from './components/CpBtnInicio';
import CpHeader from './components/CpHeader';
import CpBanner from './components/CpBanner';
import CpAbout from './components/CpAbout';
import CpProjects from './components/CpProjects';
import CpContact from './components/CpContact';
import CpFooter from './components/CpFooter';

// Importando arquivo css
import './css/style.css'

function App() {
  return (
    <>
      <CpBtnInicio/>
      <CpHeader/>      
      <main>
        <CpBanner/>
        <CpAbout/>
        <CpProjects/>
        <CpContact/>
      </main>
      <CpFooter/>
    </>

  );
}


export default App;