import { useRef, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../hooks/useEventsData";


export default function Home() {
  const {events,isLoading,error, fetchEvents} = useEventsData();
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef();

  const handleNavbarSearch = (term)=> {
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`)
  };

  useEffect(() => {
    fetchEvents();
  }, [])

 
  
  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {isLoading? <div>Cargando resultados</div> :  <Events searchTerm={searchTerm} events={events}/>}
      {!! error && <div> Ha ocurrido un error</div>}
    </>
  )
  
}
