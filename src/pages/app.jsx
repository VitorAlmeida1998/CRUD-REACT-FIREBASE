import Cabeçalho from '../components/Cabecalho'
import Layout from '../components/Layout'
export default function App() {
  return (
    <div>
      <Layout titulo="Exemplo de CSS Modularizado"> 
      <Cabeçalho titulo="Next.js & React" />
      <Cabeçalho titulo="aprenda Next na prática!" />
      </Layout>
    </div>
  )
}
