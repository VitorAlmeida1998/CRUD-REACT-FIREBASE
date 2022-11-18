import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export default function ClientProCodigo() {
  const router = useRouter()

  return (
    <Layout titulo="Navegação Dinâmica">
      <div> Código = {router.query.codigo}</div>
      <div> Filial = {router.query.filial}</div>
    </Layout>
  )
}
