import Layout from "../components/Layout"

export default function Jsx(){
  const a = 4
  const b = 3 
  return (
    <Layout titulo="Entendendo o JSX"> 
    <div>
      {titulo}
      {subtitulo()}
      <p>
        {JSON.stringify({ nome: 'João', idade: 30 })}
      </p>
      <h1>JSX é um conceito Central</h1>
      {a * b}
    </div>
    </Layout>
  )
}