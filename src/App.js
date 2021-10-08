import logo from './logo.svg';
import './App.css';
import Suscriber from './components/Suscriber';
import Form from './components/Form';
import Footer from './components/Footer';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Form />
      <Cards name="Desarrollo Web"></Cards>
      <Filter />
      <Suscriber />
      <Footer />

    </div>
  );
}

export default App;
