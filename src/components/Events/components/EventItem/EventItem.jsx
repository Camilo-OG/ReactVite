
export default function EventItem({id, info, name, image, onEventClick}) {

  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id)
  }

  return (
    <div onClick={()=> console.log('Contenedor clickeado')}> 
      <h4>{name}</h4>
      <img src={image} alt={name} width={200} height={200} />
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver mas</button>
    </div>
  )
}
