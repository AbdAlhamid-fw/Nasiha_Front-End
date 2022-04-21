import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Layouts/Footer';
import NavBar from './Layouts/NavBar/navbar';
import MainRouter from './Routers';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <MainRouter />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
