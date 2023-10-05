import { useParams } from "react-router-dom"

export default function Detail() {

  const {eventId} = useParams();
  console.log(eventId)
  return (
    <div>Detail</div>
  )
}
