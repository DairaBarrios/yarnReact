import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <>
        <NavBar/>
        <ItemListContainer id="titulo" greeting="hola"/>
    </>
  );
}

export default App;
