import { useState } from 'react';



const useEventsData = ()=> {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState();

  
  const fetchEvents = async ()=>{
    try {
      const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=7dLCneAzqrAwCD11bGKVHnXgTfTyddbO')
      const data = await response.json();
      setIsLoading(false);
    } catch (error) {
      setError(error)
    }
  }
  fetchEvents();
  

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
    fetchEvents,
  }


}

export default useEventsData;