import { Link } from 'react-router-dom';
import styles from './EventItem.module.css'

export default function EventItem({id, info, name, image, onEventClick}) {

  
  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id)
  }

  return (
    <div onClick={()=> console.log('Contenedor clickeado')} className={`${styles.eventItemContainer} ${styles.anotherContainer}`}> 
      <img src={image} alt={name} width={200} height={200} />
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button className={styles.seeMoreBtn} onClick={handleSeeMoreClick}>
          {/* <Link to={`/detail/${id}`}>
            Ver mas
          </Link> */}
          Ver mas
        </button>
      </div>
    </div>
  )
}
