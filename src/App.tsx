"use client"

import { useState } from "react"

function App() {
  const [nome, setNome] = useState<string>("Maria da Silva")
  const [idade, setIdade] = useState<number>(0)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    console.log(`${nome} tem ${idade} ano(s) de idade`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {nome} - {idade}
      </div>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input 
        type="text"
        id="nome"
        value={nome}
        onChange={e => setNome(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="idade">Idade:</label>
        <input 
        type="number"
        id="idade"
        value={idade}
        onChange={e => setIdade(Number(e.target.value))} 
        />
      </div>
      <div>
        <input type="submit" value="Enviar"/>
      </div>
    </form>
  )
}

export default App
