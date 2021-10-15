import Suscriber from './components/Suscriber';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {Hero} from './components/Hero';
import Cards from './components/Cards'
import MyProvider from './aplication/provider';
import Banner from './components/Banner'

function App() {
  return (
    <div>
      <Navbar />
      <Hero  />
      <MyProvider value = "Filtrar por tecnico">
        <Cards />
      </MyProvider>
      <Suscriber />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
