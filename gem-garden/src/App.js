import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
