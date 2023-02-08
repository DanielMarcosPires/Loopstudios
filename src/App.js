import "./App.css";

import imagem from "./img/banner.jpg";
import Banner from "./components/banner";
import Cabecalho from "./components/banner/cabecalho";
import Card from "./components/banner/card";
import Content from "./components/content";
import Rodape from "./components/rodape";

function App() {
  return (
    <div className="App">
      <Banner caminho={imagem}>
        <Cabecalho />
        <Card />
      </Banner>
      <Content />
      <Rodape />
    </div>
  );
}

export default App;
