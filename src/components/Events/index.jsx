import EventItem from "./components/EventItem";
import eventsJSON from "../../data/events.json";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function Events({searchTerm}) {

  const [data] = useState(eventsJSON)
  const {_embedded: { events }} = data;

  const navigate = useNavigate();

  const handleEventItemClick = id => {
    navigate(`/detail/${id}`)
  }
  
  const renderEvents = ()=> {
    let eventsFiltered = events;
    if( searchTerm.length > 0 ){
      eventsFiltered = eventsFiltered.filter((item)=> item.name.toLocaleLowerCase().includes(searchTerm));
    }
    return eventsFiltered.map((eventItem)=> (
      <EventItem 
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
      />))
  }

  return (

    <div>
      Events
      {renderEvents()}
    </div>
  )
}
