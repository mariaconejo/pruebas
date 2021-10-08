import logo from './logo.svg';
import './App.css';
import Suscriber from './components/Suscriber';
import Form from './components/Form';
import Footer from './components/Footer';
import Filter from './components/Filter';
import Cards from './components/Cards';


function App() {
  return (
    <div>
      <Suscriber />
      <Form />
      <Cards name="Desarrollo Web"></Cards>
      <Filter />
      <Footer />

    </div>
  );
}

export default App;
