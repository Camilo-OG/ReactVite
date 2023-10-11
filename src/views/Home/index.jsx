import { useRef, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../hooks/useEventsData";
import ReactPaginate from "react-paginate"
import styles from "./Home.module.css"


export default function Home() {
  const {events,isLoading,error, fetchEvents, page} = useEventsData();
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef();

  const handleNavbarSearch = (term)=> {
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`)
  };

  useEffect(() => {
    fetchEvents();
  }, [])

  const handlePageClick = ({selected})=> {
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
  }

  const renderEvents = () => {
    if(isLoading){
      return <div>Cargando resultados</div>
    }

    if(error){
      return <div> Ha ocurrido un error</div>
    }
    return (
      <div>
        <Events searchTerm={searchTerm} events={events}/>
        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.previous}
          pageClassName={styles.page}
          activeClassName={styles.activePage}
          disabledClassName={styles.disabledPage}
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="< "
          renderOnZeroPageCount={null}
        />
      </div>
    )
  }

 
  
  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
      
    </>
  )
  
}
