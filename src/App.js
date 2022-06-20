import './App.css';
import {useState} from 'react'
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Main } from './Components/Main';

function App() {

  const [activePage, setActivePage] = useState('Home');

  const changeActivePage = (newPage) =>{
    setActivePage(newPage)
  }

  return (
    <div>
      {/* <button onClick={()=>setActivePage('Contact')}>Contact</button> stefan
      <button onClick={()=>setActivePage('Home')}>Home</button> */}
      <Header currentPage={activePage} onChangeActivePage={changeActivePage}   />
      <Main currentPage={activePage}/>
      <Footer/>
    </div>
  );
}

export default App;
