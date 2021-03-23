import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
        <NavBar/>
        <ItemListContainer id="titulo" greeting="hola"/>
        <ItemDetailContainer></ItemDetailContainer>
    </>
  );
}

export default App;
