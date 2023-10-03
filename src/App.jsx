import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Events from './components/Events/Events'
import SingUpForm from './components/SignUpForm/SingUpForm';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleNavbarSearch = (term)=> {
    setSearchTerm(term);
  };
  
  return (
    <>
    <SingUpForm/>
     {/*  <Navbar onSearch={handleNavbarSearch}/>
      <Events searchTerm={searchTerm}/> */}
    </>
  )
}

export default App
