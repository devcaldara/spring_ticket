import './App.css';
import ExemploBotao from './Components/ExemploBotao/ExemploBotao';
import ExemploProps from './Components/ExemploProps/ExemploProps';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Section>Container section 01</Section>
      <Section>Container section 01</Section>
      <ExemploProps nome="Caldara" />
      <ExemploBotao nome="Salvar" tipo="salvar" size="p"/>
      <ExemploBotao nome="Salvar" tipo="salvar" size="m"/>
      <ExemploBotao nome="Cancelar" tipo="cancelar" size="g"/>
    </div>
  );
}

export default App;
