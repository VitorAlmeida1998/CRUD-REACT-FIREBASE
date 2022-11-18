import Navegador from '../components/Navegador'

export default function inicio() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh'
      }}
    >
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/app" cor="blueviolet" />
      <Navegador texto="JSX" destino="/jsx" cor="crimson" />
      <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="blue" />
      <Navegador texto="Estado" destino="/estado" cor="pink" />
      <Navegador texto="integração com API #01" destino="/integracao_1" cor="Yellow" />
      
    </div>
  )
}
