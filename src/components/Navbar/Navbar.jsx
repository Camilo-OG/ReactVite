import { useState } from "react"


export default function Navbar({onSearch}) {

  const [search, setSearch] = useState('')

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  }

  const handleInputKeyDown = (e)=> {
    if(e.key === 'Enter') {
      onSearch(search)
    }
  }

  return (
    <div>
      <p>Mi Boletera</p>
      <input 
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}
      />
    </div>
  )
}
