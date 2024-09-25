// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import GeeksCards from './Components/Mainsection/GeeksCards';
import Cards from './Container/Cards';


function App() {
  return (
    <div>
      <Header />
      <Cards />
      {/* <GeeksCards /> */}
      <Footer />
     
    </div>
  );
}

export default App;
