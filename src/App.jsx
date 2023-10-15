import './App.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import SectionCategorias from './components/SectionCategorias';
import SectionProdutos from './components/SectionProdutos';
import SectionQuartos from "./components/SectionQuartos";
import SectionQualidades from './components/SectionQualidades';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <Banner></Banner>
        <SectionCategorias></SectionCategorias>
        <SectionProdutos></SectionProdutos>
        <SectionQuartos></SectionQuartos>
        <SectionQualidades></SectionQualidades>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
