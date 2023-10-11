import { useState } from 'react';

const useEventsData = ()=> {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState();
  
  const fetchEvents = async (params)=>{
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=4SA83dC5Jok4wK8GBbFsVWKXBbRSHNo5${params?.length ? params : ''}`)
      const ApiData = await response.json();

      setData(ApiData)
      setIsLoading(false);
    } catch (error) {
      setError(error)
    }
  }

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
    fetchEvents,
  }


}

export default useEventsData;