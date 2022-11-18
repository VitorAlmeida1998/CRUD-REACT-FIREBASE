export default function handler(req, res){
  if(req.method === "GET") {
      handlerGet(req, res)
  }else {
    res.status(405).send()
  }
}

function handleGet(req, res) {
  res.status(200).json({
    id:123,
    nome:'Maria',
    email: 'mariamariamaria@hotmail.com'
  })
}