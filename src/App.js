import './App.css';
import {useState} from 'react'
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Main } from './Components/Main';

function App() {

  const [activePage, setActivePage] = useState('Home');

  return (
    <div>
      <Header currentPage={activePage} />
      <div>Tjena</div>
      <Main currentPage={activePage}/>
      <Footer/>
    </div>
  );
}

export default App;
